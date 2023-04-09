import React, { useState, useEffect } from "react";
import SimapiNavbar from "../../componets/navbar/SimapiNavbar";
import Button from "../../componets/buttons/Button";
import { Formik, Form } from "formik";
import SimapiSelect from "../../componets/select/SimapiSelect";
import TextField from "../../componets/inputs/TextField";
import Swal from "sweetalert2";
import { pathContext } from "../../utils/PathContext";

export default function User(props) {
  const { mode } = props;
  let user = {}
  const [nombre, setNombre] = useState(user.nombre ? user.nombre : "");
  const [apellidos, setApellidos] = useState(user.apellidos ? user.apellidos : "");
  const [correo, setCorreo] = useState(user.correo ? user.correo : "");
  const [password, setPassword] = useState(user.password ? user.password : "");
  const [rol, setRol] = useState(user.rol ? user.rol : "");

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
        return response.json()
      })
      .then((datos) => {
        user = datos.data;
        setNombre(user.nombre)
        setApellidos(user.apellidos)
        setCorreo(user.correo)
        setPassword(user.password)
        setRol(user.rol)
        return user;
      })
      .catch((error) => console.log(error));
  }

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
                Swal.fire({
                  title: "Datos",
                  text: `Nombre: ${nombre} Apellidos: ${apellidos} Correo: ${correo} Password: ${password} Rol: ${rol}`,
                });
                localStorage.setItem("idUsuarioEdit", "");
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
                      type="password"
                      style={styles.input}
                      value={mode === "details" ? password ? password : "●●●●●●●●●●" : password ? password : ""}
                      disabled={mode === "details"}
                      onChange={(e) => setPassword(e.target.value)}
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
                      disabled={mode === "details"}
                      selectValue={rol ? rol : ""}
                      placeholder="Selecciona un rol"
                      onChange={(e) => setRol(e.target.value)}
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
                    margin: "5%",
                  }}
                >
                  <Button
                    text={mode === "details" ? "Atrás" : "Guardar Usuario"}
                    style={styles.btnGuardarUsuario}
                    type={mode === "details" ? "button" : "submit"}
                    onClick={mode === "details" ? () => {window.location.href = "/usuarios"} : () => {}}
                  />
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
};
