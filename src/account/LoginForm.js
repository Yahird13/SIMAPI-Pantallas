import React, { useState, useEffect } from "react";
import Button from "../componets/buttons/Button";
//import { C_PRIMARIO, C_TERCIARIO } from '../componets/colors';
import EmailField from "../componets/inputs/EmailField";
import PasswordField from "../componets/inputs/PasswordField";
import { faEnvelope, faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
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

  if(isInstitutionAuthenticated()){
    window.location.replace("/admin");
  }

  const initialValues = {
    email: "",
    password: "",
  };

  return (
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
              if (!response.ok) {
                localStorage.setItem("estado", false);
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Datos incorrectos",
                });
                throw new Error(response.statusText);
              } else {
                return response.json();
              }
            })
            .then((datos) => {
              localStorage.setItem("estado", datos.data.estado);
              localStorage.setItem("idInstitucion", datos.data.idInstitucion);
              localStorage.setItem("logo", datos.data.logo);
              localStorage.setItem("nombreEmpresa", datos.data.nombre);
              //localStorage.setItem("cantidadCamillas",datos.data.cantidadCamillas);
              //localStorage.setItem("cantidadDeSalas",datos.data.cantidadDeSalas);
              //localStorage.setItem("cantidadDeIslas",datos.data.cantidadDeIslas);
              localStorage.setItem("idColores", datos.data.color.idColores);
              localStorage.setItem("colorPrimario",datos.data.color.colorPrimario);
              localStorage.setItem("colorSecundario", datos.data.color.colorSecundario);
              localStorage.setItem("colorTerciario", datos.data.color.colorTerciario);
              window.location.replace("/admin");
            })
            .catch((error) => console.log(error));
        }
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
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
                    setEmail(e.target.value); /* console.log(e.target.value) */
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
  );
};

const styles = {
  btnIniciarSesion: {
    backgroundColor: "#A3B2CF",
    width: 423,
    height: 84,
  },
};
