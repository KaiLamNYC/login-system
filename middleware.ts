export { default } from "next-auth/middleware";
export const config = { matcher: ["/dashboard", "/onboarding/:path*"] };
// https://nextjs.org/docs/app/building-your-application/routing/middleware#matching-paths
