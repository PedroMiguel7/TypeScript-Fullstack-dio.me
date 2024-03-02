import { createContext } from "react";

interface IAppContext {
  user: string;
  isLoggedIn: boolean;
}

export const AppContext = createContext({} as IAppContext);

export const AppContexrProvider = ({ children }: any) => {
  const user = "Pedro Miguel";
  const isLoggedIn = false;

  return (
    <AppContext.Provider value={{ user, isLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
};
