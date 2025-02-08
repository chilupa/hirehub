import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import HelpIcon from "@mui/icons-material/Help";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

const Header = ({ setSearchTerm, setSelectedCompany, searchTerm, mockData }) => {
  const [open, setOpen] = useState(false);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const navigate = useNavigate();

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOpen(open);
  };

  const drawerOptions = [
    { label: "Dashboard", icon: <DashboardIcon />, route: "/" },
    { label: "Streaks", icon: <WhatshotIcon />, route: "/streaks" },
    { label: "Questions", icon: <HelpIcon />, route: "/questions" },
  ];

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filter companies for auto-suggestions
    const filtered = mockData.filter((item) =>
      item.company_name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCompanies(filtered);
  };

  const handleCompanyClick = (company) => {
    setSelectedCompany(company); // Update selected company
    setSearchTerm(company.company_name); // Update search bar with selected company name
    setFilteredCompanies([]); // Clear suggestions
  };

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        {drawerOptions.map(({ label, icon, route }) => (
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
      <AppBar position="static" sx={{ p: 1 }}>
        <Toolbar>
          {/* Hamburger Menu */}
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
          {/* App Name */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hire Hub
          </Typography>
          {/* Search Bar */}
          <Box sx={{ position: "relative", width: "300px" }}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search company..."
              value={searchTerm}
              onChange={handleSearchChange}
              fullWidth
              sx={{
                backgroundColor: "white",
                borderRadius: "4px",
              }}
            />
            {filteredCompanies.length > 0 && (
              <Paper
                sx={{
                  position: "absolute",
                  width: "100%",
                  maxHeight: "150px",
                  overflowY: "auto",
                  zIndex: 1000,
                }}
              >
                <List>
                  {filteredCompanies.map((company) => (
                    <ListItem
                      button
                      key={company.id}
                      onClick={() => handleCompanyClick(company)}
                    >
                      {company.company_name}
                    </ListItem>
                  ))}
                </List>
              </Paper>
            )}
          </Box>
        </Toolbar>
        {/* Drawer */}
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </AppBar>
    </Box>
  );
};

export default Header;
