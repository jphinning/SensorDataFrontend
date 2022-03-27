import { useState, useEffect } from "react";
import Router from "next/router";

import axiosHttp from "../../config/axiosHttp";

export interface loginFields {
  email: string;
  password: string;
}

export function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      axiosHttp.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(
        token
      )}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  const handleLogin = async (authProps: loginFields) => {
    const { email, password } = authProps;

    const {
      data: { token },
    } = await axiosHttp.post("login", {
      email,
      password,
    });

    localStorage.setItem("token", JSON.stringify(token));
    axiosHttp.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    setAuthenticated(true);
    Router.push("/sensors");
  };

  const handleLogout = () => {
    setAuthenticated(false);
    localStorage.removeItem("token");
    axiosHttp.defaults.headers.common["Authorization"] = undefined;
    Router.push("/login");
  };

  return { authenticated, loading, handleLogin, handleLogout };
}
