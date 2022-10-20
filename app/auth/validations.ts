import { z } from "zod"

export const email = z
  .string()
  .email()
  .transform((str) => str.toLowerCase().trim())
  .optional()

export const password = z
  .string()
  .min(10)
  .max(100)
  .transform((str) => str.trim())
  .optional()

export const firstName = z.string().min(1).max(50)
export const lastName = z.string().min(1).max(50)
export const nickName = z.string().min(1).max(50).optional()
export const age = z.string().optional()
export const exam = z.enum(["ege", "oge"]).optional()

export const Signup = z.object({
  // email,
  firstName,
  lastName,
  // nickName,
  // age,
  // exam,
  // password,
})

export const Login = z.object({
  email,
  password: z.string(),
})

export const ForgotPassword = z.object({
  email,
})

export const ResetPassword = z
  .object({
    password: password,
    passwordConfirmation: password,
    token: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ["passwordConfirmation"], // set the path of the error
  })

export const ChangePassword = z.object({
  currentPassword: z.string(),
  newPassword: password,
})
