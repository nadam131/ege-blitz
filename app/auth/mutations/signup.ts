import { SecurePassword } from "@blitzjs/auth"
import { resolver } from "@blitzjs/rpc"
import db from "db"
import { Role } from "types"
import { Signup } from "../validations"

export default resolver.pipe(
  resolver.zod(Signup),
  async ({ email, firstName, lastName, nickName, age, exam, password }, ctx) => {
    const hashedPassword = await SecurePassword.hash(password.trim())
    console.log(firstName, "firstName")
    const user = await db.user.create({
      data: {
        firstName,
        lastName,
        nickName,
        age,
        exam,
        email: email.toLowerCase().trim(),
        hashedPassword,
        role: "USER",
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        nickName: true,
        age: true,
        exam: true,
        email: true,
        role: true,
      },
    })

    await ctx.session.$create({ userId: user.id, role: user.role as Role })
    return user
  }
)
