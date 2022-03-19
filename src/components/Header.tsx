import React from "react";
import { Flex, Heading, VStack } from "@chakra-ui/react";

import { DarkModeSwitch } from "./DarkModeSwitch";
import { NavBar } from "./NavBar";

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <VStack>
      <Flex mt={10}>
        <Heading as="h1" size="4xl" color="purple.500">
          {title}
        </Heading>
        <DarkModeSwitch />
      </Flex>
      <NavBar />
    </VStack>
  );
};
