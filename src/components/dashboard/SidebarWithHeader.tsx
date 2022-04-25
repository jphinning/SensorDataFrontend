import React, { ReactNode, useContext } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link as ChakraLink,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Divider,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiMenu,
  FiRadio,
  FiChevronDown,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";
import Link from "next/link";
import { Context } from "../../context/AuthContext";

interface LinkItemProps {
  name: string;
  icon: IconType;
  page: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome, page: "/" },
  { name: "Data Chart", icon: FiTrendingUp, page: "/dataChart" },
  { name: "Data Table", icon: FiCompass, page: "/dataTable" },
  // { name: "Sign Out", icon: FiSettings, page: "/" },
];

export function SidebarWithHeader({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
        bg="blue.900"
        color="white"
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <FiRadio />
        <Text
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
          color="teal"
        >
          Sensor
        </Text>
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Info
        </Text>

        <CloseButton
          display={{ base: "flex", md: "none" }}
          onClick={onClose}
          colorScheme="blue"
        />
      </Flex>
      <Divider variant="dashed" />
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} page={link.page}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  page: string;
  children: ReactText;
}
const NavItem = ({ icon, page, children, ...rest }: NavItemProps) => {
  return (
    <Link href={page}>
      <ChakraLink
        style={{ textDecoration: "none" }}
        _focus={{ boxShadow: "none" }}
      >
        <Flex
          mt="3"
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "teal.400",
            color: "white",
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </ChakraLink>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const { handleLogout, userCredentials } = useContext(Context);

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Sensor
        <Text color="blue.700">Info</Text>
      </Text>
      {/* <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Info
      </Text> */}

      <HStack spacing={{ base: "0", md: "6" }}>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://freerangestock.com/sample/120140/business-man-profile-vector.jpg"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">{userCredentials.name}</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <Link href="/">
                <MenuItem>Profile</MenuItem>
              </Link>
              <MenuDivider />
              <Link href="/login">
                <MenuItem onClick={handleLogout}>Sign out</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
