import { Layout } from "./components/layout";
import styled from "styled-components";

const Box = styled.div`
  background-color: orange;
  border-radius: 20px;
  padding-left: 10px;
`;

function App() {
  return (
    <Layout>
      <Box>
        <h1>Faça login</h1>
      </Box>
      <label htmlFor="emailInput">Email</label>
      <input type="email" placeholder="Digite seu email" id="emailInput" />

      <label htmlFor="passwordInput">Senha</label>
      <input
        type="password"
        placeholder="Digite sua senha"
        id="passwordInput"
      />
      <button>Entrar</button>
    </Layout>
  );
}

export default App;
