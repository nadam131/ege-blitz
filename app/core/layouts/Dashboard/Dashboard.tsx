import {
  AppBar,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import ExitToAppIcon from "@mui/icons-material/ExitToApp"
import { useMutation } from "@blitzjs/rpc"
import logout from "app/auth/mutations/logout"
const drawerWidth = 200

export const Dashboard = ({ title, children }) => {
  const [logoutMutation] = useMutation(logout)
  console.log(title, "title")

  const handleLogOut = async () => {
    await logoutMutation()
  }

  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton selected={true}>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Profile Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogOut}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Box>
        <AppBar position="sticky" sx={{ ml: `${drawerWidth}px` }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
        <Box p={3} sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
          {children}
        </Box>
      </Box>
    </>
  )
}
