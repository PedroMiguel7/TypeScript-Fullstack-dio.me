export interface User {
  id?: number;
  name: string;
  email: string;
}

export interface UserResponse<T> {
  status: number;
  message: string;
  data?: T;
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

  createUser = (user: User): UserResponse<User> => {
    const newUser = {
      id: this.db.length + 1,
      ...user,
    };
    if (this.getUser("email", newUser.email).data) {
      return { status: 400, message: "E-mail already registered" };
    }
    this.db.push(newUser);
    return { status: 201, message: "User created", data: newUser };
  };

  getAllUsers = (): UserResponse<User[]> => {
    return { status: 200, message: "Users found", data: this.db };
  };

  getUser = (field: keyof User, value: string | number): UserResponse<User> => {
    const user = this.db.find((user) => user[field] === value);
    if (!user) return { status: 404, message: "User not found" };
    return { status: 200, message: "User found", data: user };
  };

  deleteUser = (id: number): UserResponse<null> => {
    const index = db.findIndex((user) => user.id === id);
    if (index === -1) return { status: 404, message: "User not found" };
    this.db.splice(index, 1);
    return { status: 200, message: "User deleted" };
  };

  updateUser = (user: User): UserResponse<User> => {
    const index = this.db.findIndex((item) => item.id === user.id);
    if (index === -1) return { status: 404, message: "User not found" };
    this.db[index] = {
      ...this.db[index],
      name: user.name,
      email: user.email,
    };
    return { status: 200, message: "User updated", data: this.db[index] };
  };
}
