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

  it("should get a user by id", async () => {
    mockUserRepository.getUser = jest
      .fn()
      .mockImplementation(() => Promise.resolve(userMock));
    const response = await userService.getUser("id", 1);
    expect(mockUserRepository.getUser).toHaveBeenCalledWith("id", 1);
    expect(response).toEqual(userMock);
  });

  it("should delete a user", async () => {
    mockUserRepository.deleteUser = jest
      .fn()
      .mockImplementation(() => Promise.resolve());
    await userService.deleteUser(1);
    expect(mockUserRepository.deleteUser).toHaveBeenCalledWith(1);
  });

  it("should update a user", async () => {
    mockUserRepository.updateUser = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ id: 1, ...userMock }));
    const response = await userService.updateUser({ id: 1, ...userMock });
    expect(mockUserRepository.updateUser).toHaveBeenCalledWith(1, {
      id: 1,
      ...userMock,
    });
    expect(response).toEqual({ id: 1, ...userMock });
  });

  it("should get an authenticated user", async () => {
    mockUserRepository.getUserByemailAndPassword = jest
      .fn()
      .mockImplementation(() => Promise.resolve(userMock));
    const response = await userService.getAuthenticatedUser(
      userMock.email,
      userMock.password
    );
    expect(mockUserRepository.getUserByemailAndPassword).toHaveBeenCalledWith(
      userMock.email,
      userMock.password
    );
    expect(response).toEqual(userMock);
  });

  it("should get a token", async () => {
    mockUserRepository.getUserByemailAndPassword = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ ...userMock, id: "1" }));
    const response = await userService.getToken(
      userMock.email,
      userMock.password
    );
    expect(mockUserRepository.getUserByemailAndPassword).toHaveBeenCalledWith(
      userMock.email,
      userMock.password
    );
    expect(response).toEqual("1");
  });
});
