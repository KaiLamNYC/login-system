"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";

const Providers = ({ children, ...props }) => {
	return <SessionProvider>{children}</SessionProvider>;
};
export default Providers;
