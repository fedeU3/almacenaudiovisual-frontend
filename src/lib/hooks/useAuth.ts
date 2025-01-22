import { AxiosError, AxiosResponse } from "axios"
import { httpGETAuth, httpPOSTLogin, httpPOSTSignUp } from "../services/auth"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { IGetAuthResponse } from "../responses/getAuth"
import { LoginDTO } from "../dto/LoginDTO"
import { SignUpDTO } from "../dto/SignUpDTO"

export const useAuth = (onSuccessAuth: (token: string) => void) => {
  const queryClient = useQueryClient();
  const {
    data: response,
    isLoading,
    error,
  } = useQuery<AxiosResponse<IGetAuthResponse>, AxiosError>({
    queryKey: ['auth'],
    queryFn: httpGETAuth,
  });
  const loginMutation = useMutation({
    mutationFn: (data: LoginDTO) => httpPOSTLogin(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['auth'],
        exact: true,
        refetchType: 'all',
      });
      onSuccessAuth(data.data.token);
    },
  });
  const signUpMutation = useMutation({
    mutationFn: (data: SignUpDTO) => httpPOSTSignUp(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['auth'],
        exact: true,
        refetchType: 'all',
      });
      onSuccessAuth(data.data.token);
    },
  });
  return {
    user: response?.data,
    isLoading,
    error,
    loginMutation,
    signUpMutation
  }
}