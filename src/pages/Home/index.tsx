import React from 'react';
import { Button, Container, Grid, Card, CardContent, CardMedia, Typography, IconButton, Box } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InventoryIcon from '@mui/icons-material/Inventory';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function Home() {
  return (
    <Box sx={{ backgroundColor: "#080808", minHeight: "100vh", color: "#B0BEC5", pt:8 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", py: 5, background: "linear-gradient(to bottom, black, #2C3E50)" }}>
        <Typography variant="h3" fontWeight="bold">ALMACÉN AUDIOVISUAL</Typography>
        <Typography variant="subtitle1">Para Chocho</Typography>
        <Box component="img" src="/Logo.svg" alt="Logo" sx={{ maxWidth: 200, mt: 2 }} />
      </Box>

      {/* Sección de Equipos */}
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ width: "100%", backgroundColor: "#151E26", p: 2 }}>
        <Typography variant="h5" mb={2}>Equipo</Typography>
        <IconButton color="inherit">
          <ArrowForwardIcon />
        </IconButton>
      </Box>
      <Container sx={{ py: 2 }}>
        <Grid container spacing={2}>
          {["Cámara EOS C70", "Cámara EOS C70", "Cámara EOS C70"].map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ backgroundColor: "#2C3E50" }}>
                <CardMedia component="img" height="140" src="PlaceholderEquipo.jpg" alt="Cámara" />
                <CardContent>
                  <Typography variant="h6">Categoría: Cámaras</Typography>
                  <Typography variant="subtitle1">Marca: Canon</Typography>
                  <Button variant="contained" fullWidth sx={{ backgroundColor: "#FF7043" }} startIcon={<InventoryIcon />}>
                    Alquilar Equipo
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Sección de Miembros del equipo */}
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ backgroundColor: "#151E26", p: 2 }}>
        <Typography variant="h5" mb={2}>Miembros del equipo</Typography>
        <IconButton color="inherit">
          <ArrowForwardIcon />
        </IconButton>
      </Box>
      <Container sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          {["Nombre - Puesto", "Nombre - Puesto", "Nombre - Puesto"].map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ backgroundColor: "#2C3E50" }}>
                <Grid container spacing={2} alignItems="center" sx={{ p: 2 }}>
                  <Grid item>
                    <Box component="img" src="PlaceholderProfile.jpg" alt="Perfil" sx={{ height: 60, width: 60, borderRadius: '50%' }} />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">{item.split(' - ')[0]}</Typography>
                    <Typography variant="subtitle2">{item.split(' - ')[1]}</Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ backgroundColor: "#2C3E50", textAlign: "center", py: 4, mt: 4 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Box component="img" src="/LogoChocho.svg" alt="Producciones" sx={{ height: 110 }} />
            <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
              <IconButton color="inherit"><XIcon /></IconButton>
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
    </Box>
  );
}