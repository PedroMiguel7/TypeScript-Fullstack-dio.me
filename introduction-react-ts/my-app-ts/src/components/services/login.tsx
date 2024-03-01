import { api, UserAccount } from "../../api";

export const login = async (email: string, password: string): Promise<void> => {
  const data = (await api) as UserAccount;
  if (email !== data.email || password !== data.password) {
    alert("Email ou senha incorretos");
    return;
  }
  alert(`email: ${email}, password: ${password}`);
};
