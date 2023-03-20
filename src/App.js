import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';//npm install react-router-dom


//PANTALLAS PARA PRUEBAS
//import LoginScreen from './screens/LoginScreen'; 
//import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

function App() {
    return (
      <Router>{/*se crea el router, el cual controla las rutas*/}
        <Routes> {/* se crea el espacio donde se van a colocar las rutas */} 
          <Route path={"/"} element={<SettingsScreen/>}/>{/* se crea la ruta, la cual se va a mostrar en el path especificado y renderizara el elemento especificado */}
        </Routes>
      </Router>

    );

}

export default App;
