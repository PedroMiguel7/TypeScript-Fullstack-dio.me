export interface UserAccount {
  email: string;
  name: string;
  password: string;
  balance: number;
  id: string;
}

const account: UserAccount = {
  email: "pedromiguelmgaldino@gmail.com",
  name: "Pedro Miguel",
  password: "123",
  balance: 1000,
  id: "1",
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(account);
  }, 2000);
});
