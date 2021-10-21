import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Toolbar,
  IconButton,
  Badge,
  List,
  Typography,
  Box,
  Divider,
  CssBaseline,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Notifications,
  ChevronLeft,
  Dashboard as DashboardIcon,
  Group as GroupIcon,
  Business as BusinessIcon,
  ListAlt as ListAltIcon,
} from "@mui/icons-material";

import { AppBar, Drawer } from "./styledNavigation";
import { Link, useLocation } from "react-router-dom";
// import NavLink from "../common/navLink";

const mdTheme = createTheme();

const DashboardLayout: React.FC = () => {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" color="primary" open={open} elevation={1}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1, fontWeight: 600 }}
            >
              Blog Editor
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <Notifications />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          open={open}
          sx={{
            paper: { backgroundColor: "rgba(120,120,120,0.2)" },
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
              py: [1],
            }}
            color="secondary"
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeft />
            </IconButton>
          </Toolbar>
          <Divider />
          <Box>
            <List>
              <ListItem
                button
                component={Link}
                to="/"
                selected={"/" === location.pathname}
              >
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/app/users"
                selected={"/app/users" === location.pathname}
              >
                <ListItemIcon>
                  <GroupIcon />
                </ListItemIcon>
                <ListItemText primary="Users" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/app/companies"
                selected={"/app/companies" === location.pathname}
              >
                <ListItemIcon>
                  <BusinessIcon />
                </ListItemIcon>
                <ListItemText primary="Companies" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/app/roles"
                selected={"/app/roles" === location.pathname}
              >
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Role" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/app/categories"
                selected={"/app/categories" === location.pathname}
              >
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Category" />
              </ListItem>
              <ListItemButton
                component={Link}
                to="/app/blogs"
                selected={"/app/blogs" === location.pathname}
              >
                <ListItemIcon>
                  <ListAltIcon />
                </ListItemIcon>
                <ListItemText primary="Blog" />
              </ListItemButton>
              <ListItemButton
                component={Link}
                to="/app/subscription-plan"
                selected={"/app/subscription-plan" === location.pathname}
              >
                <ListItemIcon>
                  <ListAltIcon />
                </ListItemIcon>
                <ListItemText primary="Subscription plan" />
              </ListItemButton>
              <ListItemButton
                component={Link}
                to="/app/subscribers"
                selected={"/app/subscribers" === location.pathname}
              >
                <ListItemIcon>
                  <ListAltIcon />
                </ListItemIcon>
                <ListItemText primary="Subscribers" />
              </ListItemButton>
            </List>
          </Box>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
};

const MainLayout: React.FC = ({ children, ...rest }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <DashboardLayout />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
        p={2}
      >
        <Toolbar />
        <Box>{children}</Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
