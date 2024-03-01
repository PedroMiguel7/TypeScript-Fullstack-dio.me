export interface UserAccount {
  email: string;
  name: string;
  password: string;
  balance: number;
}

const account: UserAccount = {
  email: "pedromiguelmgaldino@gmail.com",
  name: "Pedro Miguel",
  password: "123456",
  balance: 1000,
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(account);
  }, 2000);
});
