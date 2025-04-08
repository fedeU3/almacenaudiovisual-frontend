import React, { useState } from 'react';
import { Button, Container, Grid, Card, CardContent, CardMedia, Typography, IconButton, Box, Collapse } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useMembers } from '../../lib/hooks/useMembers';

export default function Miembros() {
  const { members, isLoading, error } = useMembers();
  const [expandedMember, setExpandedMember] = useState<number | null>(null);

  const handleExpandClick = (memberId: number) => {
    setExpandedMember(expandedMember === memberId ? null : memberId);
  };

  return (
    <Box sx={{ backgroundColor: "#080808", minHeight: "100vh", color: "#B0BEC5", pt: 8 }}>

      {/* Sección de Miembros del equipo */}
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ width: "100%", backgroundColor: "#151E26", p: 2 }}>
        <Typography variant="h5" mb={2}>Miembros del equipo</Typography>
        <IconButton color="inherit">
          <ArrowForwardIcon />
        </IconButton>
      </Box>
      <Container sx={{ py: 2 }}>
        {isLoading ? (
          <Typography>Cargando...</Typography>
        ) : error ? (
          <Typography>Error al cargar los miembros</Typography>
        ) : !members || members.length === 0 ? (
          <Typography>No se encontraron miembros.</Typography>
        ) : (
          <Grid container spacing={2}>
            {members.map((member) => (
              <Grid item xs={12} sm={6} md={4} key={member.id}>
                <Card sx={{ backgroundColor: "#2C3E50" }}>
                  <Grid container spacing={2} alignItems="center" sx={{ p: 2 }}>
                    <Grid item>
                      <Box component="img" src="PlaceholderProfile.jpg" alt="Perfil" sx={{ height: 60, width: 60, borderRadius: '50%' }} />
                    </Grid>
                    <Grid item>
                      <Typography variant="h6">{member.nombre} {member.apellido}</Typography>
                      <Typography variant="subtitle2">{member.rol}</Typography>
                    </Grid>
                  </Grid>
                  <Button
                    onClick={() => handleExpandClick(member.id)}
                    sx={{ backgroundColor: "#FF7043", color: "#080808", width: '100%' }}
                  >
                    {expandedMember === member.id ? 'Ocultar Detalles' : 'Ver Detalles'}
                  </Button>
                  <Collapse in={expandedMember === member.id} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography variant="body2">Dirección: {member.direccion}</Typography>
                      <Typography variant="body2">Rol: {member.rol}</Typography>
                      <Typography variant="body2">Mail: {member.userID}</Typography>
                      <Typography variant="body2">Perfil profecional: {member.perfilProfecional}</Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}