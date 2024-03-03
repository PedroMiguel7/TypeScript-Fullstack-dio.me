import { Route, Routes } from "react-router-dom";

import { Account } from "./pages/account";
import { AccountInfo } from "./pages/accountInfo";
import { Home } from "./pages/home";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account/:id" element={<Account />} />
      <Route path="/accountInfo" element={<AccountInfo />} />
    </Routes>
  );
};
