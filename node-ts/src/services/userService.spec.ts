import { UserService } from "./userService";

const user = {
  name: "Pedro",
  email: "pedro@gmail.com",
};

describe("UserService", () => {
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService();
  });

  it("should create a new user", () => {
    const resp = userService.createUser(user.name, user.email);
    expect(resp).toEqual({
      id: 2,
      name: user.name,
      email: user.email,
    });
  });
});
