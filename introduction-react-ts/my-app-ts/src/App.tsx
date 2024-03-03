import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import { AppContexrProvider } from "./components/appContext";
import { Layout } from "./components/layout";
import { getItemLocalStorage } from "./components/services/storage";
import { MainRoutes } from "./routes";

function App() {
  const localStorage = getItemLocalStorage("dioBank");
  console.log(localStorage);

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
