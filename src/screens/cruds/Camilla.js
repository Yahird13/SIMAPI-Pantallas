import React, { useState, useEffect } from "react";
import SimapiNavbar from "../../componets/navbar/SimapiNavbar";
import Button from "../../componets/buttons/Button";
import { Formik, Form } from "formik";
import SimapiSelect from "../../componets/select/SimapiSelect";
import TextField from "../../componets/inputs/TextField";
import Swal from "sweetalert2";
import { pathContext } from "../../utils/PathContext";
import { isUserAuthenticated } from "../../auth/TokenValidate";
import { isInstitutionAuthenticated } from "../../auth/InstitutionValidate";
import MultiSelect from "../../componets/select/MultiSelect";
import Loader from "../../componets/loader/Loader";

export default function Camilla(props) {
  //useEffect(() => {
    if (!isUserAuthenticated()) {
      if (!isInstitutionAuthenticated()) {
        window.location.replace("/");
      } else {
        window.location.replace("/inicio");
      }
    } else if (localStorage.getItem("rol") !== "A") {
      if (localStorage.getItem("rol") === "SA") {
        window.location.replace("/administradores");
      } else {
        window.location.replace("/inicio");
      }
    }
  //}, []);

  const { mode } = props;
  const [expediente, setExpediente] = useState("");
  const [paciente, setPaciente] = useState("");
  const [isla, setIsla] = useState(0);
  const [sala, setSala] = useState(0);
  const [estado, setEstado] = useState(false);
  const [idBoton, setIdBoton] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  let camilla = {};
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `${pathContext}/api/camillas/${localStorage.getItem("idCamillaEdit")}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        camilla = data.data;

        fetch(
          `${pathContext}/api/usuarios/institucion/${localStorage.getItem(
            "idInstitucion"
          )}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
          .then((data) => {
            let enfermeras = [];
            data.data.forEach((element) => {
              if (element.rol === "E") {
                enfermeras.push({
                  value: element.idUsuario,
                  label: `${element.nombre} ${element.apellidos}`,
                });
              }
            });
          })
          .catch((error) => Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: error.message,
                      }));

        setExpediente(camilla.numeroExpediente);
        setPaciente(camilla.nombre);
        setIsla(camilla.idIsla);
        setSala(camilla.idSala);
        setEstado(camilla.estado);
        setIdBoton(camilla.idBoton);
      })
      .catch((error) => Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: error.message,
                      }))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <SimapiNavbar />
      {isLoading ? (
        <Loader />
      ) : (
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
            <div
              style={{
                paddingLeft: "2%",
                paddingTop: "1%",
                paddingRight: "2%",
              }}
            >
              <label
                style={{
                  fontStyle: "bold",
                  fontSize: "25px",
                }}
              >
                Edición de camilla
              </label>
              <br />
              <Formik
                initialValues={{
                  expediente: expediente,
                  paciente: paciente,
                  isla: isla,
                  sala: sala,
                  estado: estado,
                }}
                onSubmit={() => {

                  const camillaUpdateActiva = JSON.stringify({
                    numeroExpediente: expediente,
                    nombre: paciente,
                    idInstitucion: localStorage.getItem("idInstitucion"),
                    idIsla: isla,
                    idSala: sala,
                    idEnfermera: [
                      {
                        matutino: JSON.parse(
                          localStorage.getItem("enfermerasmatutino")
                        ),
                        vespertino: JSON.parse(
                          localStorage.getItem("enfermerasvespertino")
                        ),
                        nocturno: JSON.parse(
                          localStorage.getItem("enfermerasnocturno")
                        ),
                      },
                    ],
                    estado:true,
                    idBoton: idBoton
                  })

                  const camillaUpdateInactiva = JSON.stringify({
                    numeroExpediente: "",
                    nombre: "",
                    idInstitucion: localStorage.getItem("idInstitucion"),
                    idIsla: isla,
                    idSala: sala,
                    idEnfermera: [
                      {
                        matutino: [""],
                        vespertino: [""],
                        nocturno: [""],
                      },
                    ],
                    estado:false,
                    idBoton: idBoton
                  })

                  const camillaUpdate = expediente && paciente ? camillaUpdateActiva : camillaUpdateInactiva;

                  fetch(
                    `${pathContext}/api/camillas/${localStorage.getItem(
                      "idCamillaEdit"
                    )}`,
                    {
                      method: "PUT",
                      headers: {
                        "Content-Type": "application/json",
                        Authorization:
                          "Bearer " + localStorage.getItem("token"),
                      },
                      body: camillaUpdate,
                    }
                  )
                    .then((response) => {
                      return response.json();
                    })
                    .then((data) => {
                      Swal.fire({
                        title: "Éxito",
                          text: data.message,
                          icon: "success",
                          showConfirmButton: false,
                          showCloseButton: true,
                          timer: 2000,
                          timerProgressBar: true,
                          allowOutsideClick: false,
                          allowEscapeKey: false,
                          allowEnterKey: false,
                          stopKeydownPropagation: false,
                      }).then(() => {
                        window.location.replace("/camillas");
                      });
                    })
                    .catch((error) => Swal.fire({
                      icon: "error",
                      title: "Oops...",
                      text: error.message,
                    }));
                }}
              >
                <Form>
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
                        No. Expediente:
                      </label>
                    </div>
                    <div style={{ width: "80%" }}>
                      <TextField
                        type="text"
                        style={styles.input}
                        value={expediente ? expediente : ""}
                        required={paciente || expediente ? true : false}
                        onChange={(e) => setExpediente(e.target.value)}
                      />
                    </div>
                  </div>
                  <br />
                  <div style={styles.divRow}>
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
                      <TextField
                        type="text"
                        style={styles.input}
                        value={paciente ? paciente : ""}
                        required={paciente || expediente ? true : false}
                        onChange={(e) => setPaciente(e.target.value)}
                      />
                    </div>
                  </div>
                  <br />
                  <div style={styles.divRow}>
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
                      <SimapiSelect
                        style={{
                          ...styles.input,
                          paddingTop: 0,
                          paddingBottom: 0,
                        }}
                        selectValue={isla ? isla : "1"}
                        disabled={true}
                        placeholder="Selecciona una isla"
                        onChange={(e) => setIsla(e.target.value)}
                        options={[{ value: "1", label: `Isla ${isla}` }]}
                      />
                    </div>
                  </div>
                  <br />
                  <div style={styles.divRow}>
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
                      <SimapiSelect
                        style={{
                          ...styles.input,
                          paddingTop: 0,
                          paddingBottom: 0,
                        }}
                        selectValue={sala ? sala : "1"}
                        placeholder="Selecciona una sala"
                        disabled={true}
                        onChange={(e) => setSala(e.target.value)}
                        options={[{ value: "1", label: `Sala ${sala}` }]}
                      />
                    </div>
                  </div>
                  <br />
                  <div style={styles.divRow}>
                    <div style={{ width: "20%" }}>
                      <label
                        style={{
                          fontSize: "20px",
                        }}
                      >
                        Boton:
                      </label>
                    </div>
                    <div style={{ width: "80%" }}>
                      <SimapiSelect
                        style={{
                          ...styles.input,
                          paddingTop: 0,
                          paddingBottom: 0,
                        }}
                        selectValue={idBoton ? idBoton : "1"}
                        placeholder="Selecciona un botón"
                        disabled={true}
                        onChange={(e) => setSala(e.target.value)}
                        options={[{ value: "", label: `Botón ${idBoton}` }]}
                      />
                    </div>
                  </div>
                  <br />
                  <div style={styles.divRow}>
                    <div style={{ width: "20%" }}>
                      <label
                        style={{
                          fontSize: "20px",
                        }}
                      >
                        Enfermera/o:
                      </label>
                    </div>
                    <div
                      style={{
                        width: "80%",
                        display: "flex",
                        justifyContent: "left",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "33%",
                        }}
                      >
                        <label
                          style={{
                            fontSize: "20px",
                          }}
                        >
                          Turno matutino:
                        </label>
                        <MultiSelect
                          style={{
                            ...styles.input,
                            paddingTop: 0,
                            paddingBottom: 0,
                          }}
                          horario={"matutino"}
                        />
                      </div>
                      <div
                        style={{
                          width: "33%",
                        }}
                      >
                        <label
                          style={{
                            fontSize: "20px",
                          }}
                        >
                          Turno vespertino:
                        </label>
                        <MultiSelect
                          style={{
                            ...styles.input,
                            paddingTop: 0,
                            paddingBottom: 0,
                            marginLeft: "10px",
                          }}
                          horario={"vespertino"}
                        />
                      </div>
                      <div
                        style={{
                          width: "33%",
                        }}
                      >
                        <label
                          style={{
                            fontSize: "20px",
                          }}
                        >
                          Turno nocturno:
                        </label>
                        <MultiSelect
                          style={{
                            ...styles.input,
                            paddingTop: 0,
                            paddingBottom: 0,
                            marginLeft: "10px",
                          }}
                          horario={"nocturno"}
                        />
                      </div>
                    </div>
                  </div>
                  {/* <br />
                <div style={styles.divRow}>
                  <div style={{ width: "20%" }}>
                    <label
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      Estado:
                    </label>
                  </div>
                  <div style={{ width: "80%" }}>
                    <SimapiSelect
                      style={{
                        ...styles.input,
                        paddingTop: 0,
                        paddingBottom: 0,
                      }}
                      selectValue={estado ? estado : ""}
                      placeholder="Selecciona un estado"
                      onChange={(value) => setEstado(value)}
                      options={[
                        { value: true, label: "Activa" },
                        { value: false, label: "Inactiva" },
                      ]}
                    />
                  </div>
                </div> */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      justifyContent: "space-between",
                      margin: "5%",
                    }}
                  >
                    <Button
                      text={"Atrás"}
                      style={styles.btnAtras}
                      type={"button"}
                      onClick={() => {
                        localStorage.removeItem("idCamillaEdit");
                        window.location.replace("/camillas");
                      }}
                    />

                    <Button
                      text={mode === "details" ? "Atrás" : "Guardar Usuario"}
                      style={styles.btnGuardarCamilla}
                      type={mode === "details" ? "button" : "submit"}
                      onClick={
                        mode === "details"
                          ? () => {
                              window.location.replace("/usuarios");
                            }
                          : () => {}
                      }
                    />
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      )}
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
  input: {
    fontSize: "20px",
    width: "100%",
    outline: "none",
    border: "2px solid",
    padding: "10px",
    height: "55px",
  },
  divRow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  },
  btnAtras: {
    fontSize: "30px",
    width: "300px",
    height: "60px",
    //color gris
    backgroundColor: "#a9a9a9",
  },
};
