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
import theme1 from './themes/theme1';
import theme2 from './themes/theme2';
import theme3 from './themes/theme3';
import theme4 from './themes/theme4';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
// import ColorLensIcon from '@mui/icons-material/ColorLens';
import { CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


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

  const t1 = createTheme(theme1);
  const t2 = createTheme(theme2);
  const t3 = createTheme(theme3);
  const t4 = createTheme(theme4);
  const [selectedTheme, setSelectedTheme] = useState(t1);
  const [vibe, setVibe] = useState(1);

  const handleThemeChange = (event) => {
    console.log('testing...');
    if (event.target.value === 1) {
      setSelectedTheme(t1);
      setVibe(1);
    }
    else if (event.target.value === 2) {
      setSelectedTheme(t2);
      setVibe(2);
    }
    else if (event.target.value === 3) {
      setSelectedTheme(t3);
      setVibe(3);
    }
    else if (event.target.value === 4) {
      setSelectedTheme(t4);
      setVibe(4);
    }    
  };

  return (
    <ThemeProvider theme={selectedTheme}>
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


              {/* 
              <IconButton 
                style={{ color: 'black' }}
                aria-label="light" 
                size="small" 
                onClick={() => {
                  setTheme1();
                }}>
                <ColorLensIcon fontSize="inherit"/>  
              </IconButton>
              <IconButton 
                style={{ color: 'white' }}
                aria-label="light" 
                size="small" 
                onClick={() => {
                  setTheme2()
                }}>
                <ColorLensIcon fontSize="inherit"/>
              </IconButton>
              <IconButton 
                style={{ color: 'purple' }}
                aria-label="light" 
                size="small" 
                onClick={() => {
                  setTheme3();
                }}>
                <ColorLensIcon fontSize="inherit"/>
              </IconButton>                            
              */}

              <Box sx={{ minWidth: 100 }}>
                <FormControl variant="standard" size="small">
                  <Select
                    labelId="simple-select-label"
                    id="simple-select"
                    value={vibe}
                    label="Theme"
                    onChange={handleThemeChange}
                  >
                    <MenuItem value={1}>Theme 1</MenuItem>
                    <MenuItem value={2}>Theme 2</MenuItem>
                    <MenuItem value={3}>Theme 3</MenuItem>
                    <MenuItem value={4}>Theme 4</MenuItem>
                  </Select>
                </FormControl>
              </Box>

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