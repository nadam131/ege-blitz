import { SecurePassword } from "@blitzjs/auth"
import { TEST_PASSWORD, TEST_USER } from "app/constants/user"

export const createTestUser = async (db, options?) => {
  const hashedPassword = await SecurePassword.hash(TEST_PASSWORD)
  return await db.user.create({
    data: {
      ...TEST_USER,
      hashedPassword,
      ...options?.data,
    },
    include: options?.include,
    select: options?.select,
  })
}
