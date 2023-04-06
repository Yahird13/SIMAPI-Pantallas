import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';//npm install react-router-dom


//PANTALLAS PARA PRUEBAS
import LoginScreen from './screens/LoginScreen'; 
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import RecordScreen from './screens/tables/RecordScreen';
import CamillasScreen from './screens/tables/CamillasScreen';
import UsersScreen from './screens/tables/UsersScreen';
import Navbar from '././componets/Navbar'
import InsertUser from './screens/cruds/InsertUser';
import InsertCamilla from './screens/cruds/InsertCamilla';
import HistorialDetalles from './screens/HistorialDetalles';
import EditUser from './screens/cruds/EditUser';
import EditCamilla from './screens/cruds/EditCamilla';


function App() {
    return (
      <Router>{/*se crea el router, el cual controla las rutas*/}
        <Routes> {/* se crea el espacio donde se van a colocar las rutas */} 
          <Route path={"/"} element={<LoginScreen/>}/>{/* se crea la ruta, la cual se va a mostrar en el path especificado y renderizara el elemento especificado */}
          <Route path={"/inicio"} element={<HomeScreen/>}/>
          <Route path={"/configuracion"} element={<SettingsScreen/>}/>
          <Route path={"/historial"} element={<RecordScreen/>}/>
          <Route path={"/camillas"} element={<CamillasScreen/>}/>
          <Route path={"/usuarios"} element={<UsersScreen/>}/>
          <Route path={"/agregarUsuario"} element={<InsertUser/>}/>
          <Route path={"/editarUsuario"} element={<EditUser/>}/>
          <Route path={"/agregarCamilla"} element={<InsertCamilla/>}/>
          <Route path={"/editarCamilla"} element={<EditCamilla/>}/>
          <Route path={"/historialDetalle"} element={<HistorialDetalles/>}/>
          <Route path={"/pruebas"} element={<Navbar/>}/>
        </Routes>
      </Router>

    );
}

export default App;
