import React, { createContext } from "react";

import { useAuth, loginFields, userModel } from "./hooks/useAuth";

interface IAuthStatesContext {
  authenticated: Boolean;
  loading: Boolean;
  userCredentials: userModel;
  handleLogin: (authProps: loginFields) => Promise<void>;
  handleLogout: () => void;
}

export const Context = createContext<IAuthStatesContext>(undefined);

export const AuthProvider: React.FC = ({ children }) => {
  const { authenticated, loading, userCredentials, handleLogin, handleLogout } =
    useAuth();

  return (
    <Context.Provider
      value={{
        loading,
        authenticated,
        userCredentials,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </Context.Provider>
  );
};
