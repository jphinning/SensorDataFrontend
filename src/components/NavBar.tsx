import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import Link from "next/link";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <Flex>
      <Link href="/">
        <Button colorScheme="purple" mx={3}>
          Home
        </Button>
      </Link>
      <Link href="/register">
        <Button colorScheme="purple" mx={3}>
          Register
        </Button>
      </Link>
      <Link href="/login">
        <Button colorScheme="purple" mx={3}>
          Login
        </Button>
      </Link>
    </Flex>
  );
};
