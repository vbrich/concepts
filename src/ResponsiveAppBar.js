import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import dark from './themes/dark';
import light from './themes/light';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import { CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // ROUTING
  const navigate = useNavigate();
  const routeHome = () => {
    navigate('/concepts/');    
    setAnchorElNav(null);
  }
 
  const routeAbout = () => {
    navigate('/concepts/about');    
    setAnchorElNav(null);
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  }
  
  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark): createTheme(light)}>
      <CssBaseline/>
      <AppBar position="sticky" style={{ transition: 'all .5s linear' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                {/*<MenuIcon />*/}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {/* actual menu items */}
                <MenuItem onClick={routeHome}>
                    <Typography textAlign="center">Home</Typography>
                </MenuItem>
                <MenuItem onClick={routeAbout}>
                    <Typography textAlign="center">About</Typography>
                </MenuItem>                
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {/* main buttons */}
              <Button
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  onClick={routeHome}
                >
                  Home
              </Button>
              <Button
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  onClick={routeAbout}
                >
                  About
              </Button>              
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <IconButton 
                color="inherit" 
                aria-label="light" 
                size="small" 
                onClick={() => {
                  changeTheme();
                }}>
                {isDarkTheme ? <LightModeOutlinedIcon fontSize="inherit"/> : <NightlightOutlinedIcon fontSize="inherit"/>}  
              </IconButton>
             
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Outlet></Outlet>

    </ThemeProvider>
  );
}
export default ResponsiveAppBar;