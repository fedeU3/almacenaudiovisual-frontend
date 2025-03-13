import { useQuery } from "@tanstack/react-query"
import { AxiosError, AxiosResponse } from "axios";
import { httpGETEquipos } from "../services/equipos";

export const useEquipos = () => {
  const {
    data: response,
    isLoading,
    error,
  } = useQuery<AxiosResponse, AxiosError>({
    queryKey: ['equipos'],
    queryFn: httpGETEquipos,
  })
  const { data: equipos } = response || {};
  return {
    equipos,
    isLoading,
    error,
  }
}