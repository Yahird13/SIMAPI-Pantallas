import React from 'react'
import SimapiNavbar from '../../src/componets/navbar/SimapiNavbar'
import Button from '../componets/buttons/Button';
import { Formik } from 'formik';


export default function CrearUsuario() {
  return (
    <div>
      <SimapiNavbar navbarItems={[
        { path: "/inicio", text: "Inicio" },
        { path: "/camillas", text: "Camillas" },
        { path: "/usuarios", text: "Usuarios" },
        { path: "/historial", text: "Historial" }]} />

      <div style={{
        position: 'fixed',
        bottom: '45px',
        right: '45px',
        left: '45px',
        top: '175px',
        borderRadius: '15px',
        border: '5px solid black'
      }}>
        <div style={{ paddingLeft: '25px', paddingTop: '20px' }}>
          <label style={{
            fontStyle: 'bold',
            fontSize: '30px',
            paddingRight: '150px',
            marginBottom: '20px',
          }}>Creación de nuevo usuario</label><br />
          <label style={{
            fontSize: '30px',
            paddingRight: '250px',
            marginBottom: '20px',
          }}>Nombre:</label>
          <input type='text' style={{
            fontSize: '25px',
            width: '500px',
            marginBottom: '20px',
          }}></input><br />
          <label style={{
            fontStyle: 'bold',
            fontSize: '30px',
            paddingRight: '235px',
            marginBottom: '20px',
          }}>Apellidos:</label>
          <input type='text' style={{
            fontSize: '25px',
            width: '500px',
            marginBottom: '20px',
          }}></input><br />
          <label style={{
            fontStyle: 'bold',
            fontSize: '30px',
            paddingRight: '260px',
            marginBottom: '20px',
          }}>Correo:</label>
          <input type='text' style={{
            fontSize: '25px',
            width: '500px',
            marginBottom: '20px',
          }}></input><br />
          <label style={{
            fontStyle: 'bold',
            fontSize: '30px',
            paddingRight: '210px',
            marginBottom: '20px',
          }}>Contraseña:</label>
          <input type='text' style={{
            fontSize: '25px',
            width: '500px',
            marginBottom: '20px',
          }}></input><br />
          <label style={{
            fontStyle: 'bold',
            fontSize: '30px',
            paddingRight: '310px',
            marginBottom: '20px',
          }}>Rol:</label>
          <select style={{
            fontSize: '25px',
            width: '500px',
            marginBottom: '20px',
          }}>
            <option>Seleccione un rol</option>
            <option>Administrador</option>
            <option>Enfermera</option>
          </select>
        </div>


        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '30%',
        }}>
          <Button text={"Guardar Usuario"} style={styles.btnGuardarUsuario} path={"#"} />
        </div>



      </div>

    </div>
  )
}

const styles = {
  btnGuardarUsuario: {
    position: 'absolute',
    width: '220px',
    height: '50px',
    borderRadius: '10px',
    backgroundColor: '#3fad5e',
    bottom: '40px',
  }
}
