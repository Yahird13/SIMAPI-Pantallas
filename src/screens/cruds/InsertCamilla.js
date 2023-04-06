import React from 'react'
import SimapiNavbar from '../../componets/navbar/SimapiNavbar'
import Button from '../../componets/buttons/Button';

export default function InsertCamilla() {
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
            fontSize: '40px',
            paddingRight: '150px',
            marginBottom: '20px',
          }}>Creación de nueva Camilla</label><br />
          <label style={{
            fontSize: '35px',
            paddingRight: '230px',
            marginBottom: '20px',
          }}>Expediente:</label>
          <input type='text' style={{
            fontSize: '30px',
            width: '700px',
            marginBottom: '20px',
          }}></input><br />
          <label style={{
            fontStyle: 'bold',
            fontSize: '35px',
            paddingRight: '270px',
            marginBottom: '20px',
          }}>Paciente:</label>
          <input type='text' style={{
            fontSize: '30px',
            width: '700px',
            marginBottom: '20px',
          }}></input><br />
          <label style={{
            fontStyle: 'bold',
            fontSize: '35px',
            paddingRight: '348px',
            marginBottom: '20px',
          }}>Isla:</label>
         <select style={{
            fontSize: '30px',
            width: '700px',
            marginBottom: '20px',
          }}>
            <option>Seleccione una isla</option>
            <option>Isla 1</option>
            <option>Isla 2</option>
          </select><br />
          <label style={{
            fontStyle: 'bold',
            fontSize: '35px',
            paddingRight: '335px',
            marginBottom: '20px',
          }}>Sala:</label>
          <select style={{
            fontSize: '30px',
            width: '700px',
            marginBottom: '20px',
          }}>
            <option>Seleccione una sala</option>
            <option>Sala 1</option>
            <option>Sala 2</option>
            <option>Sala 3</option>
            <option>Sala 4</option>
            <option>Sala 5</option>
          </select><br />
          <label style={{
            fontStyle: 'bold',
            fontSize: '35px',
            paddingRight: '235px',
            marginBottom: '20px',
          }}>Encargado:</label>
         <select style={{
            fontSize: '30px',
            width: '700px',
            marginBottom: '20px',
          }}>
            <option>Seleccione un encargado</option>
            <option>Enfermera Misael</option>
            <option>Enfermera Diego</option>
          </select>
        </div>


        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '30%',
        }}>
          <Button text={"Guardar Camilla"} style={styles.btnGuardarCamilla} path={"#"} />
        </div>

      </div>

    </div>
  )
}

const styles = {
  btnGuardarCamilla: {
    fontSize: '30px',
    position: 'absolute',
    width: '400px',
    height: '75px',
    borderRadius: '10px',
    backgroundColor: '#3fad5e',
    bottom: '40px',
  }
}
