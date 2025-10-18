import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Cadastro from './pages/Cadastro.jsx'
import Pets from './pages/Pets.jsx';
import Contato from './pages/Contato.jsx';
import Sobre from './pages/Sobre.jsx';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/sobre' element={<Sobre/>} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/pets' element={<Pets />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
