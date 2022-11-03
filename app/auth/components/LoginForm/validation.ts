import { z } from "zod"

import { email } from "app/validations"

export const LoginSchema = z.object({
  email,
  password: z.string(),
})
