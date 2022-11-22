import { useState } from "react"
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material"
import { ExpandLess, ExpandMore } from "@mui/icons-material"
import ContentPasteIcon from "@mui/icons-material/ContentPaste"
import Link from "next/link"

export const NavTasks = () => {
  const [openedId, setOpenedId] = useState("")
  const handleToggleCollapse = (id) => {
    if (id === openedId) return setOpenedId("")
    setOpenedId(id)
  }
  return (
    <>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleToggleCollapse("ege")}>
            <ListItemIcon>
              <ContentPasteIcon />
            </ListItemIcon>
            <ListItemText primary="EGE" />
            {openedId === "ege" ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={openedId === "ege"} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListSubheader component="div" id="nested-list-subheader">
              Чтение
            </ListSubheader>
            <Link href="/ege/reading/3">
              <ListItemButton>
                <ListItemText primary="Задание 3" />
              </ListItemButton>
            </Link>
          </List>
        </Collapse>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleToggleCollapse("oge")}>
            <ListItemIcon>
              <ContentPasteIcon />
            </ListItemIcon>
            <ListItemText primary="OGE" />
            {openedId === "oge" ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={openedId === "oge"} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListSubheader component="div" id="nested-list-subheader">
              Чтение
            </ListSubheader>
            <ListItemButton>
              <ListItemText primary="Задание 9" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Задание 10-16" />
            </ListItemButton>
            <ListSubheader component="div" id="nested-list-subheader">
              Грамматика
            </ListSubheader>
            <ListItemButton>
              <ListItemText primary="Задание 17-25" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Задание 26-31" />
            </ListItemButton>
            <ListSubheader component="div" id="nested-list-subheader">
              Аудиорование
            </ListSubheader>
            <ListItemButton>
              <ListItemText primary="Задание 1" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Задание 2" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Задание 3-8" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </>
  )
}
