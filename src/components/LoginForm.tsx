import React, { useContext, useState } from "react";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Checkbox,
  Button,
  Spinner,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";

import { ChakraAlert } from "./utils/ChakraAlert";
import { Wrapper } from "./Wrapper";
import { Context } from "../context/AuthContext";

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
    <Wrapper variant="small">
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

                    if (value.length < 5) {
                      error = "Password must contain at least 6 characters";
                    }

                    return error;
                  }}
                />
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>
              <Field
                as={Checkbox}
                id="rememberMe"
                name="rememberMe"
                colorScheme="purple"
              >
                Remember me?
              </Field>
              <Button type="submit" colorScheme="purple" isFullWidth>
                {serverStatus === "loading" ? <Spinner /> : "Login"}
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};
