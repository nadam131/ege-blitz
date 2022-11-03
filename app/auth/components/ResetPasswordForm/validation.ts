import { z } from "zod"

import { password } from "app/validations"

export const ResetPasswordSchema = z.object({
  password,
})
