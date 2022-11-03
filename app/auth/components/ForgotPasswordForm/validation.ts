import { z } from "zod"

import { email } from "app/validations"

export const ForgotPasswordSchema = z.object({
  email,
})
