import { Input } from "@chakra-ui/input";
import { Center, Grid } from "@chakra-ui/layout";
import { useState } from "react";

import { ButtonLogin } from "../components/button";
import { Card } from "../components/card";
import { login } from "../components/services/login";

export const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Card>
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
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="passwordInput">Senha</label>
          <Input
            type="password"
            placeholder="Digite sua senha"
            id="passwordInput"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <Center>
          <ButtonLogin
            onClick={() => {
              login(email, password);
            }}
          />
        </Center>
      </Grid>
    </Card>
  );
};
