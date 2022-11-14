import { USER_ROLE } from "app/constants/user"
import { useCurrentUser } from "app/users/hooks/useCurrentUser"

export const useIsAdmin = () => {
  const user = useCurrentUser()
  return user?.role === USER_ROLE.ADMIN
}
