import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Comunidade from './pages/Comunidade'
import Pecas from './pages/Pecas'
import Faq from './pages/Faq'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/comunidade' element={<Comunidade />} />
      <Route path='/pecas' element={<Pecas />} />
      <Route path='/faq' element={<Faq />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
