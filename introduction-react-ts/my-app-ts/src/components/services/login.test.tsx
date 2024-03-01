import { login } from "./login";

const mockEmail = "pedromiguelmgaldino@gmail.com";
const mockPassword = "123456";

describe("login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  it("should render alert", async () => {
    await login(mockEmail, mockPassword);
    expect(mockAlert).toBeCalledWith(
      `email: ${mockEmail}, password: ${mockPassword}`
    );
  });

  it("should render alert with wrong email", async () => {
    await login("wrongEmail", mockPassword);
    expect(mockAlert).toBeCalledWith("Email ou senha incorretos");
  });

  it("should render alert with wrong password", async () => {
    await login(mockEmail, "wrongPassword");
    expect(mockAlert).toBeCalledWith("Email ou senha incorretos");
  });
});
