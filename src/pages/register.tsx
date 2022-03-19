import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
} from "@chakra-ui/react";

import { Wrapper } from "../components/Wrapper";
import { RegisterService } from "../service/RegisterService";
import { ChakraAlert } from "../components/utils/ChakraAlert";

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  const [serverError, setServerError] = useState(false);

  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: false,
        }}
        onSubmit={async (values) => {
          const { email, password } = values;
          try {
            await new RegisterService().create({
              email,
              password,
            });
            setServerError(false);
          } catch (error) {
            setServerError(true);
            console.log(error);
          }
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            <VStack spacing={4} align="flex-start">
              {serverError ? <ChakraAlert status="error" /> : ""}
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
                Login
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
