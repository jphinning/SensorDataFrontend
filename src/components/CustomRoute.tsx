import React, { useContext } from "react";
import Router from "next/router";

import { Context } from "../context/AuthContext";

interface CustomRouteProps {
  isPrivate: Boolean;
  Component: React.FC;
}

export const CustomRoute: React.FC<CustomRouteProps> = ({
  isPrivate,
  Component,
}) => {
  const { loading, authenticated } = useContext(Context);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (isPrivate && !authenticated) {
    Router.push("/login");
    return <h1>Loading...</h1>;
  }

  return <Component />;
};
