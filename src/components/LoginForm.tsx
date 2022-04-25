import React, { useContext, useState } from "react";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Spinner,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import { FiRadio } from "react-icons/fi";

import { ChakraAlert } from "./utils/ChakraAlert";
import { Wrapper } from "./Wrapper";
import { Context } from "../context/AuthContext";
import Link from "next/link";

type formStatus = "loading" | "complete" | "errored";

interface LoginFormProps {}

interface formFields {
  email: string;
  password: string;
}

export const LoginForm: React.FC<LoginFormProps> = () => {
  const { authenticated, handleLogin } = useContext(Context);
  const [serverStatus, setServerStatus] = useState<formStatus>(null);

  const handleFormSubmit = async (values: formFields, { resetForm }) => {
    const { email, password } = values;

    try {
      setServerStatus("loading");
      await handleLogin({ email, password });

      setServerStatus("complete");
    } catch (error) {
      console.log(error);
      setServerStatus("errored");
    }
    resetForm();
  };

  return (
    <Wrapper
      variant="small"
      my="10vh"
      padding="6"
      boxShadow="lg"
      borderRadius="xl"
      bg="white"
    >
      <Flex justify={"center"} my="6">
        <FiRadio />
        <Heading>Sensor</Heading>
        <Heading color="blue.700">Info</Heading>
      </Flex>

      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: false,
        }}
        onSubmit={handleFormSubmit}
      >
        {({ handleSubmit, errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            <VStack spacing={4} align="flex-start">
              {serverStatus === "errored" ? (
                <ChakraAlert status="error" text="Wrong email or password" />
              ) : (
                ""
              )}
              {serverStatus === "complete" ? (
                <ChakraAlert
                  status="success"
                  text="You're now being redirected to your page"
                />
              ) : (
                ""
              )}
              <FormControl>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Field
                  as={Input}
                  id="email"
                  name="email"
                  type="email"
                  variant="filled"
                />
              </FormControl>
              <FormControl isInvalid={!!errors.password && touched.password}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Field
                  as={Input}
                  id="password"
                  name="password"
                  type="password"
                  variant="filled"
                  validate={(value: string | any[]) => {
                    let error: string;

                    if (value.length < 3) {
                      error = "Password must contain at least 3 characters";
                    }

                    return error;
                  }}
                />
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>

              <Button type="submit" colorScheme="facebook" isFullWidth>
                {serverStatus === "loading" ? <Spinner /> : "Login"}
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
      <Link href="/register">
        <Button type="submit" colorScheme="facebook" isFullWidth my="3">
          SignUp
        </Button>
      </Link>
    </Wrapper>
  );
};
