import { Layout } from "./components/layout";

function App() {
  return (
    <Layout>
      <h1>Faça o login</h1>
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
