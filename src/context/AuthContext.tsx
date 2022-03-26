import React, { createContext } from "react";

import { useAuth, loginFields } from "./hooks/useAuth";

interface IAuthStatesContext {
  authenticated: Boolean;
  loading: Boolean;
  handleLogin: (authProps: loginFields) => Promise<void>;
  handleLogout: () => void;
}

export const Context = createContext<IAuthStatesContext>(undefined);

export const AuthProvider: React.FC = ({ children }) => {
  const { authenticated, loading, handleLogin, handleLogout } = useAuth();

  return (
    <Context.Provider
      value={{ loading, authenticated, handleLogin, handleLogout }}
    >
      {children}
    </Context.Provider>
  );
};
