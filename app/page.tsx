import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";
import * as React from "react";
import { getAuthSession } from "./api/auth/[...nextauth]/options";

export default async function Home() {
	const session = await getAuthSession();

	// if (session) {
	// 	return redirect("/dashboard");
	// }
	return (
		<div className='flex justify-center h-screen items-center flex-col'>
			<h1>Kai Login System</h1>
			<Link href={"/login"}>
				<Button>LOGIN</Button>
			</Link>
			<Link href={"/signup"}>
				<Button>SIGN UP</Button>
			</Link>
		</div>
	);
}
