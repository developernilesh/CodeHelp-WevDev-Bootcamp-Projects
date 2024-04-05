import './App.css';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Support from './Components/Spport';
import Labs from './Components/Labs';
import NotFound from './Components/NotFound';
import MainNav from './Components/MainNav';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><NavLink className="links" to="/">Home</NavLink></li>
          <li><NavLink className="links" to="/about">About</NavLink></li>
          <li><NavLink className="links" to="/support">Support</NavLink></li>
          <li><NavLink className="links" to="/labs">Labs</NavLink></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<MainNav/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/support' element={<Support/>}/>
          <Route path='/labs' element={<Labs/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
