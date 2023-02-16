import { FunctionComponent } from "react";
// chakra-ui form
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Box,
  Button,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import Wrapper from "../components/Wrapper";
import InputField from "../components/InputField";

interface registerProps {
  title: string;
}

const Register: FunctionComponent<registerProps> = (props: registerProps) => {
  const initialValues = {
    username: "",
    password: "",
  };

  const onSubmit = (values: any): void => {
    console.log(values);
  };

  return (
    <Wrapper variant="small">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => onSubmit(values)}
      >
        {({ values, handleChange, isSubmitting }) => (
          <Form>
            <Box mt={4}>
              <InputField
                name="username"
                placeholder="username"
                label="Username"
              />
            </Box>
            <Box mt={4}>
              <InputField
                name="password"
                placeholder="password"
                label="Password"
                type="password"
              />
            </Box>

            <Button
              type="submit"
              mt={4}
              isLoading={isSubmitting}
              colorScheme="teal"
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
