import { useQuery } from "@tanstack/react-query"
import { httpGETBooks } from "../services/books"
import { AxiosError, AxiosResponse } from "axios";
import { IMyOrdersResponse } from "../responses/myOrders";

export const useBooks = ()=>{
  const {
    data: response,
    isLoading,
    error,
  } = useQuery<AxiosResponse<Array<IMyOrdersResponse>>, AxiosError>({
    queryKey: ['MyOrders'],
    queryFn: httpGETBooks,
  })
  const { data: books } = response || {};
  // console.log("books: ", books);
  // console.log("isLoading: ", isLoading);
  // console.log("error?.data: ", error);
  return {
    myOrders,
    isLoading,
    error,
  }
}