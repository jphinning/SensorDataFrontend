import React, { useContext } from "react";
import {
  Avatar,
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Context } from "../context/AuthContext";

interface LandingPageProps {}

export const LandingPage: React.FC<LandingPageProps> = ({}) => {
  const { userCredentials } = useContext(Context);

  return (
    <>
      {/* Header */}
      <Flex justify="space-between" mx="5">
        <Text color="gray.500" fontWeight="extrabold" fontSize="xl">
          PROFILE
        </Text>
        <Flex justify="flex-end">
          <Text color="blue.700" fontWeight="bold">
            Home
          </Text>
          <Text color="gray.500" fontWeight="bold">
            /Profile
          </Text>
        </Flex>
      </Flex>

      {/* Body */}
      <Box bg="white" mx="5" boxShadow="md" my="5">
        <Center>
          <Avatar
            m="6"
            size={"2xl"}
            src={
              "https://freerangestock.com/sample/120140/business-man-profile-vector.jpg"
            }
          />
        </Center>

        <HStack justify="space-around">
          <Text color="blue.700" fontWeight="bold">
            Name
            <Text color="gray.500">{userCredentials.name}</Text>
          </Text>

          <Text color="blue.700" fontWeight="bold">
            Email
            <Text color="gray.500">{userCredentials.email}</Text>
          </Text>
        </HStack>
      </Box>
    </>
  );
};
