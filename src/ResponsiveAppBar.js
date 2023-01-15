import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import dark from './themes/dark';
import light from './themes/light';
// import purple_light from './themes/purple_light';
//import purple_dark from './themes/purple_dark';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import { CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const routeHome = () => {
    navigate('/');    
    setAnchorElNav(null);
  }

  const routeFavorites = () => {
    navigate('/favorites');    
    setAnchorElNav(null);
  }  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

/* 
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
*/

  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [linkColor, setLinkColor] = useState('#000');
  
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    if (linkColor === '#000')
      setLinkColor('#fff');
    else 
      setLinkColor('#000');
  }
  
  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark): createTheme(light)}>
      <CssBaseline/>
      <AppBar position="sticky" style={{ transition: 'all .5s linear' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <VolunteerActivismIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Give
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
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
                <MenuItem onClick={routeFavorites}>
                    <Typography textAlign="center">Favorites</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <VolunteerActivismIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Give
            </Typography>
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
                  onClick={routeFavorites}
                >
                  Favorites
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

{/* 
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
*/}              
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Outlet></Outlet>

    </ThemeProvider>
  );
}
export default ResponsiveAppBar;