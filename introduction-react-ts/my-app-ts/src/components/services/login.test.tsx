import { Login } from "./login";

const mockEmail = "pedromiguelmgaldino@gmail.com";
const mockPassword = "123456";
const mockInvalidLogin = "Email ou senha incorretos";
const mockWrongText = "wrongText";

const mockSetIsLoggedIn = jest.fn();
const mockNavigate = jest.fn();

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: () => ({
    setIsLoggedIn: mockSetIsLoggedIn,
  }),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  it("should navigate to account", async () => {
    await Login(mockEmail, mockPassword);
    expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true);
    expect(mockNavigate).toBeCalledWith(`/account/1`);
  });

  it("should render alert with wrong email", async () => {
    await Login(mockWrongText, mockPassword);
    expect(mockSetIsLoggedIn).toHaveBeenCalledWith(false);
    expect(mockAlert).toBeCalledWith(mockInvalidLogin);
    expect(mockNavigate).not.toBeCalled();
  });

  it("should render alert with wrong password", async () => {
    await Login(mockEmail, mockWrongText);
    expect(mockSetIsLoggedIn).toHaveBeenCalledWith(false);
    expect(mockAlert).toBeCalledWith(mockInvalidLogin);
    expect(mockNavigate).not.toBeCalled();
  });
});
