import { User, UserService } from "./userService";

const userMock = {
  name: "Pedro",
  email: "pedro@test.com",
};
const dbMock: User[] = [];

describe("UserService", () => {
  const userService = new UserService(dbMock);

  it("should create a new user", () => {
    const resp = userService.createUser(userMock.name, userMock.email);
    expect(resp).toEqual({
      id: 1,
      name: userMock.name,
      email: userMock.email,
    });
  });
});
