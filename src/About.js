import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function About() {
  return (
      <main>
        <Container 
          sx={{py: 2}}
          maxWidth="xl">                    
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper align="center" elevation={0}>
                <h1>About</h1>  
                <Typography variant="h5" component="h1" gutterBottom>
                Merely a POC site to easily link to conceptual mock ups
                </Typography>          
              </Paper>
            </Grid>
          </Grid> 
          <br />
        </Container>
      </main>
  );
}