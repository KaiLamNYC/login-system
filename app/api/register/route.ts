import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request) {
	const body = await request.json();
	const { firstName, lastName, emailId, password, confirmPassword } = body;
	console.log(body);

	//CHECK USER IN DB FIRST
	const exist = await prisma.user.findUnique({
		where: {
			email: emailId,
		},
	});

	if (exist) {
		return new NextResponse("User already exists", { status: 400 });
	}

	const hashedPassword = await bcrypt.hash(password, 10);

	const user = await prisma.user.create({
		data: {
			firstName,
			lastName,
			email: emailId,
			hashedPassword,
		},
	});

	return NextResponse.json(user);
}
