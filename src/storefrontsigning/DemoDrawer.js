import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import loading from '../assets/images/bulb.gif'; // Tell Webpack this JS file uses this image

const cards = [1, 2, 3, 4, 5];
const heading = [
  '', 
  'Features',
  'Encode PDF', 
  'Decode PDF', 
  'Encode JSON',
  'Decode JSON'  
];
const subheading = [
  '',   
  'Trello Board',
  'Convert PDF to base64', 
  'Convert base64 to PDF', 
  'Convert JSON to base64',
  'Convert base64 to JSON'  
];
const link = [
  '', 
  'https://trello.com/b/1m048pHn/features',
  'https://base64.guru/converter/encode/pdf', 
  'https://base64.guru/converter/decode/pdf', 
  'https://codebeautify.org/json-to-base64-converter',
  'https://codebeautify.org/base64-to-json-converter'  
];

const drawerWidth = 350;

const imgUrl = loading;
// console.log(loading);
const divStyle = {
    backgroundImage: 'url(' + imgUrl + ')',
    backgroundColor: 'Snow',
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
        <Divider/>

        <Box sx={{ overflow: 'auto' }}>

              <Divider/>
              <Grid item key={15} xs={12} sm={6} md={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ flexGrow: 1, border: 1 }}>
                    <Typography align="center" gutterBottom backgroundColor="grey" color="whitesmoke" sx={{ fontSize: 16 }}>
                      You're Already Approved!
                    </Typography>
                    <Typography align="center">
                      Refinance your auto <br/>
                      Up to $60,000
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Divider/>

            {cards.map((card) => (
              <div>
                <br/>
                <Divider/>
                <Grid item key={card} xs={12} sm={6} md={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography align="center" gutterBottom variant="h5" component="h2">
                      {heading[card]}
                    </Typography>
                    <Typography align="center">
                      {subheading[card]}
                    </Typography>
                  </CardContent>
                  <CardActions style={{ justifyContent: 'right' }}>
                    <a href={link[card]} target="_blank" rel="noreferrer">
                      <Button variant="text" size="small"><OpenInNewIcon /></Button>                    
                    </a>
                  </CardActions>
                </Card>
              </Grid>
              <Divider/>
              </div>
              
            ))}

        </Box>
      </Drawer>


    </Box>
  );
}