import React, { useState } from "react";
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

import { RegisterService } from "../service/RegisterService";
import { ChakraAlert } from "./utils/ChakraAlert";
import { Wrapper } from "./Wrapper";
import axiosHttp from "../config/axiosHttp";

type formStatus = "loading" | "complete" | "errored";

interface GenericFormProps {
  route: string;
  action: "Login" | "Sign Up";
}

export const GenericForm: React.FC<GenericFormProps> = ({ route, action }) => {
  const [serverStatus, setServerStatus] = useState<formStatus>(null);

  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: false,
        }}
        onSubmit={async (values, { resetForm }) => {
          const { email, password } = values;
          try {
            setServerStatus("loading");
            await axiosHttp.post(route, {
              email,
              password,
            });
            setServerStatus("complete");
          } catch (error) {
            setServerStatus("errored");
          }
          resetForm();
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            <VStack spacing={4} align="flex-start">
              {serverStatus === "errored" ? <ChakraAlert status="error" /> : ""}
              {serverStatus === "complete" ? (
                <ChakraAlert status="success" />
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
                {serverStatus === "loading" ? <Spinner /> : action}
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};
