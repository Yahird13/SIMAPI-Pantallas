import React from "react";
import SimapiNavbar from "../../componets/navbar/SimapiNavbar";
import Button from "../../componets/buttons/Button";

export default function DetailsHistory() {
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
          <div style={{ width: "100%" }}>
            <label
              style={{
                fontStyle: "bold",
                fontSize: "30px",
              }}
            >
              Detalles de atención
            </label>
            <br />
          </div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                marginTop: 50,
              }}
            >
              <div style={styles.divColumnLeft}>
                <label
                  style={styles.label}
                >
                  Fecha de peticion:
                </label>
                <input
                  type="text"
                  style={styles.input}
                  disabled
                />
              </div>
              <div
                style={styles.divColumnRight}
              >
                <label
                  style={styles.label}
                >
                  Fecha de atencion:
                </label>
                <input
                  type="text"
                  style={styles.input}
                  disabled
                />
              </div>
            </div>
            <br />

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                marginTop: 30,
              }}
            >
              <div style={styles.divColumnLeft}>
                <label
                  style={styles.label}
                >
                  Hora de peticion:
                </label>
                <input
                  type="text"
                  style={styles.input}
                  disabled
                />
              </div>
              <div
                style={styles.divColumnRight}
              >
                <label
                  style={styles.label}
                >
                  Hora de atencion:
                </label>
                <input
                  type="text"
                  style={styles.input}
                  disabled
                />
              </div>
            </div>
            <br />

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                marginTop: 30,
              }}
            >
              <div style={styles.divColumnLeft}>
                <label
                  style={styles.label}
                >
                  Paciente:
                </label>
                <input
                  type="text"
                  style={styles.input}
                  disabled
                />
              </div>
              <div
                style={styles.divColumnRight}
              >
                <label
                  style={styles.label}
                >
                  Enfermera:
                </label>
                <input
                  type="text"
                  style={styles.input}
                  disabled
                />
              </div>
            </div>
            <br />

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                marginTop: 30,
              }}
            >
              <div style={styles.divColumnLeft}>
                <label
                  style={styles.label}
                >
                  Isla:
                </label>
                <input
                  type="text"
                  style={styles.input}
                  disabled
                />
              </div>
              <div
                style={styles.divColumnRight}
              >
                <label
                  style={styles.label}
                >
                  Sala:
                </label>
                <input
                  type="text"
                  style={styles.input}
                  disabled
                />
              </div>
            </div>
            <br />

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                marginTop: 30,
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <label
                  style={{
                    fontSize: "25px",
                    width: "20%",
                  }}
                >
                  Camilla:
                </label>
                <input
                  type="text"
                  style={{
                    fontSize: "25px",
                    width: "100%",
                    marginLeft: "1.5%",
                    marginRight: "2.5%",
                  }}
                  disabled
                />
              </div>
            </div>
            <br />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              margin: "5%",
              marginLeft: 0,
            }}
          >
            <Button
              text={"Regresar"}
              style={styles.btnGuardarUsuario}
              onClick={() => window.location.href = "/historial"}
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
    borderRadius: "10px",
    backgroundColor: "#3fad5e",
  },
  divColumnLeft: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  divColumnRight: {
    width: "50%",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
  },
  label: {
    fontSize: "25px",
    width: "30%",
  },
  input: {
    fontSize: "25px",
    width: "60%",
    marginLeft: "5%",
    marginRight: "5%",
  }
};
