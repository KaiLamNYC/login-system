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
import React from "react";

type Props = {};

const OnboardingOption1 = (props: Props) => {
	const { data: session } = useSession();

	const handleOnboarding = async () => {};
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
						<CardTitle>Welcome! {session?.user.email}</CardTitle>
					</div>

					<div className='flex flex-row justify-center'>
						<Separator className='w-2/6' />

						<CardDescription>Create Your Account</CardDescription>
						<Separator className='w-2/6' />
					</div>
				</CardHeader>
				<CardContent className='flex justify-center'>
					{/* <div className='flex flex-row justify-center gap-20'>
						<Button>Developer</Button>
						<Button>Organization</Button>
						<Button>Company</Button>
					</div>
					<div className='flex'>
						<Input placeholder={"test"} />
						<Button>SUBMIT</Button>
					</div> */}
					<Tabs defaultValue='account' className='w-[400px]'>
						<TabsList>
							<TabsTrigger value='developer'>Developer</TabsTrigger>
							<TabsTrigger value='organization'>Organization</TabsTrigger>
							<TabsTrigger value='company'>Company</TabsTrigger>
						</TabsList>
						<TabsContent value='developer'>
							<div className='flex'>
								<Input placeholder={"Developer Name"} />
								<Button onClick={handleOnboarding}>SUBMIT</Button>
							</div>
						</TabsContent>
						<TabsContent value='organization'>
							<div className='flex'>
								<Input placeholder={"Organization Name"} />
								<Button onClick={handleOnboarding}>SUBMIT</Button>
							</div>
						</TabsContent>
						<TabsContent value='company'>
							<div className='flex'>
								<Input placeholder={"Company Name"} />
								<Button onClick={handleOnboarding}>SUBMIT</Button>
							</div>
						</TabsContent>
					</Tabs>
				</CardContent>
				{/* <CardFooter className='flex flex-col'></CardFooter> */}
			</Card>
		</div>
	);
};

export default OnboardingOption1;
