import { useQuery } from "@tanstack/react-query"
import { AxiosError, AxiosResponse } from "axios";
import { httpGETPedidosEquipos } from "../services/usePedidosEquipos";

export const useOrdersEquipos = (id: number) => {
  const {
    data: response,
    isLoading,
    error,
  } = useQuery<AxiosResponse, AxiosError>({
    queryKey: ['pedidos_equipos',id],
    queryFn: () => httpGETPedidosEquipos(id),
  })
  const { data: pedidos_equipos } = response || {};
  return {
    pedidos_equipos,
    isLoading,
    error,
  }
}