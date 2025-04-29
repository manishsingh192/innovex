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
  Collapse,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { NavLink, useLocation } from "react-router-dom";
import mlogo from "../assets/INNOVEX (2).png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Project", path: "/project",
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
  const [openProjects, setOpenProjects] = useState(false);
  const [projectMenuAnchor, setProjectMenuAnchor] = useState(null);
  const timeoutRef = useRef(null);
  const location = useLocation();
  const primaryColor = "#13c46e";

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);
  const isActive = (path) => location.pathname === path;
  const startsWith = (path) => location.pathname.startsWith(path);

  const drawer = (
    <Box sx={{ width: 240 }} onClick={handleDrawerToggle}>
      <Box sx={{ textAlign: "center", my: 2 }}>
        <img src={mlogo} alt="Logo" height="60" />
      </Box>
      <List>
        {navItems.map(({ label, path, children }) => (
          <Box key={label}>
            {children ? (
              <>
                <ListItemButton
                  onClick={() => setOpenProjects(!openProjects)}
                  sx={{
                    color: startsWith(path) ? primaryColor : "inherit",
                  }}
                >
                  <ListItemText primary={label} />
                  {openProjects ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openProjects} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {children.map((child) => (
                      <ListItemButton
                        key={child.label}
                        component={NavLink}
                        to={child.path}
                        sx={{
                          pl: 4,
                          color: isActive(child.path)
                            ? primaryColor
                            : "inherit",
                        }}
                      >
                        <ListItemText primary={child.label} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </>
            ) : (
              <ListItem disablePadding>
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
            )}
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
          // py: 0.5,
          // px: { xs: 2, sm: 3, md: 12, lg: 12 },
        }}
      >
        <Toolbar>
          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <img src={mlogo} alt="Logo" height="60px" width="110px" />
          </Typography>

          {/* Desktop Menu */}
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
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    transformOrigin={{ vertical: "top", horizontal: "left" }}
                  >
                    {children.map((child) => (
                      <MenuItem
                        key={child.label}
                        component={NavLink}
                        to={child.path}
                        onClick={() => setProjectMenuAnchor(null)}
                        selected={isActive(child.path)}
                      >
                        {child.label}
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

      {/* Mobile Drawer */}
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

      {/* Spacer */}
      <Box sx={{ p: 3, width: "100%" }} />
    </Box>
  );
};

export default Navbar;
