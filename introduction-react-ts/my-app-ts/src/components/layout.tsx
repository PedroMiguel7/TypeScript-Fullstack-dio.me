import { Box, Center } from "@chakra-ui/react";

import { Header } from "./header/header";

export const Layout = ({ children }: any) => {
  return (
    <Box minHeight={"100vh"} backgroundColor={"#f7fafd"}>
      <Header></Header>

      <Box padding={"25px"}>
        <Center display={"flex"} alignItems={"center"}>
          {children}
        </Center>
      </Box>
    </Box>
  );
};
