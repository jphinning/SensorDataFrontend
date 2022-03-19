import React from "react";
import { Alert, AlertIcon, CloseButton } from "@chakra-ui/react";

interface ChakraAlertProps {
  status: "info" | "warning" | "success" | "error";
}

export const ChakraAlert: React.FC<ChakraAlertProps> = ({ status }) => {
  return (
    <Alert status={status}>
      <AlertIcon />
      {status === "error"
        ? "There was an error processing your request"
        : "You're now registered. Please log in "}
    </Alert>
  );
};
