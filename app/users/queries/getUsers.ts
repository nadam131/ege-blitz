import db from "db"
import { USER_ROLE } from "app/constants/user"

export default async function getUsers(_ = null) {
  return await db.user.findMany({
    where: { role: USER_ROLE.USER },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      nickName: true,
      email: true,
      exam: true,
    },
  })
}
