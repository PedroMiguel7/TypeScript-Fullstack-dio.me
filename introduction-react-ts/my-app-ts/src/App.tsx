import { ChakraProvider } from "@chakra-ui/react";

import { Card } from "./components/card";
import { Layout } from "./components/layout";

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Card />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
