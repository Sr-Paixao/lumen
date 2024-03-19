import './App.css';
import Login from './pages/login/index.jsx';
import Cadastrese from './pages/cadastros/index.jsx'
import Inicio from './pages/main/index.jsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom'; /*Temos de importar essas bibliotecas para o react-router funcioanr*/
import { Link } from 'react-router-dom';
// import CadastroAtor from './pages/cadastroAtor/index.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ='/'               element = {<Login/>}/> 
        <Route path ='/cadastro'     element = {<Cadastrese/>}/>
        <Route path ='/inicio'         element = {<Inicio/>}/>
        {/* <Route path ='/cadstro_ator'   element = {<CadastroAtor/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
