import React from "react";
import { Flex, Heading, Box } from "@chakra-ui/react";

import { DarkModeSwitch } from "./DarkModeSwitch";
import { NavBar } from "./NavBar";

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Box mt={3}>
      <NavBar />
      <Flex mt={10} justify="center">
        <Heading as="h1" size="4xl" color="purple.500">
          {title}
        </Heading>
        <DarkModeSwitch />
      </Flex>
    </Box>
  );
};
