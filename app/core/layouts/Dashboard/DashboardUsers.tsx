import { Stack } from "@mui/material"

import { TableUsers } from "app/core/components/Table/TableUsers/TableUsers"
import { User } from "app/types/user"
import { useUsers } from "app/users/hooks/useUsers"

export const DashboardUsers = () => {
  const users = useUsers()

  const prepareTableUserList = (users: User[]) => {
    return users.map((user) => [
      user.nickName,
      user.lastName,
      user.firstName,
      user.email,
      user.exam,
    ])
  }

  console.log(prepareTableUserList(users), "prepareTableUserList(users)")

  return (
    <Stack direction="row" spacing={4}>
      <TableUsers data={prepareTableUserList(users)} />
    </Stack>
  )
}
