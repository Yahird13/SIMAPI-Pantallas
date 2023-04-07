import React from 'react'
import SimapiNavbar from '../../componets/navbar/SimapiNavbar'
import Button from '../../componets/buttons/Button';
import SimapiSelect from '../../componets/select/SimapiSelect';
import { Formik } from 'formik';

export default function EditUser() {
  return (
    <div>
      <SimapiNavbar
        navbarItems={[
          { path: "/inicio", text: "Inicio" },
          { path: "/camillas", text: "Camillas" },
          { path: "/usuarios", text: "Usuarios" },
          { path: "/historial", text: "Historial" },
        ]}
      />
      <div
        style={{
          width: "94%",
          margin: "3%",
          marginTop: "12%",
          borderRadius: "15px",
          border: "5px solid black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ padding: "2%", width: "100%" }}>
          <div style={{ paddingLeft: "2%", paddingTop: "1%" }}>
            <label
              style={{
                fontStyle: "bold",
                fontSize: "30px",
              }}
            >
              Edición de usuario
            </label>
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "30px",
              }}
            >
              <div style={{ width: "20%" }}>
                <label
                  style={{
                    fontSize: "25px",
                  }}
                >
                  Nombre:
                </label>
              </div>
              <div style={{ width: "80%" }}>
                <input
                  type="text"
                  style={{
                    fontSize: "20px",
                    width: "100%",
                  }}
                />
              </div>
            </div>
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <div style={{ width: "20%" }}>
                <label
                  style={{
                    fontSize: "25px",
                  }}
                >
                  Apellidos:
                </label>
              </div>
              <div style={{ width: "80%" }}>
                <input
                  type="text"
                  style={{
                    fontSize: "20px",
                    width: "100%",
                  }}
                />
              </div>
            </div>
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <div style={{ width: "20%" }}>
                <label
                  style={{
                    fontSize: "25px",
                  }}
                >
                  Correo:
                </label>
              </div>
              <div style={{ width: "80%" }}>
                <input
                  type="text"
                  style={{
                    fontSize: "20px",
                    width: "100%",
                  }}
                />
              </div>
            </div>
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <div style={{ width: "20%" }}>
                <label
                  style={{
                    fontSize: "25px",
                  }}
                >
                  Contraseña:
                </label>
              </div>
              <div style={{ width: "80%" }}>
                <input
                  type="text"
                  style={{
                    fontSize: "20px",
                    width: "100%",
                  }}
                />
              </div>
            </div>
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <div style={{ width: "20%" }}>
                <label
                  style={{
                    fontSize: "25px",
                  }}
                >
                  Rol:
                </label>
              </div>
              <div style={{ width: "80%" }}>
                <SimapiSelect style={{
                    fontSize: "20px",
                    width: "100%",
                  }} options={[
                    {value: '', label: 'Seleccione un rol'},
                    {value: '1', label: 'Administrador'},
                    {value: '2', label: 'Usuario'},
                  ]}/>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "5%",
            }}
          >
            <Button
              text={"Guardar Usuario"}
              style={styles.btnGuardarUsuario}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  btnGuardarUsuario: {
    fontSize: "30px",
    width: "400px",
    height: "75px",
    backgroundColor: "#3fad5e",
  },
};
