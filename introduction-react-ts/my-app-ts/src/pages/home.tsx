import { Input } from "@chakra-ui/input";
import { Center, Grid } from "@chakra-ui/layout";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../components/appContext";
import { ButtonLogin } from "../components/button";
import { Card } from "../components/card";
import { Login } from "../components/services/login";

export const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AppContext);

  const valiateUser = async (email: string, password: string) => {
    const loggedIn = await Login(email, password);

    if (loggedIn) {
      setIsLoggedIn(true);
      navigate("/account/1");
    }
  };

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
              valiateUser(email, password);
            }}
          />
        </Center>
      </Grid>
    </Card>
  );
};
