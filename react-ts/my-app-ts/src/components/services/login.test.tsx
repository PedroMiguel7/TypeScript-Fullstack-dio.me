import { accountExemple } from "../../api";
import { Login } from "./login";

const mockEmail = accountExemple.email;
const mockPassword = accountExemple.password;
const mockInvalidLogin = "Email ou senha incorretos";
const mockWrongText = "wrongText";

describe("login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  it("should navigate to account", async () => {
    const resp = await Login(mockEmail, mockPassword);
    expect(resp).toBeTruthy();
  });

  it("should render alert with wrong email", async () => {
    const resp = await Login(mockWrongText, mockPassword);
    expect(resp).toBeFalsy();
    expect(mockAlert).toBeCalledWith(mockInvalidLogin);
  });

  it("should render alert with wrong password", async () => {
    const resp = await Login(mockEmail, mockWrongText);
    expect(resp).toBeFalsy();
    expect(mockAlert).toBeCalledWith(mockInvalidLogin);
  });
});
