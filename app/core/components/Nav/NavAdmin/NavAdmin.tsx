import Link from "next/link"
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"

export const NavAdmin = () => {
  return (
    <List>
      <Link href={"/users"}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItemButton>
        </ListItem>
      </Link>
    </List>
  )
}
