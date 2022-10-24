import { z } from "zod"

export const firstName = z.string().min(1).max(50)
export const lastName = z.string().min(1).max(50)
export const nickName = z.string().min(1).max(50)
export const email = z
  .string()
  .email()
  .transform((str) => str.toLowerCase().trim())
export const password = z
  .string()
  .min(10)
  .max(100)
  .transform((str) => str.trim())
export const exam = z.enum(["ege", "oge"])

export const SignupSchema = z.object({
  firstName,
  lastName,
  nickName,
  email,
  password,
  exam,
})
