import React, { useEffect, useMemo } from 'react'
import { useAuth } from '../../lib/hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';
import { LoginDTO } from '../../lib/dto/LoginDTO';
import { initialContextValue } from './constants/initialValues';
import AppLayout from '../../layouts/app/AppLayout';
import BaseLayout from '../../layouts/base/BaseLayout';
import { IGetAuthResponse } from '../../lib/responses/getAuth';
import { menuListMap } from '../../layouts/constants/menuList';
import { SignUpFormType } from '../../lib/types/forms/SignUpForm';
import { LogInFormType } from '../../lib/types/forms/LoginForm';

export interface AuthContextType {
  user?: IGetAuthResponse;
  login: (data: LogInFormType) => Promise<void>;
  signUp: (data: SignUpFormType) => Promise<void>;
  logout: () => void;
}


export const AuthContext = React.createContext<AuthContextType>(initialContextValue);

type AuthProviderProps = {
  children: React.ReactNode;
}
const AuthProvider: React.FC<AuthProviderProps> = ({
  children
}) => {
  const location = useLocation();
  const currentPage = useMemo(() => (menuListMap[location.pathname]?.label), [location]);
  const goTo = (url: string)=> () => {
    navigate(url);
  }

  const onSuccessAuth = (token: string) => {
    localStorage.setItem('token', token);
    navigate('/');
  };
  const navigate = useNavigate();
  const {
    error,
    user,
    loginMutation,
    signUpMutation,
  } = useAuth(onSuccessAuth);
  const login = async (data: LoginDTO) => {
    loginMutation.mutate(data);
  }
  const signUp = async (data: SignUpFormType) => {
    signUpMutation.mutate(data);
  }
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }
  useEffect(()=>{
    if(error?.status === 401) {
      localStorage.removeItem('token');
      navigate('/login');
    };
  }, [error]);
  const Layout = user ? AppLayout : BaseLayout
  return (
    <AuthContext.Provider value={{
      user,
      login,
      signUp,
      logout,
    }}>
      <Layout
        currentPage={currentPage}
        goTo={goTo}
      >
        {children}
      </Layout>
    </AuthContext.Provider>
  )
}

export default AuthProvider