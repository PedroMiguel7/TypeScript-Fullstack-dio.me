import { UserBusiness } from "./userbusiness";

const userMock = {
  name: "Pedro",
  email: "pedro@test.com",
  password: "123456",
};

const invalidUserMock = {
  name: "",
  email: "",
  password: "",
};

const mockUserService = {
  createUser: jest.fn(),
  getUser: jest.fn(),
  getAllUsers: jest.fn(),
  deleteUser: jest.fn(),
  updateUser: jest.fn(),
};

jest.mock("../repositories/userRepository");
jest.mock("../database", () => {
  initialize: jest.fn();
});

const userBusiness = new UserBusiness(mockUserService as any);

describe("userBusiness", () => {
  describe("create user", () => {
    it("should return invalid body when create user", () => {
      const response = userBusiness.createUser(invalidUserMock);
      expect(response).toEqual({ error: "Invalid body" });
    });

    it.todo("should return null when create user");
  });

  describe("get user", () => {
    it("should return invalid params when get user", () => {
      const response = userBusiness.getUser("name" as any, "");
      expect(response).toEqual({ error: "Invalid params" });
    });

    it.todo("should return null when get user");
  });

  describe("delete user", () => {
    it("should return invalid params when delete user", () => {
      const response = userBusiness.deleteUser(0);
      expect(response).toEqual({ error: "Invalid params" });
    });

    it.todo("should return null when delete user");
  });

  describe("update user", () => {
    it("should return invalid body when update user", () => {
      const response = userBusiness.updateUser(invalidUserMock);
      expect(response).toEqual({ error: "Invalid body" });
    });

    it.todo("should return null when update user");
  });
});
