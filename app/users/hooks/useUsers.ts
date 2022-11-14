import { useQuery } from "@blitzjs/rpc"
import getUsers from "app/users/queries/getUsers"

export const useUsers = () => {
  const [users] = useQuery(getUsers, null)
  return users
}
