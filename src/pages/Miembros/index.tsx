import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Typography,
  Alert,
} from '@mui/material';
import { useAuthContext } from '../../lib/hooks/contextHooks/useAuthContext';

interface Member {
  id: number;
  nombre: string;
  apellido: string;
  direccion: string;
  rol: string;
  esAdmin: boolean;
}

const MembersTable: React.FC = () => {
  const { fetchWithAuth } = useAuthContext();
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getMembers = async () => {
      try {
        const data = await fetchWithAuth('/api/miembros');
        setMembers(data);
      } catch (err: any) {
        setError(err.message || 'Error al cargar los miembros');
      } finally {
        setLoading(false);
      }
    };

    getMembers();
  }, [fetchWithAuth]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <Alert severity="error" style={{ marginTop: '2rem' }}>
        {error}
      </Alert>
    );
  }

  if (members.length === 0) {
    return (
      <Typography variant="h6" style={{ textAlign: 'center', marginTop: '2rem' }}>
        No se encontraron miembros.
      </Typography>
    );
  }

  return (
    <TableContainer component={Paper} style={{ marginTop: '2rem' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Apellido</TableCell>
            <TableCell>Direccion</TableCell>
            <TableCell>Rol</TableCell>
            <TableCell>esAdmin</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {members.map((member) => (
            <TableRow key={member.id}>
              <TableCell>{member.id}</TableCell>
              <TableCell>{member.nombre}</TableCell>
              <TableCell>{member.apellido}</TableCell>
              <TableCell>{member.direccion}</TableCell>
              <TableCell>{member.rol}</TableCell>
              <TableCell>{member.esAdmin}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MembersTable;