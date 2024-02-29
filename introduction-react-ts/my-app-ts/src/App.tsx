import { Card } from "./components/card";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

function App() {
  return (
    <>
      <Header />
      <div>
        <Card
          id={2}
          paragraph="Typescript"
          details="TS for frontend and backend"
        />
        <Card id={4} paragraph="HTML" details="HTML for frontend" />
        <Card id={5} paragraph="SQL" details="SQL for data base" />
      </div>
      <Footer />
    </>
  );
}

export default App;
