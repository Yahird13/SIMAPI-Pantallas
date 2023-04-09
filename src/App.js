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
import User from './screens/cruds/User';
import InsertCamilla from './screens/cruds/InsertCamilla';
import EditUser from './screens/cruds/EditUser';
import Camilla from './screens/cruds/Camilla';
import DetailsHistory from './screens/cruds/DetailsHistory';
import LoginAdminScreen from './screens/LoginAdminScreen';


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
          <Route path={"/agregarUsuario"} element={<User/>}/>
          <Route path={"/editarUsuario"} element={<User mode={'edit'}/>}/>
          <Route path={"/detallesUsuario"} element={<User mode={'details'}/>}/>
          <Route path={"/agregarCamilla"} element={<InsertCamilla/>}/>
          <Route path={"/editarCamilla"} element={<Camilla/>}/>
          <Route path={"/detallesHistorial"} element={<DetailsHistory/>}/>
{/*           <Route path={"/crearInstitucion"} element={<____/>}/>
          <Route path={"/editarInstitucion"} element={<____ mode={'edit'}/>}/> */}
          <Route path={"/admin"} element={<LoginAdminScreen/>}/>
        </Routes>
      </Router>

    );
}

export default App;
