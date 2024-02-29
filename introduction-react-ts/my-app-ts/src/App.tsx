import {
  Box,
  Button,
  ChakraProvider,
  Input,
  Center,
  Grid,
} from "@chakra-ui/react";
import { login } from "./components/services/login";

function App() {
  return (
    <ChakraProvider>
      <Box minHeight={"100vh"} backgroundColor={"#9413dc"} padding={"25px"}>
        <Center>
          <Box
            backgroundColor={"#ffffff"}
            borderRadius={"25px"}
            padding={"15px"}
            width={"500px"}
          >
            <Grid gap={"20px"}>
              <Center>
                <h1>Bem vindo</h1>
              </Center>
              <div>
                <label htmlFor="emailInput">Email</label>
                <Input
                  type="email"
                  placeholder="Digite seu email"
                  id="emailInput"
                />
              </div>
              <div>
                <label htmlFor="passwordInput">Senha</label>
                <Input
                  type="password"
                  placeholder="Digite sua senha"
                  id="passwordInput"
                />
              </div>
              <Center>
                <Button
                  onClick={login}
                  colorScheme="teal"
                  size={"sm"}
                  width={"100%"}
                >
                  Entrar
                </Button>
              </Center>
            </Grid>
          </Box>
        </Center>
      </Box>
    </ChakraProvider>
  );
}

export default App;
