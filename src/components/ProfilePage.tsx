import { Box, Center } from "@chakra-ui/react";
import React, { useContext } from "react";

import { Context } from "../context/AuthContext";

interface ProfilePageProps {}

export const ProfilePage: React.FC<ProfilePageProps> = ({}) => {
  const { userCredentials } = useContext(Context);

  return (
    <>
      <Box>
        <Center>{userCredentials.email}</Center>
      </Box>
    </>
  );
};
