export { default } from "next-auth/middleware";
export const config = { matcher: ["/onboarding/:path*", "/dashboard"] };
// https://nextjs.org/docs/app/building-your-application/routing/middleware#matching-paths
