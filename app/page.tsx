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
import Link from "next/link";

export default function Home() {
	const form = useForm();
	function onSubmit(values) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	return (
		<div className='flex justify-center items-center h-screen '>
			<Card className='max-w-full spa'>
				<div className='flex items-center '>
					<div>
						<CardHeader>
							<Image src='/logo4.svg' alt='logo' height={50} width={160} />
							<CardTitle>Hello!</CardTitle>

							<Separator />

							<CardDescription>Create Your Account</CardDescription>
							{/* <div className='relative'>
							<div className='absolute inset-0 flex items-center'>
								<span className='w-full border-t' />
							</div>
							<div className='relative flex justify-center text-xs uppercase'>
								<span className='bg-background px-2 text-muted-foreground'>
									Or continue with
								</span>
							</div>
						</div> */}
							{/* <Separator /> */}
						</CardHeader>
						<CardContent>
							<Form {...form}>
								<form
									onSubmit={form.handleSubmit(onSubmit)}
									className='space-y-4'
								>
									<FormField
										control={form.control}
										name='firstName'
										render={({ field }) => (
											<FormItem>
												{/* <FormLabel>Username</FormLabel> */}
												<FormControl>
													<Input placeholder='First Name' {...field} />
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
										name='lastName'
										render={({ field }) => (
											<FormItem>
												{/* <FormLabel>Username</FormLabel> */}
												<FormControl>
													<Input placeholder='Last Name' {...field} />
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
													<Input placeholder='Password' {...field} />
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
										name='confirmPassword'
										render={({ field }) => (
											<FormItem>
												{/* <FormLabel>Username</FormLabel> */}
												<FormControl>
													<Input placeholder='Confirm Password' {...field} />
												</FormControl>
												{/* <FormDescription>
												This is your public display name.
											</FormDescription> */}
												<FormMessage />
											</FormItem>
										)}
									/>
									<Button type='submit'>SIGN UP</Button>
								</form>
							</Form>
						</CardContent>
						<CardFooter className='flex flex-col'>
							<p className='text-sm mb-2'>OR</p>
							<div className='grid grid-cols-2 gap-4 mb-2'>
								<Button variant='outline'>
									<Icons.google className='mr-2 h-4 w-4' />
									Google
								</Button>
								<Button variant='outline'>
									<Icons.gitHub className='mr-2 h-4 w-4' />
									Github
								</Button>
							</div>
							<p className='text-sm mb-2'>
								Already have an Account? <Link href='/login'>LOGIN</Link>
							</p>
						</CardFooter>
					</div>
					<Separator orientation='vertical' />
					<Image src='/bro.svg' alt='bro' height={326} width={500} />
				</div>
			</Card>
		</div>
	);
}
