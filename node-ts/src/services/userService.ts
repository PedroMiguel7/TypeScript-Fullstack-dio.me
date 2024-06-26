import { sign } from "jsonwebtoken";

import { AppDataSource } from "../database";
import { User } from "../entities/user";
import { UserRepository } from "../repositories/userRepository";

export class UserService {
  private userRepository: UserRepository;

  constructor(userRepository = new UserRepository(AppDataSource.manager)) {
    this.userRepository = userRepository;
  }

  createUser = async (user: Omit<User, "id">): Promise<User> => {
    const newUser = new User(user.name, user.email, user.password);
    return this.userRepository.createUser(newUser);
  };

  getAllUsers = (filters?: any): Promise<User[]> => {
    return this.userRepository.getAllUsers(filters);
  };

  getUser = (
    field: keyof Pick<User, "id" | "email">,
    value: string
  ): Promise<User | null> => {
    return this.userRepository.getUser(field, value);
  };

  deleteUser = (id: string): Promise<void> => {
    return this.userRepository.deleteUser(id);
  };

  updateUser = (user: User): Promise<User> => {
    return this.userRepository.updateUser(user.id, user);
  };

  getAuthenticatedUser = (
    email: string,
    password: string
  ): Promise<User | null> => {
    return this.userRepository.getUserByemailAndPassword(email, password);
  };

  getToken = async (
    email: string,
    password: string
  ): Promise<string | undefined> => {
    const user = await this.getAuthenticatedUser(email, password);

    if (user) {
      const tokenData = {
        name: user.name,
        email: user.email,
      };

      const tokenKey = "123456789";

      const tokenOptions = {
        subject: user.id,
      };

      const token = sign(tokenData, tokenKey, tokenOptions);

      return token;
    }
  };
}
