import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { api, UserAccount } from "../../api";
import { AppContext } from "../appContext";

export const Login = async (email: string, password: string): Promise<void> => {
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const data = (await api) as UserAccount;

  if (email !== data.email || password !== data.password) {
    setIsLoggedIn(false);
    alert("Email ou senha incorretos");
    return;
  }

  setIsLoggedIn(true);
  navigate(`/account/${data.id}`);
};
