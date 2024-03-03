import { Route, Routes } from "react-router-dom";

import { Account } from "./pages/account";
import { AccountInfo } from "./pages/accountInfo";
import { Home } from "./pages/home";
import { useContext } from "react";
import { AppContext } from "./components/appContext";

export const MainRoutes = () => {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/account/:id"
        element={isLoggedIn ? <Account /> : <Home />}
      />
      <Route path="/accountInfo" element={<AccountInfo />} />
    </Routes>
  );
};
