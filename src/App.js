import React from 'react';
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
import Camilla from './screens/cruds/Camilla';
import DetailsHistory from './screens/cruds/DetailsHistory';
import LoginAdminScreen from './screens/LoginAdminScreen';
import AdminsScreen from './screens/tables/AdminsScreen';
import InstitutionScreen from './screens/tables/InstitutionScreen';
import Institucion from './screens/cruds/Institucion';


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
          <Route path={"/editarCamilla"} element={<Camilla/>}/>
          <Route path={"/detallesHistorial"} element={<DetailsHistory/>}/>
          <Route path={"/administradores"} element={<AdminsScreen/>}/>
          <Route path={"/instituciones"} element={<InstitutionScreen/>}/>
          <Route path={"/agregarInstitucion"} element={<Institucion/>}/>
          <Route path={"/editarInstitucion"} element={<Institucion mode={'edit'}/>}/>
          <Route path={"/detallesInstitucion"} element={<Institucion mode={'details'}/>}/>
          <Route path={"/admin"} element={<LoginAdminScreen/>}/>
          <Route path='/pruebas' element={<Navbar/>}/>
        </Routes>
      </Router>

    );
}

export default App;
