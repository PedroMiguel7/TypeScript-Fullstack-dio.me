const db = [
  {
    id: 1,
    name: "Pedro",
    email: "pedro@gmail.com",
  },
];

export class UserService {
  createUser = (name: string, email: string) => {
    const user = {
      id: db.length + 1,
      name,
      email,
    };

    db.push(user);
    console.log(db);
  };

  getAllUsers = () => db;
}
