import React from 'react';
import { Button, Container, Grid, Card, CardContent, CardMedia, Typography, IconButton, Box } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InventoryIcon from '@mui/icons-material/Inventory';

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
    </Box>
  );
}