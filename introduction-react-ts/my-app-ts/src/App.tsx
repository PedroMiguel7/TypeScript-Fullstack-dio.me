import { ChakraProvider, Button } from "@chakra-ui/react";

// import { Card } from "./components/card";
import { Layout } from "./components/layout";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  return (
    <ChakraProvider>
      <Layout>
        {/* <Card /> */}
        <div>
          <p>{value}</p>
          <Button onClick={() => setValue(value - 1)}>Decrement</Button>
          <Button onClick={() => setValue(value + 1)}>Increment</Button>
        </div>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
