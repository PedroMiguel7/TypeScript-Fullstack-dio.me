import { ChakraProvider } from "@chakra-ui/react";
import { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AppContexrProvider } from "./components/appContext";
import { Layout } from "./components/layout";
import { Account } from "./pages/account";
import { AccountInfo } from "./pages/accountInfo";
import { Home } from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <AppContexrProvider>
        <ChakraProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/account/:id" element={<Account />} />
              <Route path="/accountInfo" element={<AccountInfo />} />
            </Routes>
          </Layout>
        </ChakraProvider>
      </AppContexrProvider>
    </BrowserRouter>
  );
}

export default App;
