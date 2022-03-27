import React, { useContext } from "react";
import { Flex, Button, Box } from "@chakra-ui/react";
import Link from "next/link";

import { Context } from "../context/AuthContext";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const { authenticated, handleLogout } = useContext(Context);

  return (
    <Flex
      direction="column"
      position="absolute"
      top="0"
      left="5"
      height="full"
      bgColor={"purple.600"}
      borderRadius="md"
      padding={5}
    >
      <Link href="/">
        <Button colorScheme="purple" my={3}>
          Home
        </Button>
      </Link>

      {authenticated ? (
        <Link href="/sensors">
          <Button colorScheme="purple" my={3}>
            Sensor Information
          </Button>
        </Link>
      ) : null}

      {authenticated ? (
        <Link href="/dataChart">
          <Button colorScheme="purple" my={3}>
            Data Chart
          </Button>
        </Link>
      ) : null}

      {!authenticated ? (
        <Link href="/register">
          <Button colorScheme="purple" my={3}>
            Sign Up
          </Button>
        </Link>
      ) : null}

      {authenticated ? (
        <Button colorScheme="purple" onClick={handleLogout} my={3}>
          Logout
        </Button>
      ) : (
        <Link href="/login">
          <Button colorScheme="purple" my={3}>
            Login
          </Button>
        </Link>
      )}
    </Flex>
  );
};
