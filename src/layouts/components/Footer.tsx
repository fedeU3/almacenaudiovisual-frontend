import React from 'react';
import { Box, Grid, Typography, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#2C3E50", textAlign: "center", py: 4, mt: 4 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Box component="img" src="/LogoChocho.svg" alt="Producciones" sx={{ height: 110 }} />
          <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
            <IconButton color="inherit"><InstagramIcon /></IconButton>
            <IconButton color="inherit"><YouTubeIcon /></IconButton>
            <IconButton color="inherit"><LinkedInIcon /></IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Alquiler de equipo audiovisual</Typography>
          <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
            <HomeIcon />
            <Typography variant="body2" sx={{ ml: 1 }}>Calle Falsa 123</Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mt: 1 }}>
            <PhoneIcon />
            <Typography variant="body2" sx={{ ml: 1 }}>123-456-7890</Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mt: 1 }}>
            <EmailIcon />
            <Typography variant="body2" sx={{ ml: 1 }}>correo@almacen.com</Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mt: 1 }}>
            <AccessTimeIcon />
            <Typography variant="body2" sx={{ ml: 1 }}>L a V de 9:00 AM a 6:00 PM</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box component="img" src="/LogoMonocromatico.svg" alt="Logo" sx={{ height: 120, mb: 1 }} />
          <Typography variant="body2">Almacén Audiovisual</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
