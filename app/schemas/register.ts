import { z } from "zod";

export const registerSchema = z.object({
	firstName: z
		.string()
		.min(2, { message: "First Name must be at least 2 characters long" }),
	lastName: z
		.string()
		.min(2, { message: "Last Name must be at least 2 characters long" }),
	password: z
		.string()
		.min(6, { message: "Password must be at least 6 characters long" }),
	confirmPassword: z
		.string()
		.min(6, { message: "Password must be at least 6 characters long" }),
	emailId: z.string().email({ message: "Invalid email address" }),
});
