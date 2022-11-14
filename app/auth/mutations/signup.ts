import { SecurePassword } from "@blitzjs/auth"
import { resolver } from "@blitzjs/rpc"
import { USER_ROLE } from "app/constants/user"
import db from "db"
import { Role } from "types"
import { SignupSchema } from "../components/SignupForm"

export default resolver.pipe(
  resolver.zod(SignupSchema),
  async ({ email, firstName, lastName, nickName, exam, password }, ctx) => {
    const hashedPassword = await SecurePassword.hash(password?.trim())
    const user = await db.user.create({
      data: {
        firstName,
        lastName,
        nickName,
        email: email.toLowerCase().trim(),
        exam,
        hashedPassword,
        role: USER_ROLE.USER,
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        role: true,
      },
    })

    await ctx.session.$create({ userId: user.id, role: user.role as Role })
    return user
  }
)
