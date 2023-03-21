import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useLocation, Link } from "react-router-dom";
/* css file */
import "../header/Header.css";
const menuItem = [
  {
    path: "/first-assignment",
    value: "first-assignment",
    itmeName: "Assignment1",
  },
  {
    path: "/second-assignment",
    value: "second-assignment",
    itmeName: "Assignment2",
  },
];
const Header = () => {
  const location = useLocation();

  const [activePath, SetActivePath] = useState("first-assignment");
  const [anchorElNav, setAnchorElNav] = useState(null);

  useEffect(() => {
    let path = location.pathname.split("/")[1];
    console.log(path);
    SetActivePath(path);
  }, [location.pathname]);

  const handleOpenNavMenu = (event) => {
    console.log(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {/* Desktop View Code Start */}

              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                <img
                  src={`https://www.anzilsoft.com/images/logo.png`}
                  srcSet={`https://www.anzilsoft.com/images/logo.png`}
                  alt={"Logo-image"}
                />
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {menuItem.map((item, i) => (
                  <Button
                    key={i}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      mr: 2,
                      display: { xs: "none", md: "flex" },
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".3rem",
                      margin: "0px 27px",
                    }}
                    className={`${activePath === item.value ? "active" : ""}`}
                  >
                    <Link to={item.path} className="menuitemPath ">
                      {item.itmeName}
                    </Link>
                  </Button>
                ))}
              </Box>
              {/* Desktop View Code End */}

              {/* Mobile View Code Start */}
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="black"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {menuItem.map((item, i) => (
                    <MenuItem key={i} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">
                        <Link
                          to={item.path}
                          className="menuitemPath"
                          sx={{ margin: "0px 27px" }}
                        >
                          {item.itmeName}
                        </Link>
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "#1e7db0",
                  textDecoration: "none",
                }}
              >
                AnzilSoft
              </Typography>
              {/* Mobile View Code End*/}
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};

export default Header;
