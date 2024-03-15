export interface User {
  id?: number;
  name: string;
  email: string;
}

const db: User[] = [
  {
    id: 1,
    name: "Pedro",
    email: "pedro@gmail.com",
  },
];

export class UserService {
  db: User[];

  constructor(database: User[] = db) {
    this.db = database;
  }

  createUser = (name: string, email: string) => {
    const user = {
      id: this.db.length + 1,
      name,
      email,
    };

    this.db.push(user);
    return user;
  };

  getAllUsers = () => {
    this.db;
  };

  deleteUser = (id: number) => {
    const index = db.findIndex((user) => user.id === id);
    this.db.splice(index, 1);
  };

  updateUser = (id: number, name: string, email: string) => {
    const index = db.findIndex((user) => user.id === id);
    this.db[index] = {
      name,
      email,
    };
  };
}
