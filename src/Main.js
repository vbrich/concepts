import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CreateIcon from '@mui/icons-material/Create';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/vbrich">
        ribo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Main() {

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <br />
        <Typography variant="h3" component="h1" gutterBottom>
          Choose a POC to demo
        </Typography>

        <br/>
        <Link to="/poc1" style={{ color: 'inherit', textDecoration: 'none' }} target="_blank">
          <ListItemButton 
            sx={{ boxShadow: 1, width: '300px' }}
          >
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText primary="POC1 = Drawer" />
          </ListItemButton>
        </Link> 
        <br/>
        <Link to="/poc2" style={{ color: 'inherit', textDecoration: 'none' }} target="_blank">
          <ListItemButton 
            sx={{ boxShadow: 1, width: '300px' }}
          >
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText primary="POC2 = Slider Drawer" />
          </ListItemButton>
        </Link> 
        <br/>
        <Link to="/poc3" style={{ color: 'inherit', textDecoration: 'none' }} target="_blank">
          <ListItemButton 
            sx={{ boxShadow: 1, width: '300px' }}
          >
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText primary="POC3 = Responsive Drawer" />
          </ListItemButton>
        </Link> 

      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm" align="center">
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}