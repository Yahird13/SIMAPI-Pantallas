import React, { useState, useEffect } from "react";
import SimapiNavbar from "../../componets/navbar/SimapiNavbar";
import Button from "../../componets/buttons/Button";
import { Formik, Form } from "formik";
import SimapiSelect from "../../componets/select/SimapiSelect";
import TextField from "../../componets/inputs/TextField";
import Swal from "sweetalert2";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { pathContext } from "../../utils/PathContext";
import { isUserAuthenticated } from "../../auth/TokenValidate";
import Loader from "../../componets/loader/Loader";
import { isInstitutionAuthenticated } from "../../auth/InstitutionValidate";

export default function Institucion(props) {
  const { mode } = props;
  let institucion = {};

  if (!isUserAuthenticated()) {
    if (!isInstitutionAuthenticated()) {
      window.location.replace("/");
    } else {
      window.location.replace("/inicio");
    }
  } else if(localStorage.getItem("rol") !== "SA"){
    window.location.replace("/inicio");
  }

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [cantidadCamillas, setCantidadCamillas] = useState(0);
  const [cantidadDeSalas, setCantidadDeSalas] = useState(0);
  const [cantidadDeIslas, setCantidadDeIslas] = useState(0);
  const [idInstitucion, setIdInstitucion] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  let iconShowPass = faEye;
  let iconHidePass = faEyeSlash;

  const [showPass, setShowPass] = useState(false);
  const [rightIcon, setRightIcon] = useState(iconShowPass);

  const handleClick = () => {
    setShowPass(!showPass);
    if (showPass) {
      setRightIcon(iconShowPass);
    } else {
      setRightIcon(iconHidePass);
    }
  };

  useEffect(() => {

    if (mode === "edit" || mode === "details") {
      setIsLoading(true);
      fetch(
        `${pathContext}/api/institucion/${localStorage.getItem(
          "idInstitucionEdit"
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
          return response.json();
        })
        .then((datos) => {
          institucion = datos.data;
          setNombre(institucion.nombre);
          setCorreo(institucion.correo);
          setCantidadCamillas(institucion.cantidadCamillas);
          setCantidadDeSalas(institucion.cantidadDeSalas);
          setCantidadDeIslas(institucion.cantidadDeIslas);
          setIdInstitucion(institucion.idInstitucion);
        })
        .catch((error) => console.log(error))
        .finally(() => setIsLoading(false));
    }
  }, []);

  return (
    <div>
      <SimapiNavbar />
      {isLoading ? (<Loader/>):(
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
            style={{ paddingLeft: "2%", paddingTop: "1%", paddingRight: "2%" }}
          >
            <label
              style={{
                fontStyle: "bold",
                fontSize: "25px",
              }}
            >
              {mode === "edit"
                ? "Edición"
                : mode === "details"
                ? "Detalles"
                : "Creación"}{" "}
              de institución
            </label>
            <br />
            <Formik
              initialValues={{
                nombre: nombre,
                correo: correo,
                password: password,
                cantidadCamillas: cantidadCamillas,
                cantidadDeSalas: cantidadDeSalas,
                cantidadDeIslas: cantidadDeIslas,
              }}
              onSubmit={() => {
                if (cantidadDeSalas > 0 && cantidadDeIslas > 0) {
                  if (cantidadDeSalas >= cantidadDeIslas) {
                    setCantidadCamillas(cantidadDeSalas * 10);
                    if (mode === "edit") {
                      fetch(
                        `${pathContext}/api/institucion/${localStorage.getItem(
                          "idInstitucionEdit"
                        )}`,
                        {
                          method: "PUT",
                          headers: {
                            "Content-Type": "application/json",
                            Authorization:
                              "Bearer " + localStorage.getItem("token"),
                          },
                          body: JSON.stringify({
                            nombre: nombre,
                            correo: correo,
                            password: password ? password : null,
                            cantidadCamillas: cantidadCamillas,
                            cantidadDeSalas: cantidadDeSalas,
                            cantidadDeIslas: cantidadDeIslas,
                          }),
                        }
                      )
                        .then((response) => {
                          if (!response.ok) {
                            throw new Error("Error al editar institución");
                          }
                          return response.json();
                        })
                        .then((datos) => {
                          if (datos.error || datos.message == null) {
                            throw new Error(datos.message);
                          }
                          Swal.fire({
                            title: "Éxito",
                            text: datos.message,
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
                            localStorage.removeItem("idInstitucionEdit");
                            window.location.replace("/instituciones");
                          });
                        })
                        .catch((error) => {
                          Swal.fire({
                            title: "Error al editar la institución",
                            text: error.message,
                            icon: "error",
                          });
                        });
                    } else {
                      setIsLoading(true);
                      localStorage.getItem("idInstitucionEdit");
                      fetch(`${pathContext}/api/institucion`, {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                          Authorization:
                            "Bearer " + localStorage.getItem("token"),
                        },
                        body: JSON.stringify({
                          nombre: nombre,
                          correo: correo,
                          password: password,
                          cantidadDeSalas: cantidadDeSalas,
                          cantidadDeIslas: cantidadDeIslas,
                        }),
                      })
                        .then((response) => {
                          if (!response.ok) {
                            throw new Error("Error al crear institución");
                          }
                          return response.json();
                        })
                        .then((datos) => {
                          console.log(datos);
                          if (datos.error) {
                            throw new Error(datos.message);
                          } else {
                            const idInstitucion1 = datos.data.idInstitucion
                            fetch(
                              `${pathContext}/api/camillas/map/sala/${cantidadDeSalas}/isla/${cantidadDeIslas}/institucion/${datos.data.idInstitucion}`,
                              {
                                method: "POST",
                                headers: {
                                  "Content-Type": "application/json",
                                  Authorization:
                                    "Bearer " + localStorage.getItem("token"),
                                },
                              }
                            )
                              .then((response) => {
                                if (!response.ok) {
                                  throw new Error("Error al crear camillas");
                                }
                                return response.json();
                              })
                              .then((datos) => {
                                console.log(datos);
                                if (datos.error) {
                                  throw new Error(datos.message);
                                }
                                Swal.fire({
                                  title: "Éxito",
                                  text: "Institución creada con éxito",
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
                                  localStorage.setItem(
                                    "idInstitucion",
                                    idInstitucion1
                                  );
                                  setIsLoading(false)
                                  window.location.replace("/agregarUsuario");
                                });
                              })
                              .catch((error) => {
                                Swal.fire({
                                  title: "Error",
                                  text: error.message,
                                  icon: "error",
                                });
                                setIsLoading(false)
                              });
                          }
                        })
                        .catch((error) => {
                          Swal.fire({
                            title: "Error",
                            text: error,
                            icon: "error",
                          });
                          console.log(error);
                        })
                    }
                  } else {
                    Swal.fire({
                      title: "Error",
                      text: "La cantidad de salas debe ser mayor a la cantidad de islas",
                      icon: "error",
                    });
                  }
                } else {
                  Swal.fire({
                    title: "Error",
                    text: "Las cantidades de salas e islas deben ser mayores a 0",
                    icon: "error",
                  });
                }
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
                      Nombre:
                    </label>
                  </div>
                  <div style={{ width: "80%" }}>
                    <TextField
                      type="text"
                      style={styles.input}
                      value={nombre ? nombre : ""}
                      disabled={mode === "details"}
                      onChange={(e) => setNombre(e.target.value)}
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
                      Correo:
                    </label>
                  </div>
                  <div style={{ width: "80%" }}>
                    <TextField
                      type="email"
                      style={styles.input}
                      value={correo ? correo : ""}
                      disabled={mode === "details"}
                      onChange={(e) => setCorreo(e.target.value)}
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
                      Contraseña:
                    </label>
                  </div>
                  <div style={{ width: "80%" }}>
                    <TextField
                      type={showPass ? "text" : "password"}
                      backgroundStyle={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                      }}
                      required={mode === "edit" ? false : true}
                      style={{ ...styles.input }}
                      value={
                        mode === "details"
                          ? password
                            ? password
                            : "●●●●●●●●●●"
                          : password
                          ? password
                          : ""
                      }
                      disabled={mode === "details"}
                      onChange={(e) => setPassword(e.target.value)}
                      rightIcon={showPass ? rightIcon : rightIcon}
                      rightIconStyle={{
                        height: 70,
                        width: 70,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: mode === "details" ? "gray" : "black",
                      }}
                      rightIconSize={"2xl"}
                      onClick={mode !== "details" ? handleClick : null}
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
                      Cantidad de salas:
                    </label>
                  </div>
                  <div style={{ width: "80%" }}>
                    <TextField
                      type="number"
                      style={styles.input}
                      value={cantidadDeSalas ? cantidadDeSalas : ""}
                      disabled={mode === "details"}
                      onChange={(e) => setCantidadDeSalas(e.target.value)}
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
                      Cantidad de islas:
                    </label>
                  </div>
                  <div style={{ width: "80%" }}>
                    <TextField
                      type="number"
                      style={styles.input}
                      value={cantidadDeIslas ? cantidadDeIslas : ""}
                      disabled={mode === "details"}
                      onChange={(e) => setCantidadDeIslas(e.target.value)}
                    />
                  </div>
                </div>
                <br />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "right",
                    alignItems: "right",
                    marginTop: "20px",
                  }}
                >
                  {mode === "edit" ? (
                    <Button
                      text={"Agregar Administrador"}
                      style={styles.btnAgregarAdmin}
                      type={"button"}
                      onClick={() => {
                        localStorage.setItem(
                          "idInstitucion",
                          idInstitucion ? idInstitucion : ""
                        );
                        window.location.replace("/agregarUsuario");
                      }}
                    />
                  ) : null}
                </div>
                <br />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    justifyContent:
                      mode === "details" ? "center" : "space-between",
                    margin: "5%",
                  }}
                >
                  <Button
                    text={"Atrás"}
                    style={styles.btnAtras}
                    type={"button"}
                    onClick={() => {
                      localStorage.removeItem("idInstitucionEdit");
                      window.location.replace("/instituciones");
                    }}
                  />

                  {mode !== 'details' ?
                    <Button
                    text={
                      mode === "edit"
                        ? "Guardar cambios"
                        : "Agregar Administrador"
                    }
                    style={styles.btnGuardarInstitucion}
                    type={"submit"}
                  />:null}
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>)}
    </div>
  );
}

const styles = {
  btnGuardarInstitucion: {
    fontSize: "20px",
    width: "300px",
    height: "60px",
    backgroundColor: "#3fad5e",
  },
  btnAgregarAdmin: {
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
  btnAtras: {
    fontSize: "20px",
    width: "300px",
    height: "60px",
    backgroundColor: "#a9a9a9",
  },
};
