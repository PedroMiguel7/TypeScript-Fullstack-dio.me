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

  getAllUsers = (filters: any) => {
    return this.userRepository.getAllUsers(filters);
  };

  getUser = (
    field: keyof Pick<User, "id" | "email">,
    value: string | number
  ) => {
    return this.userRepository.getUser(field, value);
  };

  deleteUser = (id: number) => {
    return this.userRepository.deleteUser(id);
  };

  updateUser = (user: User & { id: number }) => {
    return this.userRepository.updateUser(user.id, user);
  };
}
