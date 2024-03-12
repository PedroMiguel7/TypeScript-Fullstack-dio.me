import { api, UserAccount } from "../../api";
import { changeLocalStorage } from "./storage";

export const Login = async (
  email: string,
  password: string
): Promise<boolean> => {
  const data = (await api) as UserAccount;

  if (email !== data.email || password !== data.password) {
    alert("Email ou senha incorretos");
    return false;
  }

  changeLocalStorage("dioBank", {
    logged: true,
    id: data.id,
    email: data.email,
    name: data.name,
  });
  

  return true;
};
