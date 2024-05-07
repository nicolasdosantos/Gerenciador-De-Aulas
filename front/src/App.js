import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import CadastroProfessores from './pages/CadastroProfessores'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro_professores" element={<CadastroProfessores />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;