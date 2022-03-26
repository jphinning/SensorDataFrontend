import React from "react";
import { Alert, AlertIcon, CloseButton } from "@chakra-ui/react";

interface ChakraAlertProps {
  status: "info" | "warning" | "success" | "error";
  text: string;
}

export const ChakraAlert: React.FC<ChakraAlertProps> = ({ status, text }) => {
  return (
    <Alert status={status}>
      <AlertIcon />
      {text}
    </Alert>
  );
};
