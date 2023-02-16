import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useField } from "formik";
import { FunctionComponent, InputHTMLAttributes } from "react";

// InputField Component will take the same props as an input element
type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
};

const InputField: FunctionComponent<InputFieldProps> = (
  props: InputFieldProps
) => {
  // Stripped out the size prop from props
  const { label, size: _, ...rest } = props;
  const [field, { error }] = useField(props);

  return (
    <FormControl isInvalid={Boolean(error)}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Input {...field} {...rest} id={field.name} />
      {/* Display the error only if there is one */}
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};

export default InputField;
