import React, { Component } from 'react';
import MyNavbar from './componets/Navbar';
import './App.css';
import LoginButton from './componets/buttons/LoginButton';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';//npm install react-router-dom
import DetailsButton from './componets/buttons/DetailsButton';

function App() {
    return (
      <Router>{/*se crea el router, el cual controla las rutas*/}
        <Routes> {/* se crea el espacio donde se van a colocar las rutas */}
          <Route path={"/"} element={<LoginButton/>}/> {/* se crea la ruta, la cual se va a mostrar en el path especificado y renderizara el elemento especificado */}
          <Route path={"/navbar"} element={<MyNavbar/>}/>
          <Route path={"/detailsButton"} element={<DetailsButton/>}/>
        </Routes>
      </Router>
    );

}

export default App;
