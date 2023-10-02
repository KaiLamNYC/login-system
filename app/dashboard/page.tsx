"use client";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";

type Props = {};

const DashboardPage = (props: Props) => {
	const { data: session } = useSession();
	const [progress, setProgress] = useState(0);

	const handleStep1 = (e) => {
		e.preventDefault();
		setProgress(40);
	};
	const handleStep2 = (e) => {
		e.preventDefault();
		setProgress(80);
	};
	const handleStep3 = (e) => {
		e.preventDefault();
		setProgress(100);
	};
	return (
		<div className='grid grid-cols-5 grid-rows-5 gap-4'>
			<div className='row-span-5'>
				<div className='mr-4 flex flex-col items-center'>
					<p>XeroCodee</p>

					<p>Builder Center</p>

					<p>Service Board</p>
					<Button
						onClick={() => signOut({ callbackUrl: "http://localhost:3000/" })}
					>
						Sign Out
					</Button>
				</div>
			</div>
			<div className='col-span-4 row-span-5'>
				<div className='grid grid-cols-4 grid-rows-5 gap-4'>
					<div className='col-span-4'>
						<Input placeholder='Search' />
					</div>
					<div className='col-span-4 row-start-2'>
						Hi{" "}
						{session?.user.firstName
							? session?.user.firstName
							: session?.user.name}{" "}
						!<p>Welcome to XeroCodee EcoSystem</p>
					</div>
					<div className='col-span-3 row-start-3'>
						<h3>Step 1</h3>

						<div className='flex'>
							<Card>
								<CardTitle>AWS</CardTitle>
								<Button onClick={handleStep1}>Add</Button>
							</Card>
							<Card>
								<CardTitle>GCP</CardTitle>
								<Button onClick={handleStep1}>Add</Button>
							</Card>
						</div>
					</div>
					<div className='col-span-3 col-start-1 row-start-4'>
						<h3>Step 2</h3>

						<div className='flex'>
							<Card>
								<CardTitle>AWS</CardTitle>
								<Button onClick={handleStep2}>Add</Button>
							</Card>
							<Card>
								<CardTitle>GCP</CardTitle>
								<Button onClick={handleStep2}>Add</Button>
							</Card>
							<Card>
								<CardTitle>GCP</CardTitle>

								<Button onClick={handleStep2}>Add</Button>
							</Card>
						</div>
					</div>
					<div className='row-span-3 col-start-4 row-start-3'>
						<h3>Your Progress</h3>
						<Progress value={progress} />
					</div>
					<div className='col-span-3 row-start-5'>
						<h3>Step 3</h3>

						<div className='flex'>
							<Card>
								<CardTitle>AWS</CardTitle>
								<Button onClick={handleStep3}>Add</Button>
							</Card>
							<Card>
								<CardTitle>AWS</CardTitle>
								<Button onClick={handleStep3}>Add</Button>
							</Card>
							<Card>
								<CardTitle>AWS</CardTitle>
								<Button onClick={handleStep3}>Add</Button>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardPage;
