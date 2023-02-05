import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

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

  // ROUTING
  const navigate = useNavigate();
  // const routePOC1 = () => { navigate('/poc1'); }
  // const routePOC2 = () => { navigate('/poc2'); }
  const routePOC3 = () => { navigate('/poc3'); }

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
          Choose a Concept
        </Typography>

{/*
        <Button
            startIcon={<CreateIcon />}
            sx={{ my: 2, color: 'inherit' }}
            onClick={routePOC1}
            variant='outlined'
          >
            POC 1 = Simple Drawer
        </Button>  
        <br />
        <Button
            startIcon={<CreateIcon />}
            sx={{ my: 2, color: 'inherit' }}
            onClick={routePOC2}
            variant='outlined'
          >
            POC 2 = Slide Drawer
        </Button>  
        <br />
*/}   

        <Button
            startIcon={<CreateIcon />}
            sx={{ my: 2, color: 'inherit' }}
            onClick={routePOC3}
            variant='outlined'
          >
            Signing in a storefront
        </Button>          

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