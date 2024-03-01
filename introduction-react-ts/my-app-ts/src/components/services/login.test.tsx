import { login } from "./login";

const mockEmail = "migule@gmail.com";
const mockPassword = "123456";

describe("login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  it("should render alert", () => {
    login(mockEmail, mockPassword);
    expect(mockAlert).toBeCalledWith(
      `email: ${mockEmail}, password: ${mockPassword}`
    );
  });
});
