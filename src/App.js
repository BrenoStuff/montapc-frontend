import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Comunidade from './pages/Comunidade'
import Pecas from './pages/Pecas'
import Faq from './pages/Faq'
import Montador from './pages/Montador'
import Admin from './pages/Admin'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/comunidade' element={<Comunidade />} />
      <Route path='/pecas' element={<Pecas />} />
      <Route path='/faq' element={<Faq />} />
      <Route path='/montador/:first' element={<Montador />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
