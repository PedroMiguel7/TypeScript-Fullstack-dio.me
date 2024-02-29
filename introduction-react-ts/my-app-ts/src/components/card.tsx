import { Box, Center, Grid, Input } from "@chakra-ui/react";

import { ButtonLogin } from "./button/button";
import { login } from "./services/login";

export const Card = () => {
  return (
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
          <Input type="email" placeholder="Digite seu email" id="emailInput" />
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
          <ButtonLogin event={login} />
        </Center>
      </Grid>
    </Box>
  );
};
