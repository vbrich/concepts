import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import { Link } from 'react-router-dom';
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

// Modal
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
    </Typography>
  );
}

export default function Main() {

  // Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

        <Button
            startIcon={<CreateIcon />}
            sx={{ my: 2, color: 'inherit' }}
            onClick={routePOC3}
            variant='outlined'
          >
            Signing in a storefront
        </Button>          
        &nbsp;
        <Button onClick={handleOpen}>Notes</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Notes 
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 1 }}>
              - Can set DocuSign redirect location after signing<br />
              - DocuSign account has mobile signing enabled, so radio shows<br />
            </Typography>
          </Box>
        </Modal>

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