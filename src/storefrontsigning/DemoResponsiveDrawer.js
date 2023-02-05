import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import loading from '../assets/images/docload.gif'; // Tell Webpack this JS file uses this image
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

const drawerWidth = 400;

const imgUrl = loading;
// console.log(loading);
const divStyle = {
    backgroundImage: 'url(' + imgUrl + ')',
    backgroundColor: 'white',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
};

function DemoResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <br />
      <Typography align="center" gutterBottom  backgroundColor="#ffffff" color="black" sx={{ fontSize: 20 }}>
        Your Offers
      </Typography>
      <br />


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
        Up to <b>$60,000</b>
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
          Up to <b>$60,000</b>
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
          APR as low as <b>9.99%</b>
        </Typography>
      </Box>
    </CardContent>
  </Card>

  <br />
  
</Grid>

<br/>

</Box>



    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="transparent"
        sx={{
          boxShadow: 0,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <Tooltip title="You have 4 offers!">
              <Badge badgeContent={4} color="primary">
                <LocalOfferIcon color="action"/>
              </Badge>
            </Tooltip>
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {/* Title */}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <Button variant="outlined" onClick={handleDrawerToggle}>
            <CloseIcon/>
          </Button>
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { md: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

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
    </Box>
  );
}

export default DemoResponsiveDrawer;