import { Button, Center, ChakraProvider, Flex, Input } from "@chakra-ui/react";

import { Layout } from "./components/layout";

function App() {
  return (
    <ChakraProvider>
      <Center>
        <Layout>
          <Flex direction={"column"}>
            <h1>faça login</h1>
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
            <Button marginTop={"10px"}>Entrar</Button>
          </Flex>
        </Layout>
      </Center>
    </ChakraProvider>
  );
}

export default App;
