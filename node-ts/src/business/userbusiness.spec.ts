import { UserBusiness } from "./userbusiness";

const userMock = {
  name: "Pedro",
  email: "pedro@test.com",
};

const invalidUserMock = {
  name: "",
  email: "",
};

const userBusiness = new UserBusiness();

describe("userBusiness", () => {
  it("should create a new user", () => {
    const resp = userBusiness.createUser(userMock);
    expect(resp).toEqual({
      status: 201,
      message: "User created",
      data: {
        id: 2,
        ...userMock,
      },
    });
  });

  it("should return status 400 if body is invalid when create user", () => {
    const resp = userBusiness.createUser(invalidUserMock);
    expect(resp).toEqual({
      status: 400,
      message: "Invalid body",
    });
  });

  it("should return status 400 if body is invalid when updated user", () => {
    const resp = userBusiness.updateUser(invalidUserMock);
    expect(resp).toEqual({
      status: 400,
      message: "Invalid body",
    });
  });
});
