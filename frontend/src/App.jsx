import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Film from './pages/films/Film';

function App() {

  return (
   <div className='App'>
      <div className="App-container">
        <div className="topnav">
          <a href="# ">Accueil</a>
          <a href="# ">Films</a>
          <a href="# ">Series</a>
        </div>
      </div>

      <Film/>
   </div>
  );
}

export default App
