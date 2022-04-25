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
      bgColor={"blue.900"}
      // borderRadius="md"
      w="12vw"
      padding={5}
      // ml="2"
      // flex="0.35"
      h="100vh"
      position="sticky"
    >
      <Link href="/">
        <Button colorScheme="teal" my={3}>
          Home
        </Button>
      </Link>

      {authenticated ? (
        <Link href="/sensors">
          <Button colorScheme="teal" my={3}>
            Sensor Information
          </Button>
        </Link>
      ) : null}

      {authenticated ? (
        <Link href="/dataChart">
          <Button colorScheme="teal" my={3}>
            Data Chart
          </Button>
        </Link>
      ) : null}

      {authenticated ? (
        <Link href="/userProfile">
          <Button colorScheme="teal" my={3}>
            User Profile
          </Button>
        </Link>
      ) : null}

      {!authenticated ? (
        <Link href="/register">
          <Button colorScheme="teal" my={3}>
            Sign Up
          </Button>
        </Link>
      ) : null}

      {authenticated ? (
        <Button colorScheme="teal" onClick={handleLogout} my={3}>
          Logout
        </Button>
      ) : (
        <Link href="/login">
          <Button colorScheme="teal" my={3}>
            Login
          </Button>
        </Link>
      )}
    </Flex>
  );
};
