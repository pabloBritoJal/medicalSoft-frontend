import { z } from "zod";
import { signInSchema } from "../schemas/signInSchema";
import { signUpSchema } from "../schemas/signUpSchema";

export type SignInData = z.infer<typeof signInSchema>;

export type SignUpData = z.infer<typeof signUpSchema>;

export type FormType = SignUpData | SignInData;
