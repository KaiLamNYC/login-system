"use client";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import React from "react";

type Props = {};

const DashboardPage = (props: Props) => {
	const { data: session } = useSession();

	return (
		<div>
			<h1>{session?.user.email}</h1>
		</div>
	);
};

export default DashboardPage;
