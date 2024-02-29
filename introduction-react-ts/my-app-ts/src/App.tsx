import { Box, Button, ChakraProvider, Input, Center } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Box minHeight={"100vh"} backgroundColor={"#9413dc"} padding={"25px"}>
        <Center>
          <Box
            backgroundColor={"#ffffff"}
            borderRadius={"25px"}
            padding={"15px"}
            maxWidth={"500px"}
          >
            <Center>
              <h1>faça login</h1>
            </Center>
            <label htmlFor="emailInput">Email</label>
            <Input
              type="email"
              placeholder="Digite seu email"
              id="emailInput"
            />
            <label htmlFor="passwordInput">Senha</label>
            <Input
              type="password"
              placeholder="Digite sua senha"
              id="passwordInput"
            />
            <Center>
              <Button
                colorScheme="teal"
                size={"sm"}
                marginTop={"10px"}
                width={"100%"}
              >
                Entrar
              </Button>
            </Center>
          </Box>
        </Center>
      </Box>
    </ChakraProvider>
  );
}

export default App;
