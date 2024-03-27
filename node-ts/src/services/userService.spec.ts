import { UserService } from "./userService";

jest.mock("../repositories/userRepository");
jest.mock("../database", () => {
  initialize: jest.fn();
});

const mockUserRepository = require("../repositories/userRepository");

const userMock = {
  name: "Pedro",
  email: "pedro@test.com",
  password: "123456",
};

const otherUserMock = {
  name: "Test",
  email: "test@gmail.com",
  password: "654321",
};

describe("UserService", () => {
  const userService = new UserService(mockUserRepository);

  it("should create a user", async () => {
    mockUserRepository.createUser = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ id: 1, ...userMock }));
    const response = await userService.createUser(userMock);
    expect(mockUserRepository.createUser).toHaveBeenCalledWith(userMock);
    expect(response).toEqual({ id: 1, ...userMock });
  });

  it("should get all users", async () => {
    mockUserRepository.getAllUsers = jest
      .fn()
      .mockImplementation(() => Promise.resolve([userMock, otherUserMock]));
    const response = await userService.getAllUsers();
    expect(mockUserRepository.getAllUsers).toHaveBeenCalled();
    expect(response).toEqual([userMock, otherUserMock]);
  });
});
