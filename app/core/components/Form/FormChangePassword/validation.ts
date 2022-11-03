import { z } from "zod"
import { password } from "app/validations"

export const ChangePasswordSchema = z
  .object({
    currentPassword: password,
    newPassword: password,
  })
  .refine((data) => data.currentPassword !== data.newPassword, {
    message: "Passwords should be different",
    path: ["newPassword"], // set the path of the error
  })
