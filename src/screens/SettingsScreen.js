import React, { useState, useEffect } from "react";
import SimapiNavbar from "../componets/navbar/SimapiNavbar";
import Button from "../componets/buttons/Button";
import { isUserAuthenticated } from "../auth/TokenValidate";
import { Formik, Form } from "formik";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import Swal from "sweetalert2";
import { pathContext } from '../utils/PathContext'

const C_PRIMARIO = localStorage.getItem("colorPrimario");
const C_SECUNDARIO = localStorage.getItem("colorSecundario");
const C_TERCIARIO = localStorage.getItem("colorTerciario");

let lastColorPrimario = "";
let lastColorSecundario = "";
let lastColorTerciario = "";

export default function SettingsScreen() {
  const firebaseConfig = {
    apiKey: "AIzaSyDtC8l5MVGwbFsPZwIg-zzioz7AgQFvwuY",
    authDomain: "simapi-logos.firebaseapp.com",
    projectId: "simapi-logos",
    storageBucket: "simapi-logos.appspot.com",
    messagingSenderId: "512626367595",
    appId: "1:512626367595:web:159e9c3b9693650244a52e",
  };

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();

  useEffect(() => {
    const Interval = setInterval(() => {
      fetch(
        `${pathContext}/api/auth/colores/${localStorage.getItem(
          "idInstitucion"
        )}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          const datos = data.data;
          lastColorPrimario = localStorage.getItem("colorPrimario");
          lastColorSecundario = localStorage.getItem("colorSecundario");
          lastColorTerciario = localStorage.getItem("colorTerciario");
          localStorage.setItem("colorPrimario", datos.colorPrimario);
          localStorage.setItem("colorSecundario", datos.colorSecundario);
          localStorage.setItem("colorTerciario", datos.colorTerciario);
          if (lastColorPrimario !== localStorage.getItem("colorPrimario")) {
            window.location.reload();
          }
          if (lastColorSecundario !== localStorage.getItem("colorSecundario")) {
            window.location.reload();
          }
          if (lastColorTerciario !== localStorage.getItem("colorTerciario")) {
            window.location.reload();
          }
        })
        .catch((error) => console.log(error));

        /* fetch(`${pathContext}/api/auth/institucion`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                correo: localStorage.getItem('correo'),
                password: localStorage.getItem('password')
              }),
            })
            .then((response) => response.json())
            .then((data) => {
              const datos = data.data;
              localStorage.setItem("logo", datos.logo);
              localStorage.setItem("nombre", datos.nombre);
              localStorage.setItem("cantidadCamillas", datos.cantidadCamillas);
              localStorage.setItem("cantidadDeSalas", datos.cantidadDeSalas);
              localStorage.setItem("cantidadDeIslas", datos.cantidadDeIslas);
            }) */
    }, 500);
    return () => clearInterval(Interval);
  }, []);

  const [c_primario, setC_primario] = useState(C_PRIMARIO);
  const [c_secundario, setC_secundario] = useState(C_SECUNDARIO);
  const [c_terciario, setC_terciario] = useState(C_TERCIARIO);
  const [imageUrl, setImageUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleChangeC_primario = (event) => {
    setC_primario(event.target.value);
  };

  const handleChangeC_secundario = (event) => {
    setC_secundario(event.target.value);
  };

  const handleChangeC_terciario = (event) => {
    setC_terciario(event.target.value);
  };

  useEffect(() => {
    if (!isUserAuthenticated()) {
      window.location.href = "/";
    }
  }, []);

  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [file, setFile] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
    setImageName(file.name);
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };

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
        }}
      >
        <Formik
          initialValues={{ c_primario: "", c_secundario: "", c_terciario: "" }}
          onSubmit={() => {
            fetch(
              `${pathContext}/api/auth/colores/${localStorage.getItem(
                "idInstitucion"
              )}`,
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  colorPrimario: c_primario,
                  colorSecundario: c_secundario,
                  colorTerciario: c_terciario,
                }),
              }
            )
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
              })
              .catch((error) => console.log(error));
          }}
        >
          <Form>
            <div
              style={{ paddingLeft: "20px", display: "flex", width: "100%" }}
            >
              <div>
                <label
                  style={{
                    fontSize: "25px",
                    style: "bold",
                    marginBottom: "10px",
                    marginTop: "10px",
                  }}
                >
                  Configuración de colores del tema
                </label>
                <br />
                <label
                  style={{
                    marginTop: "10px",
                    fontSize: "20px",
                    marginBottom: "20px",
                  }}
                >
                  Seleccione los colores del tema
                </label>
                <br />
                <label
                  style={{
                    fontSize: "20px",
                    paddingRight: "123px",
                    marginBottom: "20px",
                  }}
                >
                  Color Principal:
                </label>
                <input
                  type={"color"}
                  value={c_primario}
                  onChange={handleChangeC_primario}
                />
                <br />
                <label
                  style={{
                    fontSize: "20px",
                    paddingRight: "100px",
                    marginBottom: "20px",
                  }}
                >
                  Color Secundario:
                </label>
                <input
                  type={"color"}
                  value={c_secundario}
                  onChange={handleChangeC_secundario}
                />
                <br />
                <label
                  style={{
                    fontSize: "20px",
                    paddingRight: "125px",
                    marginBottom: "20px",
                  }}
                >
                  Color Terciario:
                </label>
                <input
                  type={"color"}
                  value={c_terciario}
                  onChange={handleChangeC_terciario}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "right",
                  marginLeft: "auto",
                  marginRight: "5%",
                }}
              >
                <Button
                  type={"submit"}
                  text={"Guardar Colores"}
                  style={{
                    ...styles.btnGuardarColores,
                    backgroundColor: C_PRIMARIO,
                  }}
                />
              </div>
            </div>
          </Form>
        </Formik>
        <Formik
          initialValues={{ image: null }}
          onSubmit={() => {
            if (file) {
              setUploading(true);
              const storageRef = storage.ref(`logos/${localStorage.getItem("idInstitucion")+imageName}`);
              const uploadTask = storageRef.put(file);

              uploadTask.on(
                "state_changed",
                (snapshot) => {
                  // Actualiza el estado de carga del archivo
                  const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                  );
                  setProgress(progress);
                },
                (error) => {
                  // Maneja los errores
                  console.error(error);
                  setUploading(false);
                },
                () => {
                  // Obtiene la URL de descarga del archivo subido
                  uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    setUploading(false);
                    setImageUrl(downloadURL);
                    return downloadURL;
                  })
                  .then((imageUrl) => {
                    console.log(imageUrl)
                    fetch(`${pathContext}/api/auth/login`, {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          correo: "correo121@correo.correo",
                          password: "1212",
                        }),
                      })
                        .then((response) => response.json())
                        .then((data) => {
                          const token = data.data.token;
                          fetch(
                            `${pathContext}/api/institucion/${localStorage.getItem(
                              "idInstitucion"
                            )}`,
                            {
                              method: "PUT",
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}`,
                              },
                              body: JSON.stringify({
                                nombre: localStorage.getItem("nombre"),
                                correo: localStorage.getItem("correo"),
                                password: localStorage.getItem("password"),
                                logo: imageUrl,
                                cantidadCamillas: parseInt(localStorage.getItem("cantidadCamillas")),
                                cantidadDeSalas: parseInt(localStorage.getItem("cantidadDeSalas")),
                                cantidadDeIslas: parseInt(localStorage.getItem("cantidadDeIslas")),
                              }),
                            }
                          )
                            .then((response) => response.json())
                            .then((data) => {
                              console.log(data);
                              localStorage.setItem("logo", imageUrl);
                            })
                            .catch((error) => console.log(error));
                        })
                        .catch((error) => console.log(error));
                  });
                }
              );
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "No se ha seleccionado ningún archivo",
              });
            }
          }}
        >
          <Form>
            <div
              style={{
                margin: 20,
                display: "flex",
              }}
            >
              <div>
                <label
                  style={{
                    fontSize: "25px",
                    style: "bold",
                    marginBottom: "10px",
                  }}
                >
                  Agregar nuevo logo
                </label>
                <br />
                <label
                  style={{
                    marginTop: "10px",
                    fontSize: "20px",
                    marginBottom: "20px",
                    paddingRight: "30px",
                  }}
                >
                  Seleccione el archivo
                </label>
                <input
                  type={"file"}
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <br />
                <div
                  style={{
                    border: "1px solid black",
                    width: "300px",
                    height: "300px",
                  }}
                >
                  {image && (
                    <img
                      src={image}
                      style={{
                        width: "300px",
                        height: "300px",
                      }}
                    />
                  )}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "right",
                  marginLeft: "auto",
                  marginRight: "5%",
                }}
              >
                <Button
                  type={"submit"}
                  text={"Guardar Logo"}
                  style={{
                    ...styles.btnGuardarLogo,
                    backgroundColor: C_PRIMARIO,
                  }}
                  path={"#"}
                />
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

const styles = {
  btnGuardarColores: {
    width: 300,
    height: 60,
  },
  btnGuardarLogo: {
    width: 300,
    height: 60,
  },
};
