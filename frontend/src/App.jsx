import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route, Link } from 'react-router-dom'; // Ajout de Link ici
import './App.css'
import Film from './pages/films/Film';
import Serie from './pages/series/serie';
import Details from './pages/films/Details';

function App() {

  return (
   <div className='App'>
      <div className="App-container">
        <div className="topnav">
          <Link to="/">Accueil</Link>
          <Link to="/">Films</Link> {/* Changé vers "/" pour correspondre à la route Film */}
          <Link to="/series">Series</Link>
        </div>
        <Routes>
          <Route path='/' element={<Film/>}/>
          <Route path='/films/:id' element={<Details/>}/>
          <Route path='/series' element={<Serie/>}/>
        </Routes>
      </div>
   </div>
  );
}

export default App