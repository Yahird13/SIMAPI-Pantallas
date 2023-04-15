import React, { useState, useEffect } from "react";
import Button from "../componets/buttons/Button";
//import { C_PRIMARIO, C_TERCIARIO } from '../componets/colors';
import EmailField from "../componets/inputs/EmailField";
import PasswordField from "../componets/inputs/PasswordField";
import { faEnvelope,faEye,faEyeSlash, } from "@fortawesome/free-regular-svg-icons";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import IconContainer from "../componets/containers/IconContainer";
import { Form, Formik } from "formik";
import Swal from "sweetalert2";
import { pathContext } from "../utils/PathContext";
import { isInstitutionAuthenticated } from "../auth/InstitutionValidate";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Swal = require("sweetalert2");

  if (isInstitutionAuthenticated()) {
    window.location.replace("/inicio");
  } else if (localStorage.getItem("rol") === "SA") {
    window.location.replace("/administradores");
  }

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "1%",
      }}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={() => {
          if (email === "" || password === "") {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Campos obligatorios",
            });
          } else {
            fetch(`${pathContext}/api/auth/institucion`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                correo: email,
                password: password,
              }),
            })
              .then((response) => {
                return response.json();
              })
              .then((datos) => {
                if (!datos.error) {
                  const estado = datos.data.estado;
                  const idInstitucion = datos.data.idInstitucion;
                  const logo = datos.data.logo;
                  const nombreEmpresa = datos.data.nombre;
                  const idColores = datos.data.color.idColores;
                  const colorPrimario = datos.data.color.colorPrimario;
                  const colorSecundario = datos.data.color.colorSecundario;
                  const colorTerciario = datos.data.color.colorTerciario;
                  const password = datos.data.password;
                  if (!datos.error) {
                    fetch(
                      `${pathContext}/api/auth/institucion/${datos.data.idInstitucion}`,
                      {
                        method: "GET",
                        headers: {
                          "Content-Type": "application/json",
                        },
                      }
                    )
                      .then((response) => {
                        if (!response.ok) {
                          throw new Error(response.statusText);
                        } else {
                          return response.json();
                        }
                      })
                      .then((datos) => {
                        let contadorAdmin = 0;
                        datos.data.forEach((element) => {
                          if (element.rol === "A") {
                            contadorAdmin++;
                          }
                        });

                        if (contadorAdmin !== 0) {
                          localStorage.setItem("estado", estado);
                          localStorage.setItem("idInstitucion", idInstitucion);
                          localStorage.setItem("logo", logo);
                          localStorage.setItem("nombreEmpresa", nombreEmpresa);
                        //localStorage.setItem("cantidadCamillas",cantidadCamillas);
                        //localStorage.setItem("cantidadDeSalas",cantidadDeSalas);
                        //localStorage.setItem("cantidadDeIslas",cantidadDeIslas);
                          localStorage.setItem("idColores", idColores);
                          localStorage.setItem("colorPrimario", colorPrimario);
                          localStorage.setItem("colorSecundario",colorSecundario);
                          localStorage.setItem("colorTerciario",colorTerciario);
                          localStorage.setItem("password", password);
                          localStorage.setItem("navbarItems", JSON.stringify([
                            { path: "/inicio", text: "Inicio" },]));
                          console.log({navbarItems: localStorage.getItem("navbarItems")});
                          window.location.replace("/inicio");
                        } else {
                          Swal.fire({
                            icon: "error",
                            title: "Sin administrador",
                            text: "No existe ningún administrador registrado en su institución. Comuníquese con el administrador del sistema.",
                          });
                        }
                      })
                      .catch((error) => console.log(error));
                  } else {
                    throw new Error(datos.message);
                  }
                } else {
                  throw new Error(datos.message);
                }
              })
              .catch((error) => {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: error.message,
                });
              });
          }
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Form>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "-100px",
              }}
            >
              <IconContainer
                icon={faUser}
                size={"8x"}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #00264D",
                  borderRadius: "50%",
                  width: 200,
                  height: 200,
                  backgroundColor: "#00264D",
                }}
              />
            </div>

            <div
              style={{
                borderRadius: "15px",
                backgroundColor: "#A3B2CF",
                width: "675px",
                height: "425px",
              }}
            >
              <div style={{ paddingTop: "130px", textAlign: "center" }}>
                <h1
                  style={{
                    fontWeight: "bold",
                    fontSize: "30px",
                  }}
                >
                  Bienvenido a SIMAPI
                </h1>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    marginTop: "20px",
                    justifyContent: "center",
                  }}
                >
                  <EmailField
                    icon={faEnvelope}
                    id={"email"}
                    value={email}
                    backgroundColor={"#385273"}
                    leftIconBackgroundColor={"#00264D"}
                    rightIconBackgroundColor={"#00264D"}
                    onChange={(e) => {
                      setEmail(
                        e.target.value
                      ); /* console.log(e.target.value) */
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "40px",
                    paddingBottom: "40px",
                  }}
                >
                  <PasswordField
                    icon={faLock}
                    passIcons={[faEye, faEyeSlash]}
                    value={password}
                    id={"password"}
                    backgroundColor={"#385273"}
                    leftIconBackgroundColor={"#00264D"}
                    rightIconBackgroundColor={"#00264D"}
                    onChange={(e) => {
                      setPassword(
                        e.target.value
                      ); /* console.log(e.target.value) */
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "40px",
                flexDirection: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                text={"Iniciar Sesión"}
                style={styles.btnIniciarSesion}
                type={"submit"}
              />
            </div>
          </Form>
        </div>
      </Formik>
    </div>
  );
};

const styles = {
  btnIniciarSesion: {
    backgroundColor: "#A3B2CF",
    width: 300,
    height: 60,
  },
};
