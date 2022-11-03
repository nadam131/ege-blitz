import { z } from "zod"

import { firstName, lastName, nickName, email, password, exam } from "app/validations"

export const SignupSchema = z.object({
  firstName,
  lastName,
  nickName,
  email,
  password,
  exam,
})
