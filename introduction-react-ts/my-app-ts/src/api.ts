export interface UserAccount {
  email: string;
  name: string;
  password: string;
}

const account: UserAccount = {
  email: "pedromiguelmgaldino@gmail.com",
  name: "Pedro Miguel",
  password: "123456",
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(account);
  }, 2000);
});
