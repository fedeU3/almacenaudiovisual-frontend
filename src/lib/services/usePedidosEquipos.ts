import axios from "axios";

export const httpGETPedidosEquipos = (id: number) => axios.get(`/pedidos_equipos/${id}`);