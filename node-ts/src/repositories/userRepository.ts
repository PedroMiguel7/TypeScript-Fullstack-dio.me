import { EntityManager } from "typeorm";

import { User } from "../entities/user";

export class UserRepository {
  private manager: EntityManager;

  constructor(manager: EntityManager) {
    this.manager = manager;
  }

  createUser = async (user: User): Promise<User> => {
    return this.manager.save(user);
  };

  getUser = async (
    field: string,
    value: string | number
  ): Promise<User | null> => {
    return this.manager.findOne(User, { where: { [field]: value } });
  };

  getAllUsers = async (): Promise<User[]> => {
    return this.manager.find(User);
  };

  deleteUser = async (id: number): Promise<void> => {
    await this.manager.delete(User, id);
  };
}
