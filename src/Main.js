import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

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
        <Typography variant="h2" component="h1" gutterBottom>
          Main
        </Typography>
        <Typography component="h2" gutterBottom>
          {'Pin a footer to the bottom of the viewport.'}
          {'The footer will move as the main element of the page grows.'}
          {'The footer will move as the main element of the page grows.'}
          {'The footer will move as the main element of the page grows.'}
          {'The footer will move as the main element of the page grows.'}
          {'The footer will move as the main element of the page grows.'}
          {'The footer will move as the main element of the page grows.'}
          {'The footer will move as the main element of the page grows.'}
          {'The footer will move as the main element of the page grows.'}
          {'The footer will move as the main element of the page grows.'}
          {'The footer will move as the main element of the page grows.'}
          {'The footer will move as the main element of the page grows.'}
          {'The footer will move as the main element of the page grows.'}
          {'The footer will move as the main element of the page grows.'}
          {'The footer will move as the main element of the page grows.'}
          {'The footer will move as the main element of the page grows.'}
          {'The footer will move as the main element of the page grows.'}
          {'The footer will move as the main element of the page grows.'}
          {'The footer will move as the main element of the page grows.'}
          {'The footer will move as the main element of the page grows.'}
          {'The footer will move as the main element of the page grows.'}
          {'The footer will move as the main element of the page grows.'}
          {'The footer will move as the main element of the page grows.'}
          {'The footer will move as the main element of the page grows.'}
          {'The footer will move as the main element of the page grows.'}
          {'The footer will move as the main element of the page grows.'}
        </Typography>
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
          <Typography variant="body1">
            Never play leapfrog with a unicorn.
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}