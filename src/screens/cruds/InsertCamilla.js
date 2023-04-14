import React from 'react'
import SimapiNavbar from '../../componets/navbar/SimapiNavbar'
import Button from '../../componets/buttons/Button';
import SimapiSelect from '../../componets/select/SimapiSelect';

export default function InsertCamilla() {
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
          marginTop: "10%",
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
                fontSize: "25px",
              }}
            >
              Creación de nueva Camilla
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
                    fontSize: "20px",
                  }}
                >
                  Expediente:
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
                    fontSize: "20px",
                  }}
                >
                  Paciente:
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
                    fontSize: "20px",
                  }}
                >
                  Isla:
                </label>
              </div>
              <div style={{ width: "80%" }}>
                <SimapiSelect style={{
                    fontSize: "20px",
                    width: "100%",
                  }} options={[
                    {value: '', label: 'Seleccione una isla'},
                    {value: 'id', label: 'Isla1'},
                    {value: 'id', label: 'Isla2'},
                    {value: 'id', label: 'Isla3'},
                  ]}/>
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
                    fontSize: "20px",
                  }}
                >
                  Sala:
                </label>
              </div>
              <div style={{ width: "80%" }}>
                <SimapiSelect style={{
                    fontSize: "20px",
                    width: "100%",
                  }} options={[
                    {value: '', label: 'Seleccione una sala'},
                    {value: 'id', label: 'Sala1'},
                    {value: 'id', label: 'Sala2'},
                    {value: 'id', label: 'Sala3'},
                  ]}/>
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
                    fontSize: "20px",
                  }}
                >
                  Encargado:
                </label>
              </div>
              <div style={{ width: "80%" }}>
                <SimapiSelect style={{
                    fontSize: "20px",
                    width: "100%",
                  }} options={[
                    {value: '', label: 'Seleccione una/un enfermera/o'},
                    {value: 'id', label: 'Enfermera/o1'},
                    {value: 'id', label: 'Enfermera/o2'},
                    {value: 'id', label: 'Enfermera/o3'},
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
              text={"Guardar Camilla"}
              style={styles.btnGuardarCamilla}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  btnGuardarCamilla: {
    fontSize: "20px",
    width: "300px",
    height: "60px",
    backgroundColor: "#3fad5e",
  },
};
