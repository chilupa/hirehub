import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import WorkIcon from "@mui/icons-material/Work";
import Drawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import HelpIcon from "@mui/icons-material/Help";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useNavigate, useNavigation } from "react-router-dom";
import { amber, green, grey, orange, yellow } from "@mui/material/colors";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  const drawerOptions = [
    {
      label: "Dashboard",
      icon: <DashboardIcon />,
      route: "/",
    },
    {
      label: "Steaks",
      icon: <WhatshotIcon sx={{ color: orange[900] }} />,
      route: "/streaks",
    },
    {
      label: "Questions",
      icon: <HelpIcon />,
      route: "/questions",
    },
  ];

  const AppName = () => (
    <>
      <WorkIcon sx={{ mr: 1 }} />
      <Typography variant="h6">Hire Hub</Typography>
    </>
  );

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {drawerOptions.map(({ label, icon, route }, index) => (
          <ListItem key={label} disablePadding>
            <ListItemButton onClick={() => navigate(route)}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <WorkIcon sx={{ mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hire Hub
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <Toolbar>
            <AppName />
          </Toolbar>
          {list()}
        </Drawer>
      </AppBar>
    </Box>
  );
};

export default Header;
