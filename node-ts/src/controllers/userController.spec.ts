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

jest.mock("../services/userService.ts", () => {
  return {
    UserService: jest.fn().mockImplementation(() => {
      return {
        createUser: mockUserBusiness.createUser,
        getUser: mockUserBusiness.getUser,
        getAllUsers: mockUserBusiness.getAllUsers,
        deleteUser: mockUserBusiness.deleteUser,
        updateUser: mockUserBusiness.updateUser,
      };
    }),
  };
});

jest.mock("../database", () => {
  initialize: jest.fn();
});

const userController = new UserController();

describe("userController", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call createUser and return status 201", () => {
    mockUserBusiness.createUser.mockReturnValue({
      status: 201,
      message: "User created",
    });

    userController.createUser(mockRequest as any, mockResponse as any);

    expect(mockUserBusiness.createUser).toHaveBeenCalledWith(mockUser);
    expect(mockResponse.status).toHaveBeenCalledWith(201);
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
  });
});
