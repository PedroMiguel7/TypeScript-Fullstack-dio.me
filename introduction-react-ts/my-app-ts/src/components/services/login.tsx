import { api, UserAccount } from "../../api";
import { creaateLocalStorage } from "./storage";

export const Login = async (
  email: string,
  password: string
): Promise<boolean> => {
  const data = (await api) as UserAccount;

  if (email !== data.email || password !== data.password) {
    alert("Email ou senha incorretos");
    return false;
  }

  delete data.password;

  creaateLocalStorage("dioBank", {
    logged: true,
    ...data,
  });

  return true;
};
