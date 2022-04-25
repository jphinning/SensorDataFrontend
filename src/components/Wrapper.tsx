import { Box, FlexProps } from "@chakra-ui/react";
import React from "react";

export type WrapperVariant = "small" | "regular";

interface WrapperProps extends FlexProps {
  variant?: WrapperVariant;
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = "regular",
  ...rest
}) => {
  return (
    <Box
      mt={10}
      mx="auto"
      maxW={variant === "regular" ? "1000px" : "400px"}
      w="100%"
      {...rest}
    >
      {children}
    </Box>
  );
};
