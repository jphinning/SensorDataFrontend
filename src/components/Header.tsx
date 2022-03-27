import React from "react";
import { Flex, Heading, Box } from "@chakra-ui/react";

import { DarkModeSwitch } from "./DarkModeSwitch";
import { NavBar } from "./NavBar";

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title, children }) => {
  return (
    <Flex mt={3} justifyContent="center" position="relative" height="100%">
      <NavBar />
      <Box mt={10} mx="auto">
        <Heading as="h1" size="4xl" color="purple.500" mx="400">
          {title}
        </Heading>
        <DarkModeSwitch />
        {children}
      </Box>
    </Flex>
  );
};
