import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route, Link } from 'react-router-dom'; // Ajout de Link ici
import './App.css'
import Navigation from './pages/navigation/Navigation';
// import Film from './pages/films/Film';
// import Serie from './pages/series/serie';
// import Details from './pages/films/Details';

function App() {

  return (
   <div className='App'>
      <div className="App-container">
        <Navigation/>
      </div>
   </div>
  );
}

export default App