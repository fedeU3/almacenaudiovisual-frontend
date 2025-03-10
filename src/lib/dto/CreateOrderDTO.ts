export interface CreatePedidoDTO {
    idMiembro: number;
    idEquipo?: number;  
    fechaHoraPactada: string;
    estado: string;
    direccion: string;
  }
  