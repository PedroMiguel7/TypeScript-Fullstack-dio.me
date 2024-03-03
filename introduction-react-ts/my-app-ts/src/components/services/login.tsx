import { api, UserAccount } from "../../api";

export const Login = async (
  email: string,
  password: string
): Promise<boolean> => {
  const data = (await api) as UserAccount;

  if (email !== data.email || password !== data.password) {
    alert("Email ou senha incorretos");
    return false;
  }

  return true;
};
