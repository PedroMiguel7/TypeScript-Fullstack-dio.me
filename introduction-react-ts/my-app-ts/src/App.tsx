import { Card } from "./components/card";
import { Layout } from "./components/layout";

function App() {
  return (
    <Layout>
      <div>
        <Card
          id={2}
          paragraph="Typescript"
          details="TS for frontend and backend"
        />
        <Card id={4} paragraph="HTML" details="HTML for frontend" />
        <Card id={5} paragraph="SQL" details="SQL for data base" />
      </div>
    </Layout>
  );
}

export default App;
