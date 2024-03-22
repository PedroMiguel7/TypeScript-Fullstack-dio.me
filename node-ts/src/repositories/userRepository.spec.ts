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
    const resp = await userRepository.createUser(mockUser);
    expect(managerMock.save).toHaveBeenCalled();
    expect(resp).toMatchObject(mockUser);
  });

  // it("should get a user by email", async () => {
  //   const resp = await userRepository.getUser("email", mockUser.email);
  //   expect(managerMock.findOne).toHaveBeenCalled();
  //   expect(resp).toMatchObject(mockUser);
  // });

  // it("should get a user by id", async () => {
  //   const resp = await userRepository.getUser("id", 1);
  //   expect(managerMock.findOne).toHaveBeenCalled();
  //   expect(resp).toMatchObject(mockUser);
  // });

  // it("should get all users", async () => {
  //   const resp = await userRepository.getAllUsers();
  //   expect(managerMock.find).toHaveBeenCalled();
  //   expect(resp).toMatchObject([mockUser]);
  // });

  // it("should delete a user", async () => {
  //   await userRepository.deleteUser(1);
  //   expect(managerMock.delete).toHaveBeenCalled();
  // });
});
