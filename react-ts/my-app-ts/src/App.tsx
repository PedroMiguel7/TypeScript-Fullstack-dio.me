import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import { AppContexrProvider } from "./components/appContext";
import { Layout } from "./components/layout";
import {
  creaateLocalStorage,
  getItemLocalStorage,
} from "./components/services/storage";
import { MainRoutes } from "./routes";

function App() {
  !getItemLocalStorage("dioBank") &&
    creaateLocalStorage("dioBank", {
      logged: false,
    });

  return (
    <BrowserRouter>
      <AppContexrProvider>
        <ChakraProvider>
          <Layout>
            <MainRoutes></MainRoutes>
          </Layout>
        </ChakraProvider>
      </AppContexrProvider>
    </BrowserRouter>
  );
}

export default App;
