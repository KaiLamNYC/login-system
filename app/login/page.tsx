"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Icons } from "@/components/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { loginSchema } from "../schemas/login";
type Input = z.infer<typeof loginSchema>;

export default function LogInPage() {
	const router = useRouter();

	const form = useForm<Input>({
		resolver: zodResolver(loginSchema),
	});
	function onSubmit(values) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);

		// e.preventDefault();
		signIn("credentials", {
			...values,
			redirect: false,
		});
		router.push("/onboarding/1");
	}

	return (
		<div className='flex justify-center items-center h-screen '>
			<Card className='max-w-full w-3/4'>
				<div className='flex items-center gap-8'>
					<div className='max-w-full w-1/2'>
						<CardHeader className='mb-24'>
							<div className='flex flex-col items-center'>
								<Image
									src='/logo4.svg'
									alt='logo'
									height={50}
									width={160}
									className='mb-6'
								/>
								<CardTitle>Welcome!</CardTitle>
							</div>

							<div className='flex items-center'>
								<Separator className='w-36' />

								<CardDescription>Login To Your Account</CardDescription>
								<Separator className='w-36' />
							</div>
						</CardHeader>
						<CardContent>
							<Form {...form}>
								<form
									onSubmit={form.handleSubmit(onSubmit)}
									className='space-y-4'
								>
									<FormField
										control={form.control}
										name='emailId'
										render={({ field }) => (
											<FormItem>
												{/* <FormLabel>Username</FormLabel> */}
												<FormControl>
													<Input placeholder='Email-id' {...field} />
												</FormControl>
												{/* <FormDescription>
												This is your public display name.
											</FormDescription> */}
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='password'
										render={({ field }) => (
											<FormItem>
												{/* <FormLabel>Username</FormLabel> */}
												<FormControl>
													<Input
														placeholder='Password'
														{...field}
														type='password'
													/>
												</FormControl>
												{/* <FormDescription>
												This is your public display name.
											</FormDescription> */}
												<FormMessage />
											</FormItem>
										)}
									/>

									<Button type='submit' className='w-full'>
										LOGIN
									</Button>
								</form>
							</Form>
						</CardContent>
						<CardFooter className='flex flex-col'>
							<p className='text-sm mb-2'>OR</p>
							<div className='grid grid-cols-2 gap-4 mb-2'>
								<Button
									variant='outline'
									onClick={() =>
										signIn("google", {
											callbackUrl: "/onboarding/1",
										}).catch(console.error)
									}
								>
									<Icons.google className='mr-2 h-4 w-4' />
									Google
								</Button>
								<Button
									variant='outline'
									onClick={() =>
										signIn("github", {
											callbackUrl: "/onboarding/1",
										}).catch(console.error)
									}
								>
									<Icons.gitHub className='mr-2 h-4 w-4' />
									Github
								</Button>
							</div>
							<p className='text-sm mb-2'>
								Dont have an Account? <Link href='/signup'>SIGN UP</Link>
							</p>
						</CardFooter>
					</div>
					<Separator className='w-[1px] h-[400px]' orientation='vertical' />
					<Image
						src='/bro.svg'
						alt='bro'
						height={326}
						width={500}
						className='mr-6'
					/>
				</div>
			</Card>
		</div>
	);
}
