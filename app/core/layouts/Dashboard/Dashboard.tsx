import { AppBar, Box, Divider, Drawer, Toolbar, Typography } from "@mui/material"

import { useIsAdmin } from "app/hooks/useIsAdmin"
import { NavAdmin } from "app/core/components/Nav/NavAdmin/NavAdmin"
import { NavMain } from "app/core/components/Nav/NavMain/NavMain"
import { NavTasks } from "app/core/components/Nav/NavTasks/NavTasks"

const DRAWER_WIDTH = 200

export const Dashboard = ({ title, children }) => {
  const isAdmin = useIsAdmin()

  return (
    <>
      <Drawer
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <NavTasks />
        <Divider />
        <NavMain />
        <Divider />
        {isAdmin && <NavAdmin />}
      </Drawer>
      <Box>
        <AppBar position="sticky" sx={{ ml: `${DRAWER_WIDTH}px` }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
        <Box p={3} sx={{ width: `calc(100% - ${DRAWER_WIDTH}px)`, ml: `${DRAWER_WIDTH}px` }}>
          {children}
        </Box>
      </Box>
    </>
  )
}
