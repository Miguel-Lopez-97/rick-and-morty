import './App.css';
import Header from './Componets/Header/header';
import {Routes, Route} from 'react-router-dom'
import Home from './Componets/Home/home';
import Characters from './Componets/Character/characters';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/characters" element={<Characters />}/>
      </Routes>
    </div>
  );
}

export default App;
