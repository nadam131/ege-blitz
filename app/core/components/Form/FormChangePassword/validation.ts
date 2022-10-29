import { z } from "zod"

export const currentPassword = z.string()
export const newPassword = z.string()

export const ChangePasswordSchema = z.object({
  currentPassword,
  newPassword,
})
