import { Box, Center, ChakraProvider } from "@chakra-ui/react";

import { Card } from "./components/card";
import { Header } from "./components/header/header";

function App() {
  return (
    <ChakraProvider>
      <Header></Header>
      <Box minHeight={"80vh"} backgroundColor={"#f7fafd"} padding={"25px"}>
        <Center display={"flex"} alignItems={"center"}>
          <Card></Card>
        </Center>
      </Box>
    </ChakraProvider>
  );
}

export default App;
