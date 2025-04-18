import React, { useState, useRef } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useLocation } from "react-router-dom";
import mlogo from "../assets/INNOVEX (2).png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Project",
    path: "/project",
    children: [
      { label: "Roads  Highway", path: "/project/roadshighway" },
      { label: "Rails  Metro", path: "/project/railsmetro" },
      { label: "Airport", path: "/project/airport" },
      { label: "Coalmining", path: "/project/coalmining" },
    ],
  },
  { label: "Career", path: "/career" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projectMenuAnchor, setProjectMenuAnchor] = useState(null);
  const timeoutRef = useRef(null);
  const location = useLocation();
  const primaryColor = "#13c46e";

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };
  
  const isActive = (path) => location.pathname === path;
  const startsWith = (path) => location.pathname.startsWith(path);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={mlogo} alt="Logo" height="60" />
      </Typography>
      <List>
        {navItems.map(({ label, path, children }) => (
          <Box key={label}>
            <ListItem disablePadding>
              <ListItemButton
                component={NavLink}
                to={path}
                sx={{
                  textAlign: "center",
                  color: startsWith(path) ? primaryColor : "inherit",
                }}
              >
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
            {children?.map(({ label, path }) => (
              <ListItem key={label} disablePadding sx={{ pl: 4 }}>
                <ListItemButton
                  component={NavLink}
                  to={path}
                  sx={{
                    textAlign: "left",
                    color: isActive(path) ? primaryColor : "inherit",
                  }}
                >
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
            ))}
          </Box>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        elevation={0}
        sx={{
          backgroundColor: "white",
          color: "#000",
          py: 0.5,
          px: { xs: 2, sm: 3, md: 12, lg: 12 },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <img src={mlogo} alt="Logo" height="60px" width="110px" />
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map(({ label, path, children }) =>
              children ? (
                <Box
                  key={label}
                  sx={{ display: "inline-block" }}
                  onMouseEnter={(e) => {
                    clearTimeout(timeoutRef.current);
                    setProjectMenuAnchor(e.currentTarget);
                  }}
                  onMouseLeave={() => {
                    timeoutRef.current = setTimeout(
                      () => setProjectMenuAnchor(null),
                      150
                    );
                  }}
                >
                  <Button
                    onClick={(e) => setProjectMenuAnchor(e.currentTarget)}
                    sx={{
                      color: startsWith(path) ? primaryColor : "#000",
                      fontWeight: startsWith(path) ? "bold" : "normal",
                      borderBottom: startsWith(path)
                        ? `2px solid ${primaryColor}`
                        : "none",
                      borderRadius: 0,
                    }}
                  >
                    {label}
                  </Button>

                  <Menu
                    anchorEl={projectMenuAnchor}
                    open={Boolean(projectMenuAnchor)}
                    onClose={() => setProjectMenuAnchor(null)}
                    MenuListProps={{
                      onMouseEnter: () => clearTimeout(timeoutRef.current),
                      onMouseLeave: () =>
                        (timeoutRef.current = setTimeout(
                          () => setProjectMenuAnchor(null),
                          150
                        )),
                    }}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    {children.map(({ label, path }) => (
                      <MenuItem
                        key={label}
                        component={NavLink}
                        to={path}
                        onClick={() => setProjectMenuAnchor(null)}
                        selected={isActive(path)}
                      >
                        {label}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ) : (
                <Button
                  key={label}
                  component={NavLink}
                  to={path}
                  sx={{
                    color: isActive(path) ? primaryColor : "#000",
                    fontWeight: isActive(path) ? "bold" : "normal",
                    borderBottom: isActive(path)
                      ? `2px solid ${primaryColor}`
                      : "none",
                    borderRadius: 0,
                  }}
                >
                  {label}
                </Button>
              )
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Box sx={{ p: 3, width: "100%" }} />
    </Box>
  );
};

export default Navbar;
