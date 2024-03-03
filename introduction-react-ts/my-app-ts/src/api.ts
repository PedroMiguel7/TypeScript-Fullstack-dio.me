export interface UserAccount {
  email: string;
  name: string;
  password: string;
  balance: number;
  id: string;
}

export const accountExemple: UserAccount = {
  email: "admin",
  name: "Pedro Miguel",
  password: "123",
  balance: 1000,
  id: "1",
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(accountExemple);
  }, 2000);
});
