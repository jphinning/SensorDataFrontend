import React from "react";
import { VStack, Box, Heading, Text } from "@chakra-ui/react";

interface LandingPageProps {}

export const LandingPage: React.FC<LandingPageProps> = ({}) => {
  return (
    <VStack mt="30">
      <Box
        p={5}
        my={5}
        borderWidth={2}
        borderRadius={10}
        boxShadow="lg"
        borderColor={"purple.500"}
        maxWidth="800px"
      >
        <Heading as="h2"> Objective </Heading>
        <Text mt="50">
          Presenting you a simple CRUD app made with a React Frontend utilizing
          Chakra UI as the components library and a TypeORM, Postgres and
          TypeScript Backend!
        </Text>
        <Text mt="5">
          Made with the objective of learning more about the Express, Postgres,
          React and Node stack!
        </Text>
      </Box>
    </VStack>
  );
};
