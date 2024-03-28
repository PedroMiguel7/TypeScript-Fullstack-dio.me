import { EntityManager, Like } from "typeorm";

import { User } from "../entities/user";

export class UserRepository {
  private manager: EntityManager;

  constructor(manager: EntityManager) {
    this.manager = manager;
  }

  createUser = async (user: User): Promise<User> => {
    return await this.manager.save(user);
  };

  getUser = async (
    field: string,
    value: string | number
  ): Promise<User | null> => {
    return await this.manager.findOne(User, {
      where: { [field]: Like(value) },
    });
  };

  updateUser = async (id: number, user: User): Promise<User> => {
    await this.manager.update(User, id, user);
    return user;
  };

  getAllUsers = async (filters: {
    [key: string]: string | number;
  }): Promise<User[]> => {
    let queryOptions: any = {};

    for (const key in filters) {
      if (Object.prototype.hasOwnProperty.call(filters, key)) {
        const value = filters[key];
        if (typeof value === "string") {
          queryOptions.where = {
            ...queryOptions.where,
            [key]: Like(`%${value}%`),
          };
        } else {
          queryOptions.where = {
            ...queryOptions.where,
            [key]: value,
          };
        }
      }
    }

    return await this.manager.find(User, queryOptions);
  };

  deleteUser = async (id: number): Promise<void> => {
    await this.manager.delete(User, id);
  };
}
