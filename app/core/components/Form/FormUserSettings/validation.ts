import { z } from "zod"

import { firstName, lastName, nickName } from "app/validations"

export const UserSettingsSchema = z.object({
  firstName,
  lastName,
  nickName,
})
