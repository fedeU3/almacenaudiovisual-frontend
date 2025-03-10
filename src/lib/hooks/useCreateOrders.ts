import { useQuery } from "@tanstack/react-query"
import { httpGETCreateOrders } from "../services/createOrders"
import { AxiosError, AxiosResponse } from "axios";
import {  } from "../responses/createOrders";

export const useCreateOrders = ()=>{
  const {
    data: response,
    isLoading,
    error,
  } = useQuery<AxiosResponse<Array<any>>, AxiosError>({
    queryKey: ['orders'],
    queryFn: httpGETCreateOrders,
  })
  const { data: orders } = response || {};
  // console.log("books: ", books);
  // console.log("isLoading: ", isLoading);
  // console.log("error?.data: ", error);
  return {
    orders,
    isLoading,
    error,
  }
}