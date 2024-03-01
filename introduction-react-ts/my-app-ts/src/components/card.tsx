import { Box, Center, Grid, Input } from "@chakra-ui/react";

import { ButtonLogin } from "./button/button";
import { login } from "./services/login";
import { useEffect, useState } from "react";
import { api, UserAccount } from "../api";

export const Card = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState<null | UserAccount>();

  useEffect(() => {
    const getData = async () => {
      const data: any | UserAccount = await api;
      setUserData(data);
    };

    getData();
  }, []);

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
    </Box>
  );
};
