import React, { useState } from "react";
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

  if (mode === "edit" || mode === "details") {
    fetch(`${pathContext}/usuarios/${localStorage.getItem("idUsuario")}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        },
    })
    .then((response) => response.json())
    .then((data) => {
      user = data.data;
      console.log(user);
    })
  }
  const [nombre, setNombre] = useState(user.nombre ? user.nombre : "");
  const [apellidos, setApellidos] = useState(user.apellidos ? user.apellidos : "");
  const [correo, setCorreo] = useState(user.correo ? user.correo : "");
  const [password, setPassword] = useState(user.password ? user.password : "");
  const [rol, setRol] = useState(user.rol ? user.rol : "");

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
              {mode === 'edit' ? 'Edición': mode === 'details' ? 'Detalles' : 'Creación'} de usuario
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
                localStorage.setItem("idUsuario", "");
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
                      defaultValue={nombre}
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
                      defaultValue={apellidos}
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
                      defaultValue={correo}
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
                      type="text"
                      style={styles.input}
                      defaultValue={password}
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
                      selectValue={rol}
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
                    text={"Guardar Usuario"}
                    style={styles.btnGuardarUsuario}
                    type={"submit"}
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
    border: "2px solid black",
    padding: "10px",
    height: "55px",
  },
};
