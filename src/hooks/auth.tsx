import React from "react";

import { createContext, useContext } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface IAuthContextData {
  user: User;
}

const AuthContext = createContext({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const user = {
    id: '1231312',
    name: "Hiago Leão Ferreira",
    email: "hiagoloko@hotmail.com",
  };

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
