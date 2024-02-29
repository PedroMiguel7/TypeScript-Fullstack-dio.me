import { login } from "./login";

describe("login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  it("should render alert", () => {
    login();
    expect(mockAlert).toBeCalledWith("Login successful");
  });
});
