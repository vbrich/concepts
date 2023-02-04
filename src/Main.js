import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
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
  const routePOC1 = () => {
    navigate('/swipedrawer');    
  }
  const routePOC2 = () => {
    navigate('/mydrawer');    
  }

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

        <Button
            sx={{ my: 2, color: 'inherit', display: 'block' }}
            variant='outlined'
            onClick={routePOC1}
          >
            POC 1 - Swipeable Drawer
        </Button>
        <Button
            sx={{ my: 2, color: 'inherit', display: 'block' }}
            variant='outlined'
            onClick={routePOC2}
          >
            POC 2 - Regular Drawer
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