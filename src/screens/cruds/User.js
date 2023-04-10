import React, { useState, useEffect } from "react";
import SimapiNavbar from "../../componets/navbar/SimapiNavbar";
import Button from "../../componets/buttons/Button";
import { Formik, Form } from "formik";
import SimapiSelect from "../../componets/select/SimapiSelect";
import TextField from "../../componets/inputs/TextField";
import Swal from "sweetalert2";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { pathContext } from "../../utils/PathContext";

export default function User(props) {
  const { mode } = props;
  let user = {};
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("");
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
      fetch(
        `${pathContext}/api/usuarios/${localStorage.getItem("idUsuarioEdit")}`,
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
          user = datos.data;
          setNombre(user.nombre);
          setApellidos(user.apellidos);
          setCorreo(user.correo);
          setPassword(user.password);
          setRol(user.rol);
        })
        .catch((error) => console.log(error));
    }
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
          <div
            style={{ paddingLeft: "2%", paddingTop: "1%", paddingRight: "2%" }}
          >
            <label
              style={{
                fontStyle: "bold",
                fontSize: "30px",
              }}
            >
              {mode === "edit"
                ? "Edición"
                : mode === "details"
                ? "Detalles"
                : "Creación"}{" "}
              de usuario
            </label>
            <br />
            <Formik
              initialValues={{
                nombre: nombre,
                apellidos: apellidos,
                correo: correo,
                password: password,
                rol: rol,
              }}
              onSubmit={() => {
                if (mode === "edit") {
                  fetch(
                    `${pathContext}/api/usuarios/${localStorage.getItem(
                      "idUsuarioEdit"
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
                        apellidos: apellidos,
                        correo: correo,
                        password: password,
                        rol: rol,
                        idInstitucion: localStorage.getItem("idInstitucion"),
                      }),
                    }
                  )
                    .then((response) => {
                      if (!response.ok) {
                        throw new Error("Error al editar usuario");
                      }
                      return response.json();
                    })
                    .then((datos) => {
                      console.log(datos);
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
                        localStorage.removeItem("idUsuarioEdit");
                        window.location.replace("/usuarios");
                      });
                    })
                    .catch((error) => {
                      Swal.fire({
                        title: "Error",
                        text: error.message,
                        icon: "error",
                      });
                    });
                } else {
                  fetch(`${pathContext}/api/usuarios`, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                    body: JSON.stringify({
                      nombre: nombre,
                      apellidos: apellidos,
                      correo: correo,
                      password: password,
                      rol: rol,
                      idInstitucion: localStorage.getItem("idInstitucion"),
                    }),
                  })
                    .then((response) => {
                      if (!response.ok) {
                        throw new Error("Error al crear usuario");
                      }
                      return response.json();
                    })
                    .then((datos) => {
                      console.log(datos);
                      if (datos.error) {
                        throw new Error(datos.message);
                      } else {
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
                          window.location.replace("/usuarios");
                        });
                      }
                    })
                    .catch((error) => {
                      Swal.fire({
                        title: "Error",
                        text: error.message,
                        icon: "error",
                      });
                      console.log(error);
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
                        fontSize: "25px",
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
                        fontSize: "25px",
                      }}
                    >
                      Apellidos:
                    </label>
                  </div>
                  <div style={{ width: "80%" }}>
                    <TextField
                      type="text"
                      style={styles.input}
                      value={apellidos ? apellidos : ""}
                      disabled={mode === "details"}
                      onChange={(e) => setApellidos(e.target.value)}
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
                        fontSize: "25px",
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
                        fontSize: "25px",
                      }}
                    >
                      Rol:
                    </label>
                  </div>
                  <div style={{ width: "80%" }}>
                    <SimapiSelect
                      style={{
                        ...styles.input,
                        paddingTop: 0,
                        paddingBottom: 0,
                      }}
                      disabled={mode === "details" || mode === "edit"}
                      selectValue={rol ? rol : ""}
                      placeholder="Selecciona un rol"
                      onChange={(e) => setRol(e)}
                      options={[
                        { value: "A", label: "Administrador" },
                        { value: "E", label: "Enfermero/a" },
                      ]}
                    />
                  </div>
                </div>
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
                      localStorage.removeItem("idUsuarioEdit");
                      window.location.replace("/usuarios");
                    }}
                  />
                  {mode !== "details" ? (
                    <Button
                      text={"Guardar Usuario"}
                      style={styles.btnGuardarUsuario}
                      type={"submit"}
                      onClick={
                        mode === "details"
                          ? () => {
                              window.location.replace("/usuarios");
                            }
                          : () => {}
                      }
                    />
                  ) : null}
                </div>
              </Form>
            </Formik>
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
  input: {
    fontSize: "20px",
    width: "100%",
    outline: "none",
    border: "2px solid",
    padding: "10px",
    height: "55px",
  },
  btnAtras: {
    fontSize: "30px",
    width: "400px",
    height: "75px",
    backgroundColor: "#a9a9a9",
  },
};
