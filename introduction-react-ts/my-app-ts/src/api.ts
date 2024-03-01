const account = {
  email: "pedromiguelmgaldino@gmail.com",
  name: "Pedro Miguel",
  password: "123456",
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(account);
  }, 2000);
});
