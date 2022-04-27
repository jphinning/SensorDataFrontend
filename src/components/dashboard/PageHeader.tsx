import { Flex, Text } from "@chakra-ui/react";
import React from "react";

interface PageHeaderProps {
  title: string;
  route: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, route }) => {
  return (
    <>
      {/* Header */}
      <Flex justify="space-between" mx="5">
        <Text color="gray.500" fontWeight="extrabold" fontSize="xl">
          {title.toUpperCase()}
        </Text>
        <Flex justify="flex-end">
          <Text color="blue.700" fontWeight="bold">
            Home/
          </Text>
          <Text color="gray.500" fontWeight="bold">
            {route}
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
