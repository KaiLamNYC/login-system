import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { getServerSession, type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
const prisma = new PrismaClient();

export const options: NextAuthOptions = {
	providers: [
		GitHubProvider({
			clientId: process.env.GITHUB_CLIENT_ID as string,
			clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				emailId: {
					label: "EmailId:",
					type: "text",
					placeholder: "email-id",
				},
				password: {
					label: "Password:",
					type: "password",
				},
			},
			async authorize(credentials) {
				//CHECKING FIELDS TO SEE IF VALID
				const user = await prisma.user.findUnique({
					where: {
						email: credentials?.emailId,
					},
				});

				if (!user) {
					return null;
				}

				//CHECKING PASSWORD
				const passwordsMatch = await bcrypt.compare(
					credentials?.password,
					user.hashedPassword
				);

				if (!passwordsMatch) {
					return null;
				}
				return user;
			},
		}),
	],
	//SETTING CUSTOM PAGES FOR ONBOARDING AND LOGIN FOR PROTECTED ROUTES
	pages: {
		signIn: "/login",
		// newUser: "/onboarding",
	},
	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		async jwt({ token, user, session }) {
			//PASSING IN FIRSTNAME AND ONBOARDING TO TOKEN
			if (user) {
				return {
					...token,
					onboarded: user.onboarded,
					firstName: user.firstName,
				};
			}
			return token;
		},
		async session({ session, token, user }) {
			//PASSING ONBOARDED AND FIRSTNAME TO SESSION
			return {
				...session,
				user: {
					...session.user,
					onboarded: token.onboarded,
					firstName: token.firstName,
				},
			};

			// return session;
		},
	},
};

//https://next-auth.js.org/configuration/nextjs#getserversession
export const getAuthSession = () => {
	return getServerSession(options);
};
