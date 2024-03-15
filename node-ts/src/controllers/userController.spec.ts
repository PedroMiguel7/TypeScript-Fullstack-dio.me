import { UserController } from "./userController";

const mockUser = {
  name: "Pedro",
  email: "pedro@test.com",
};

const mockUserService = {
  createUser: jest.fn(),
  getAllUsers: jest.fn(),
  deleteUser: jest.fn(),
  updateUser: jest.fn(),
};

const mockRequest = {
  body: mockUser,
};

const mockResponse = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

const userController = new UserController(mockUserService as any);

describe("userController", () => {
  it("should call createUser method from userService", () => {
    userController.createUser(mockRequest as any, mockResponse as any);
    expect(mockUserService.createUser).toHaveBeenCalledWith(
      mockRequest.body.name,
      mockRequest.body.email
    );
  });

  it("should call getAllUsers method from userService", () => {
    userController.getAllUsers(mockRequest as any, mockResponse as any);
    expect(mockUserService.getAllUsers).toHaveBeenCalled();
  });

  it("should call deleteUser method from userService", () => {
    const mockRequest = {
      params: {
        id: "1",
      },
    };
    userController.deleteUser(mockRequest as any, mockResponse as any);
    expect(mockUserService.deleteUser).toHaveBeenCalledWith(1);
  });

  it("should call updateUser method from userService", () => {
    const mockRequest = {
      params: {
        id: "1",
      },
      body: mockUser,
    };
    userController.updateUser(mockRequest as any, mockResponse as any);
    expect(mockUserService.updateUser).toHaveBeenCalledWith(
      1,
      mockRequest.body.name,
      mockRequest.body.email
    );
  });

  it("should return 400 when body is invalid", () => {
    const mockRequest = {
      body: {},
    };
    userController.createUser(mockRequest as any, mockResponse as any);
    expect(mockResponse.status).toHaveBeenCalledWith(400);
    expect(mockResponse.json).toHaveBeenCalledWith({ message: "Invalid body" });
  });

  it("should return 201 when user is created", () => {
    userController.createUser(mockRequest as any, mockResponse as any);
    expect(mockResponse.status).toHaveBeenCalledWith(201);
    expect(mockResponse.json).toHaveBeenCalledWith({ message: "User created" });
  });

  it("should return 200 when users are returned", () => {
    userController.getAllUsers(mockRequest as any, mockResponse as any);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
  });

  it("should return 200 when user is deleted", () => {
    const mockRequest = {
      params: {
        id: "1",
      },
    };
    userController.deleteUser(mockRequest as any, mockResponse as any);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith({ message: "User deleted" });
  });

  it("should return 200 when user is updated", () => {
    const mockRequest = {
      params: {
        id: "1",
      },
      body: mockUser,
    };
    userController.updateUser(mockRequest as any, mockResponse as any);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith({ message: "User updated" });
  });
});
