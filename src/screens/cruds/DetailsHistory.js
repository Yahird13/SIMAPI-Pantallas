import React, { useEffect, useState } from "react";
import SimapiNavbar from "../../componets/navbar/SimapiNavbar";
import Button from "../../componets/buttons/Button";
import { isUserAuthenticated } from "../../auth/TokenValidate";
import { isInstitutionAuthenticated } from "../../auth/InstitutionValidate";
import { pathContext } from "../../utils/PathContext";

export default function DetailsHistory() {
  if (!isUserAuthenticated()) {
    if (!isInstitutionAuthenticated()) {
      window.location.replace("/");
    }
  } else if (localStorage.getItem("rol") !== "A") {
    window.location.replace("/");
  }

  const [usuario, setUsuario] = useState("");
  const [camilla, setCamilla] = useState("");

  const historial = JSON.parse(localStorage.getItem("historial"));
  console.log(historial);

  useEffect(() => {
    fetch(`${pathContext}/api/usuarios/${historial.idEnfermera}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((datos) => {
        console.log(datos);
        setUsuario(`${datos.data.nombre} ${datos.data.apellidos}`);
      })
      .catch((error) => console.log(error));

    fetch(`${pathContext}/api/camillas/${historial.idCamilla}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((datos) => {
        setCamilla(datos.data);
      })
      .catch((error) => console.log(error));
  }, []);

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
          <div style={{ width: "100%" }}>
            <label
              style={{
                fontStyle: "bold",
                fontSize: "25px",
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
                <label style={styles.label}>Fecha de peticion:</label>
                <input
                  type="text"
                  style={styles.input}
                  value={historial.fechaPeticion ? historial.fechaPeticion : ""}
                  disabled
                />
              </div>
              <div style={styles.divColumnRight}>
                <label style={styles.label}>Fecha de atencion:</label>
                <input
                  type="text"
                  value={historial.fechaAtencion ? historial.fechaAtencion : ""}
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
                <label style={styles.label}>Hora de peticion:</label>
                <input
                  type="text"
                  value={
                    historial.horaDePeticion ? historial.horaDePeticion : ""
                  }
                  style={styles.input}
                  disabled
                />
              </div>
              <div style={styles.divColumnRight}>
                <label style={styles.label}>Hora de atencion:</label>
                <input
                  type="text"
                  value={
                    historial.horaDeAtencion ? historial.horaDeAtencion : ""
                  }
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
                <label style={styles.label}>Paciente:</label>
                <input
                  type="text"
                  value={
                    localStorage.getItem("paciente")
                      ? localStorage.getItem("paciente")
                      : ""
                  }
                  style={styles.input}
                  disabled
                />
              </div>
              <div style={styles.divColumnRight}>
                <label style={styles.label}>Enfermera:</label>
                <input
                  type="text"
                  value={usuario ? usuario : ""}
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
                <label style={styles.label}>Isla:</label>
                <input
                  type="text"
                  value={camilla.idIsla ? camilla.idIsla : ""}
                  style={styles.input}
                  disabled
                />
              </div>
              <div style={styles.divColumnRight}>
                <label style={styles.label}>Sala:</label>
                <input
                  type="text"
                  value={camilla.idSala ? camilla.idSala : ""}
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
                    fontSize: "20px",
                    width: "20%",
                  }}
                >
                  Camilla:
                </label>
                <input
                  type="text"
                  value={historial.idCamilla ? historial.idCamilla : ""}
                  style={{
                    fontSize: "20px",
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
              onClick={() => window.location.replace("/historial")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  btnGuardarUsuario: {
    fontSize: "20px",
    width: "300px",
    height: "60px",
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
    fontSize: "20px",
    width: "30%",
  },
  input: {
    fontSize: "20px",
    width: "60%",
    marginLeft: "5%",
    marginRight: "5%",
  },
};
