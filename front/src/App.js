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
              <Route element={<CadastroSalas/>} path="/"/>
              <Route element={<EdicaoSalas/>} path="/edicaoSalas"/>

              <Route element={<CadastroAlunos/>} path="/alunos"/>
              <Route element={<EdicaoAlunos/>} path="/edicaoAlunos"/>

              <Route element={<CadastroProfessores/>} path="/professores"/>
              <Route element={<EdicaoProfessores/>} path="/edicaoProfessores"/>

              <Route element={<CadastroCurso/>} path="/curso"/>
              <Route element={<EdicaoCurso/>} path="/edicaoCurso"/>

              <Route element={<CadastroMateria/>} path="/materia"/>
              <Route element={<EdicaoMateria/>} path="/edicaoMateria"/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
