import { EntityManager } from "typeorm";

import { getMockEntityManager } from "../__mocks__/mockEntityManager.mock";
import { User } from "../entities/user";
import { UserRepository } from "./userRepository";

const mockUser = {
  name: "Pedro",
  email: "pedro@test.com",
  password: "123456",
} as User;

describe("UserRepository", () => {
  let userRepository: UserRepository;
  let managerMock: Partial<EntityManager>;

  beforeAll(async () => {
    managerMock = await getMockEntityManager({});
    userRepository = new UserRepository(managerMock as EntityManager);
  });

  it("should create a user", async () => {
    await userRepository.createUser(mockUser);
    expect(managerMock.save).toHaveBeenCalledWith(mockUser);
  });
});
