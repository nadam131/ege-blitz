import { SecurePassword } from "@blitzjs/auth"
import Chance from "chance"

import { ADMIN_USER } from "app/constants/user"

import db from "./index"

/*
 * This seed function is executed when you run `blitz db seed`.
 *
 * Probably you want to use a library like https://chancejs.com
 * to easily generate realistic data.
 */
const seed = async () => {
  const adminPassword = await SecurePassword.hash("misha-sushi")

  await db.user.create({
    data: { ...ADMIN_USER, hashedPassword: adminPassword },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      role: true,
    },
  })

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

export default seed
