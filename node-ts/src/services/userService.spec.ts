import { User, UserService } from "./userService";

const userMock = {
  name: "Pedro",
  email: "pedro@test.com",
};

const otherUserMock = {
  name: "Test",
  email: "test@gmail.com",
};

let dbMock: User[] = [];

describe("UserService", () => {
  let userService: UserService;

  beforeEach(() => {
    dbMock = [];
    userService = new UserService(dbMock);
  });

  it("should create a new user", () => {
    const resp = userService.createUser(userMock);
    expect(resp).toEqual({
      status: 201,
      message: "User created",
      data: {
        id: 1,
        ...userMock,
      },
    });
  });

  it("should get all users", () => {
    const resp = userService.getAllUsers();
    expect(resp).toEqual({
      status: 200,
      data: [],
      message: "Users found",
    });
  });

  it("should delete a user", () => {
    userService.createUser(userMock);
    userService.createUser(otherUserMock);
    const resp = userService.deleteUser(1);
    expect(resp).toEqual({ status: 200, message: "User deleted" });
  });

  it("should update a user", () => {
    userService.createUser(userMock);
    const resp = userService.updateUser({ id: 1, ...otherUserMock });
    expect(resp).toEqual({
      status: 200,
      message: "User updated",
      data: { id: 1, ...otherUserMock },
    });
  });
});
