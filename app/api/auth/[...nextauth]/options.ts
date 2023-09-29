import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
	providers: [
		GitHubProvider({
			clientId: process.env.GITHUB_CLIENT_ID as string,
			clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
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
			async authorize(credentials, req) {
				//FIND USER IN DATABASE AND COMPARE PASS WITH BCRYPT
				//HARD CODE FOR NOW
				const user = {
					id: "7",
					emailId: "kai@gmail.com",
					password: "nextauth",
				};
				if (
					credentials?.emailId === user.emailId &&
					credentials?.password === user.password
				) {
					return user;
				} else {
					return null;
				}
			},
		}),
	],
	//SETTING CUSTOM PAGES FOR ONBOARDING AND LOGIN FOR PROTECTED ROUTES
	pages: {
		signIn: "/login",
		newUser: "/onboarding",
	},
};
