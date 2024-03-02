import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "./components/layout";
import { Account } from "./pages/account";
import { AccountInfo } from "./pages/accountInfo";
import { Home } from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/account/:id" element={<Account />} />
            <Route path="/accountInfo" element={<AccountInfo />} />
          </Routes>
        </Layout>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
