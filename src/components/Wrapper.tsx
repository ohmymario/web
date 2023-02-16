import { FunctionComponent } from "react";

import { Box } from "@chakra-ui/react";

interface WrapperProps {
  children: JSX.Element;

  variant?: "small" | "regular";
}

const Wrapper: FunctionComponent<WrapperProps> = (props: WrapperProps) => {
  const { children, variant = "regular" } = props;
  return (
    <Box
      mt={8}
      mx="auto"
      maxW={variant === "regular" ? "800px" : "400px"}
      w="100%"
    >
      {children}
    </Box>
  );
};

export default Wrapper;
