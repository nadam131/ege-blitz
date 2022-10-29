import { NotFoundError, AuthenticationError } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db from "db"

import { UserSettingsSchema } from "app/core/components/Form/FormUserSettings/validation"

export default resolver.pipe(
  resolver.zod(UserSettingsSchema),
  resolver.authorize(),
  async ({ firstName, lastName, nickName }, ctx) => {
    const user = await db.user.findFirst({ where: { id: ctx.session.userId as number } })
    if (!user) throw new NotFoundError()

    await db.user.update({
      where: { id: user.id },
      data: { firstName, lastName, nickName },
    })

    return true
  }
)
