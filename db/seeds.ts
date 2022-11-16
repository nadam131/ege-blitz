import { SecurePassword } from "@blitzjs/auth"
import Chance from "chance"

import { ADMIN_USER, USER_ROLE } from "app/constants/user"

import db from "./index"

/*
 * This seed function is executed when you run `blitz db seed`.
 *
 * Probably you want to use a library like https://chancejs.com
 * to easily generate realistic data.
 */
const seed = async () => {
  const adminPassword = await SecurePassword.hash("misha-sushi")

  const hasAdmin = !!(await db.user.findFirst({ where: { role: USER_ROLE.ADMIN } }))
  const hasUsers = !!(await db.user.findMany({ where: { role: USER_ROLE.USER } }))

  if (!hasAdmin) {
    await db.user.create({
      data: { ...ADMIN_USER, hashedPassword: adminPassword },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        role: true,
      },
    })
  }

  if (!hasUsers) {
    for (let index = 0; index < 15; index++) {
      const chance = new Chance()

      const randomUser = {
        firstName: chance.first(),
        lastName: chance.last(),
        nickName: chance.name(),
        email: chance.email(),
        exam: chance.pickone(["ege", "oge"]),
        hashedPassword: "123123",
      }

      await db.user.create({
        data: randomUser,
        select: {
          id: true,
          firstName: true,
          lastName: true,
          role: true,
        },
      })
    }
  }
}

export default seed
