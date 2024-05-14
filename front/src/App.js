import './App.css';
import Banner from "./components/Banner";
import CardCadastro from "./components/CardCadastro";

function App() {
  return (
    <div className="App">
      <Banner>
          <CardCadastro nome="Alunos" formAdicional="Data de Nascimento: "></CardCadastro>
      </Banner>
    </div>
  );
}

export default App;
