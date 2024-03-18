import { UserController } from "./userController";

const mockUser = {
  name: "Pedro",
  email: "pedro@test.com",
};

const mockUserBusiness = {
  createUser: jest.fn(),
  getUser: jest.fn(),
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

const userController = new UserController(mockUserBusiness as any);

describe("userController", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call createUser and return status 201", () => {
    mockUserBusiness.createUser.mockReturnValue({
      status: 201,
      message: "User created",
      data: mockUser,
    });

    userController.createUser(mockRequest as any, mockResponse as any);

    expect(mockUserBusiness.createUser).toHaveBeenCalledWith(mockUser);
    expect(mockResponse.status).toHaveBeenCalledWith(201);
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: "User created",
      data: mockUser,
    });
  });

  it("should call getAllUsers and return status 200", () => {
    const users = [
      {
        id: 1,
        ...mockUser,
      },
    ];
    mockUserBusiness.getAllUsers.mockReturnValue({
      status: 200,
      message: "Users found",
      data: users,
    });
  });

  it("should call getUser and return status 200", () => {
    const user = {
      id: 1,
      ...mockUser,
    };
    mockUserBusiness.getUser.mockReturnValue({
      status: 200,
      message: "User found",
      data: user,
    });

    const mockRequest = {
      params: {
        field: "email",
        value: mockUser.email,
      },
    };
  });

  it("should call deleteUser and return status 200", () => {
    mockUserBusiness.deleteUser.mockReturnValue({
      status: 200,
      message: "User deleted",
    });

    const mockRequest = {
      params: {
        id: 1,
      },
    };

    userController.deleteUser(mockRequest as any, mockResponse as any);

    expect(mockUserBusiness.deleteUser).toHaveBeenCalledWith(1);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: "User deleted",
    });
  });

  it("should call updateUser and return status 200", () => {
    mockUserBusiness.updateUser.mockReturnValue({
      status: 200,
      message: "User updated",
    });

    const mockRequest = {
      params: {
        id: 1,
      },
      body: mockUser,
    };

    userController.updateUser(mockRequest as any, mockResponse as any);

    expect(mockUserBusiness.updateUser).toHaveBeenCalledWith({
      id: 1,
      ...mockUser,
    });
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: "User updated",
    });
  });
});
