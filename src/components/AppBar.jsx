import React, { useState, useRef } from "react";
import { useLocation, NavLink } from "react-router-dom";
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
  Link,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Email, Phone } from "@mui/icons-material";
import mlogo from "../assets/INNOVEX (2).png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Project", 
    path: "/project",
    children: [
      { label: "Roads & Highway", path: "/project/roadshighway" },
      { label: "Rails & Metro", path: "/project/railsmetro" },
      { label: "Airport", path: "/project/airport" },
      { label: "Coal Mining", path: "/project/coalmining" },
    ],
  },
  { label: "Service", path: "/service" },
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
                    '&:hover': { backgroundColor: 'action.hover' }
                  }}
                >
                  <ListItemText primary={label}
                   />
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
                          color: isActive(child.path) ? primaryColor : "inherit",
                          '&:hover': { backgroundColor: 'action.hover' }
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
                    '&:hover': { backgroundColor: 'action.hover' }
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
          backgroundColor: "rgba(255, 255, 255, 0.25)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          color: "text.primary",
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        }}
      >
        <Toolbar sx={{ 
          px: { xs: 2, sm: 3, md: 6, lg: 8 },
          justifyContent: "space-between"
        }}>
          {/* Left side - Logo */}
          <Box>
            <img src={mlogo} alt="Logo" height="60px" width="110px" />
          </Box>

          {/* Middle - Contact Info (Desktop only) */}
          <Stack 
            direction="row" 
            spacing={3}
            sx={{ 
              display: { xs: "none", lg: "flex" },
              alignItems: "center",
              mx: 4 // Add margin to separate from logo and nav
              
            }}
          >
            <Link
              href="mailto:info@innovexengineering.com"
              underline="none"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: 'text.secondary',
                fontSize: '0.95rem',
                transition: 'all 0.3s ease',
                '&:hover': { color: primaryColor },
              }}
            >
              <Email sx={{ fontSize: '1.2rem' }} />
              support@innovexengineering.com
            </Link>

            <Link
              href="tel:+919876543210"
              underline="none"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: 'text.secondary',
                fontSize: '0.95rem',
                transition: 'all 0.3s ease',
                '&:hover': { color: primaryColor },
              }}
            >
              <Phone sx={{ fontSize: '1.2rem' }} />
              +91 98765 43210
            </Link>
          </Stack>

          {/* Right side - Navigation and Mobile Menu */}
          <Box sx={{ 
            display: "flex",
            alignItems: "center",
            gap: 2
          }}>
            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none" }, color: 'text.primary' }}
            >
              <MenuIcon />
            </IconButton>

            {/* Desktop Navigation */}
            <Box sx={{ 
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
            }}>
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
                        color: startsWith(path) ? primaryColor : "text.primary",
                        fontWeight: startsWith(path) ? "bold" : "normal",
                        borderRadius: 0,
                        py: 1.5,
                        px: 2,
                        '&:hover': {
                          backgroundColor: 'transparent',
                          color: primaryColor,
                        }
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
                      sx={{
                        '& .MuiPaper-root': {
                          boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                          borderRadius: '8px',
                          minWidth: '200px',
                        }
                      }}
                    >
                      {children.map((child) => (
                        <MenuItem
                          key={child.label}
                          component={NavLink}
                          to={child.path}
                          onClick={() => setProjectMenuAnchor(null)}
                          selected={isActive(child.path)}
                          sx={{
                            color: isActive(child.path) ? primaryColor : 'text.primary',
                            '&:hover': { backgroundColor: 'action.hover' }
                          }}
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
                      color: isActive(path) ? primaryColor : "text.primary",
                      fontWeight: isActive(path) ? "bold" : "normal",
                      borderRadius: 0,
                      py: 1.5,
                      px: 2,
                      '&:hover': {
                        backgroundColor: 'transparent',
                        color: primaryColor,
                      }
                    }}
                  >
                    {label}
                  </Button>
                )
              )}
            </Box>
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
            "& .MuiDrawer-paper": { 
              boxSizing: "border-box", 
              width: 240,
              backgroundColor: 'background.paper',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Spacer */}
      <Box sx={{ height: '64px' }} />
    </Box>
  );
};

export default Navbar;