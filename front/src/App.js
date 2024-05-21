import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CadastroSalas from "./pages/CadastroSalas";
import CadastroAlunos from "./pages/CadastroAlunos";
import CadastroProfessores from "./pages/CadastroProfessores";
import EdicaoProfessores from "./pages/EdicaoProfessores";
import EdicaoAlunos from "./pages/EdicaoAlunos";
import EdicaoSalas from "./pages/EdicaoSalas";
import CadastroCurso from "./pages/CadastroCurso";
import EdicaoCurso from "./pages/EdicaoCurso";
import CadastroMateria from "./pages/CadastroMateria";
import EdicaoMateria from "./pages/EdicaoMateria";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route element={<CadastroSalas/>} path="/"></Route>
              <Route element={<EdicaoSalas/>} path="/edicaoSalas"></Route>
              
              <Route element={<CadastroAlunos/>} path="/alunos"></Route>
              <Route element={<EdicaoAlunos/>} path="/edicaoAlunos"></Route>
              
              <Route element={<CadastroProfessores/>} path="/professores"></Route>
              <Route element={<EdicaoProfessores/>} path="/edicaoProfessores"></Route>
              
              <Route element={<CadastroCurso/>} path="/curso"></Route>
              <Route element={<EdicaoCurso/>} path="/edicaoCurso"></Route>
              
              <Route element={<CadastroMateria/>} path="/materia"></Route>
              <Route element={<EdicaoMateria/>} path="/edicaoMateria"></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
