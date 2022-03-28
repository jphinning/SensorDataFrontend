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
      bgColor={"purple.600"}
      borderRadius="md"
      padding={5}
      ml="2"
      flex="0.35"
      minHeight={"900"}
      maxHeight={"900"}
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

      {authenticated ? (
        <Link href="/userProfile">
          <Button colorScheme="purple" my={3}>
            User Profile
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
