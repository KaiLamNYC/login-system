"use client";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Hand } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const OnboardingOption1 = (props: Props) => {
	const { data: session } = useSession();
	const router = useRouter();

	const handleOnboarding = async () => {
		//CAN PUT IN LOGIC TO SAVE OPTIONS TO USER IN DATABASE THEN CHANGE ONBOARDED TO TRUE
		router.push("/dashboard");
	};
	return (
		<div className='flex justify-center items-center h-screen '>
			<Card className='max-w-full w-3/4'>
				<CardHeader className='flex flex-col'>
					<div className='flex flex-col items-center'>
						<Image
							src='/logo4.svg'
							alt='logo'
							height={50}
							width={160}
							className='mb-6'
						/>
						<CardTitle>Welcome! {session?.user.firstName}</CardTitle>
					</div>

					<div className='flex flex-row justify-center'>
						<Separator className='w-2/6' />

						<CardDescription>Create Your Account</CardDescription>
						<Separator className='w-2/6' />
					</div>
				</CardHeader>
				<CardContent className='flex justify-center'>
					<div className='flex flex-row justify-center gap-20'>
						<Button onClick={handleOnboarding}>Self Hosting</Button>
						<Button onClick={handleOnboarding}>XeroCodee Hosting</Button>
						{/* <Button>Company</Button> */}
					</div>
				</CardContent>
				{/* <CardFooter className='flex flex-col'></CardFooter> */}
			</Card>
		</div>
	);
};

export default OnboardingOption1;
