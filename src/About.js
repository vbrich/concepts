import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

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
              </Paper>
            </Grid>
          </Grid> 
          <br />


        </Container>
      </main>
  );
}