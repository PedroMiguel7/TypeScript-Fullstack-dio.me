import { createContext, useEffect, useState } from "react";
import { getItemLocalStorage } from "./services/storage";

interface IAppContext {
  user: string;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const AppContext = createContext({} as IAppContext);

export const AppContexrProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<string>("");

  const storage = getItemLocalStorage("dioBank");

  useEffect(() => {
    if (storage) {
      setIsLoggedIn(storage.logged);
      setUser(storage.user);
    }
  }, [storage]);

  return (
    <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
};
