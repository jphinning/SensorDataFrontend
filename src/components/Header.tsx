import React from "react";
import { Flex, Heading, Box } from "@chakra-ui/react";

import { NavBar } from "./NavBar";

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title, children }) => {
  return (
    <Flex>
      <NavBar />
      <Box mt={10} mx="auto">
        <Heading as="h1" size="4xl" color="blue.700" mx="400">
          {title}
        </Heading>
        {children}
      </Box>
    </Flex>
  );
};
