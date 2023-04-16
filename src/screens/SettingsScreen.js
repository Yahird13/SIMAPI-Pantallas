import React, { useState, useEffect } from "react";
import SimapiNavbar from "../componets/navbar/SimapiNavbar";
import Button from "../componets/buttons/Button";
import { isUserAuthenticated } from "../auth/TokenValidate";
import { Formik, Form } from "formik";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import Swal from "sweetalert2";
import { pathContext } from "../utils/PathContext";
import { isInstitutionAuthenticated } from "../auth/InstitutionValidate";
import Loader from "../componets/loader/Loader";

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
  const [isLoading, setIsLoading] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);

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

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();

  

  const [c_primario, setC_primario] = useState(C_PRIMARIO);
  const [c_secundario, setC_secundario] = useState(C_SECUNDARIO);
  const [c_terciario, setC_terciario] = useState(C_TERCIARIO);
  const [imageUrl, setImageUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleChangeC_primario = (event) => {
    setC_primario(event.target.value);
    setBtnDisabled(false);
  };

  const handleChangeC_secundario = (event) => {
    setC_secundario(event.target.value);
    setBtnDisabled(false);
  };

  const handleChangeC_terciario = (event) => {
    setC_terciario(event.target.value);
    setBtnDisabled(false);
  };

  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [file, setFile] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
      setImageName(file.name);
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);

      const reader = new FileReader();
      reader.onload = function (event) {
        const img = new Image();
        img.onload = function () {
          const ratio = img.width / img.height;
          if (ratio <= 0.9 || ratio >= 1.1) {
            Swal.fire({
              title: "Atención!",
              text: "Se recomienda que la relación de aspecto de la imagen sea 1:1 (imagen cuadrada) para evitar deformaciones",
              icon: "warning",
            });
          }
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);

      if (file.width !== file.height) {
        setFile(null);
        setImageName("");
        setImage(null);
        Swal.fire({
          title: "Atención!",
          text: "Se recomienda que la relación de aspecto de la imagen sea 1:1 (imagen cuadrada) para evitar deformaciones",
          icon: "warning",
        });
      }
    } else {
      setFile(null);
      setImageName("");
      setImage(null);
    }
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
          }}
        >
          <Formik
            initialValues={{
              c_primario: "",
              c_secundario: "",
              c_terciario: "",
            }}
            onSubmit={() => {
              setIsLoading(true);
              fetch(
                `${pathContext}/api/auth/colores/${localStorage.getItem(
                  "idColores"
                )}`,
                {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    idInstitucion: localStorage.getItem("idInstitucion"),
                    colorPrimario: c_primario,
                    colorSecundario: c_secundario,
                    colorTerciario: c_terciario,
                  }),
                }
              )
                .then((response) => response.json())
                .then((data) => {
                  localStorage.setItem("colorPrimario", data.data.colorPrimario);
                  localStorage.setItem(
                    "colorSecundario",
                    data.data.colorSecundario
                  );
                  localStorage.setItem("colorTerciario", data.data.colorTerciario);
                })
                .catch((error) => console.log(error))
                .finally(() => window.location.reload());
            }}
          >
            <Form>
              <div
                style={{ paddingLeft: "20px", display: "flex", width: "100%" }}
              >
                <div>
                  <label
                    style={{
                      fontSize: "20px",
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
                    disabled={btnDisabled ? true : false}
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
                setIsLoading(true);
                setUploading(true);
                const storageRef = storage.ref(
                  `logos/${localStorage.getItem("idInstitucion") + imageName}`
                );
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
                    uploadTask.snapshot.ref
                      .getDownloadURL()
                      .then((downloadURL) => {
                        setUploading(false);
                        setImageUrl(downloadURL);
                        return downloadURL;
                      })
                      .then((imageUrl) => {
                        fetch(
                          `${pathContext}/api/institucion/${localStorage.getItem(
                            "idInstitucion"
                          )}`,
                          {
                            method: "PUT",
                            headers: {
                              "Content-Type": "application/json",
                              Authorization: `Bearer ${localStorage.getItem(
                                "token"
                              )}`,
                            },
                            body: JSON.stringify({
                              nombre: localStorage.getItem("nombre"),
                              correo: localStorage.getItem("correo"),
                              password: localStorage.getItem("password"),
                              logo: imageUrl,
                              cantidadCamillas: parseInt(
                                localStorage.getItem("cantidadCamillas")
                              ),
                              cantidadDeSalas: parseInt(
                                localStorage.getItem("cantidadDeSalas")
                              ),
                              cantidadDeIslas: parseInt(
                                localStorage.getItem("cantidadDeIslas")
                              ),
                            }),
                          }
                        )
                          .then((response) => response.json())
                          .then((data) => {
                            localStorage.setItem("logo", imageUrl);
                          })
                          .catch((error) => console.log(error))
                          .finally(() => setIsLoading(false));
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
                      fontSize: "20px",
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
      )}
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
