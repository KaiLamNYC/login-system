// import { authOptions } from "@/lib/nextauth";
import NextAuth from "next-auth/next";
import { options } from "./options";

// https://next-auth.js.org/getting-started/typescript

const handler = NextAuth(options);

//GET REQUEST AND POST REQUEST ARE BOTH HANDLER
export { handler as GET, handler as POST };
