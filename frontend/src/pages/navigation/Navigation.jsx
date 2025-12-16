import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'; // Ajout de Link ici
import Serie from '../series/serie';
import Details from '../films/Details';

import Film from '../films/Film';
import Login from '../Auth/Login';
import Register from '../Auth/Register';


export default function Navigation() {
  return (
    <>
        <div className="topnav">
          <Link to="/">Accueil</Link>
          <Link to="/">Films</Link> {/* Changé vers "/" pour correspondre à la route Film */}
          <Link to="/series">Series</Link>
          <Link to="/login ">Me connecter</Link>
        </div>
        <Routes>
          <Route path='/' element={<Film/>}/>
          <Route path='/films/:id' element={<Details/>}/>
          <Route path='/series' element={<Serie/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
    </>
  )
}
