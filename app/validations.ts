import { z } from "zod"

export const email = z
  .string()
  .email()
  .transform((str) => str.toLowerCase().trim())

export const password = z
  .string()
  .min(10)
  .max(100)
  .transform((str) => str.trim())

export const firstName = z
  .string()
  .regex(/^[A-Za-z]+$/)
  .min(2)
  .max(50)
export const lastName = z
  .string()
  .regex(/^[A-Za-z]+$/)
  .min(2)
  .max(50)
export const nickName = z.string().min(3).max(50)
export const exam = z.enum(["ege", "oge"])
