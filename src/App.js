import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navegador from './components/navbar/Navegador';
import Inicio from './components/pages/Inicio';
import Manga from './components/pages/Manga';
import Populares from './components/pages/Populares';

function App() {
  return (
    <div className="App">
      <Router>
        <Navegador/>
        <Routes>
          <Route path='/' exact Component={Inicio}/>
          <Route path='/mangas' exact Component={Manga}/>
          <Route path='/recomendados' exact Component={Populares}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
