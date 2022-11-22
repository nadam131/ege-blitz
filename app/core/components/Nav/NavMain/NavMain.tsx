import Link from "next/link"
import { useMutation } from "@blitzjs/rpc"
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import ExitToAppIcon from "@mui/icons-material/ExitToApp"

import logout from "app/auth/mutations/logout"

export const NavMain = () => {
  const [logoutMutation] = useMutation(logout)
  const handleLogOut = async () => {
    await logoutMutation()
  }
  return (
    <List>
      <Link href={"/profile"}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Profile Settings" />
          </ListItemButton>
        </ListItem>
      </Link>
      <ListItem disablePadding>
        <ListItemButton onClick={handleLogOut}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </ListItem>
    </List>
  )
}
