import React from "react";
import { Alert, AlertIcon } from "@chakra-ui/react";

interface ChakraAlertProps {
  status: "info" | "warning" | "success" | "error";
}

export const ChakraAlert: React.FC<ChakraAlertProps> = ({ status }) => {
  return (
    <Alert status={status}>
      <AlertIcon />
      There was a problem processing your request
    </Alert>
  );
};
