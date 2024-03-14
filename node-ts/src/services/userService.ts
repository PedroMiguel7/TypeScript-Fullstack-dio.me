const db: { id?: number; name: string; email: string }[] = [
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
    return user;
  };

  getAllUsers = () => {
    db;
  };

  deleteUser = (id: number) => {
    const index = db.findIndex((user) => user.id === id);
    db.splice(index, 1);
  };

  updateUser = (id: number, name: string, email: string) => {
    const index = db.findIndex((user) => user.id === id);
    db[index] = {
      name,
      email,
    };
  };
}
