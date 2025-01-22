import { AuthContextType } from "..";

export const initialContextValue: AuthContextType = {
  login: async () => {
    throw new Error("AuthContext: login function is not implemented.");
  },
  signUp: async () => {
    throw new Error("AuthContext: signUp function is not implemented.");
  },
};