import React, { useContext } from "react";
import { Flex, Button } from "@chakra-ui/react";
import Link from "next/link";

import { Context } from "../context/AuthContext";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const { authenticated, handleLogout } = useContext(Context);

  return (
    <Flex justify="flex-start">
      <Link href="/">
        <Button colorScheme="purple" mx={3}>
          Home
        </Button>
      </Link>
      <Link href="/register">
        <Button colorScheme="purple" mx={3}>
          Sign Up
        </Button>
      </Link>
      {console.log(authenticated)}
      {authenticated ? (
        <Button colorScheme="purple" onClick={handleLogout} mx={3}>
          Logout
        </Button>
      ) : (
        <Link href="/login">
          <Button colorScheme="purple" mx={3}>
            Login
          </Button>
        </Link>
      )}
    </Flex>
  );
};
