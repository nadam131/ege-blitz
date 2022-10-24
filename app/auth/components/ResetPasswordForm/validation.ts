import { z } from "zod"

export const password = z
  .string()
  .min(10)
  .max(100)
  .transform((str) => str.trim())

export const ResetPasswordSchema = z.object({
  password,
})
