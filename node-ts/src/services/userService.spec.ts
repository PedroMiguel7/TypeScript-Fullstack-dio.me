import { UserService } from "./userService";

jest.mock(
  "../repositories/userRepository"
  // , () => {
  //   return {
  //     UserRepository: jest.fn().mockImplementation(() => {
  //       return {
  //         createUser: jest.fn().mockImplementation((user) => user),
  //         getAllUsers: jest.fn().mockImplementation(() => [userMock]),
  //         getUser: jest.fn().mockImplementation((field, value) => userMock),
  //         deleteUser: jest.fn().mockImplementation(() => true),
  //         updateUser: jest.fn().mockImplementation((id, user) => user),
  //       };
  //     }),
  //   };
  // }
);

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
});
