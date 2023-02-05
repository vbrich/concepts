import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
// import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import loading from '../assets/images/docload.gif'; // Tell Webpack this JS file uses this image

const drawerWidth = 350;

const imgUrl = loading;
// console.log(loading);
const divStyle = {
    backgroundImage: 'url(' + imgUrl + ')',
    backgroundColor: 'white',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  };

export default function DemoDrawer() {
  return (

    <Box sx={{ display: 'flex' }}>

      <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{ flexGrow: 1, p: 1 }}>
        <iframe 
            style={divStyle}
            title="docusign" 
            frameBorder="0"
            src="https://docusign.ribo916.repl.co/redirect" 
            width="100%"
            height={1000} 
            loading='lazy'>
          </iframe>         
      </Box>

      <Drawer
      anchor={'right'}
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />

        <Box sx={{ overflow: 'auto' }}>

          <Grid 
          sx={{
            height: '100%',
            width: '95%',
            display: 'flex',
            flexDirection: 'column',
            margin: '0 auto',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          >
            <Card sx={{ height: '100%', width: '90%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1, border: 0, padding: 0 }}>
                <Typography align="center" gutterBottom backgroundColor="#005F89" color="whitesmoke" sx={{ fontSize: 16 }}>
                  You're Already Approved!
                </Typography>
                <Typography align="center">
                  Refinance your Auto <br/>
                  Up to $60,000
                </Typography>
              </CardContent>
            </Card>

            <br/>

            <Card sx={{ height: '100%', width: '90%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1, border: 0, padding: 0 }}>
                <Typography align="center" gutterBottom backgroundColor="#005F89" color="whitesmoke" sx={{ fontSize: 16 }}>
                  You're Already Approved!
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', width: "100%" }}>
                  <Box sx={{ width: '10%' }}>
                  </Box>
                  <Typography align="center" sx={{ flexGrow: 1 }}>
                    New Auto <br/>
                    Up to $60,000
                  </Typography>
                </Box>
              </CardContent>
            </Card>

            <br/>

            <Card sx={{ height: '100%', width: '90%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1, border: 0, padding: 0 }}>
                <Typography align="center" gutterBottom backgroundColor="#000" color="#fff" sx={{ fontSize: 16 }}>
                  Apply Now
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', width: "100%" }}>
                  <Box sx={{ width: '10%' }}>
                  </Box>
                  <Typography align="center" sx={{ flexGrow: 1 }}>
                    Visa Platinum <br/>
                    APR as low as 9.99%
                  </Typography>
                </Box>
              </CardContent>
            </Card>

            <br />
            
          </Grid>
          
          <br/>

        </Box>
      </Drawer>


    </Box>
  );
}