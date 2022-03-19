import React from "react";
import { GenericForm } from "../components/GenericForm";

interface loginProps {}

const login: React.FC<loginProps> = ({}) => {
  return <GenericForm route="login" action="Login" />;
};

export default login;
