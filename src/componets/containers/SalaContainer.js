import React, { useState, useEffect } from "react";
import CamillaButton from "../buttons/CamillaButton";
import Swal from "sweetalert2";
import { pathContext } from "../../utils/PathContext";
import Loader from "../loader/Loader";

export default function SalaContainer({ idSala }) {
  const [camillas, setCamillas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCamillas = () => {
    if (localStorage.getItem("contadorLoaderInicio") === "0") {
      setIsLoading(true);
      localStorage.setItem("contadorLoaderInicio", "1");
    }
    fetch(
      `${pathContext}/api/auth/camillas/institucion/${localStorage.getItem(
        "idInstitucion"
      )}/sala/${idSala}`,
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
        }
        return response.json();
      })
      .then((data) => setCamillas(data.data))
      .catch((error) => console.log(error.message))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchCamillas();
    }, 500);
    return () => clearInterval(interval);
  }, [camillas]);

  return (
    <div style={{ margin: "15px", marginBottom: 0, border: "1px solid black" }}>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <label
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              textAlign: "center",
              width: "100%",
              display: "block",
            }}
          >
            Sala {idSala}
          </label>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, auto)",
              gridTemplateRows: "repeat(5, auto)",
              gridColumnGap: "0px",
              gridRowGap: "0px",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {camillas
              ? camillas.map((item, index) => {
                  return (
                    <CamillaButton
                      key={index}
                      textCamilla={`${item.nombre}\n\n(${item.idBoton})`}
                      camilla={true}
                      onClick={() => {
                        if (item.estadoAlarma) {
                          let correo = "";
                          let password = "";
                          Swal.fire({
                            title: "Inicie sesión",
                            html:
                              '<input type="email" id="swal-input1" style="font-size: 20px;" class="swal2-input" placeholder="Correo" required>' +
                              '<input type="password" id="swal-input2" class="swal2-input" style="font-size: 20px;"  placeholder="Contraseña" required>',
                            focusConfirm: true,
                            showCancelButton: true,
                            confirmButtonText: "Iniciar sesión",
                            cancelButtonText: "Cancelar",
                            preConfirm: () => {
                              correo =
                                document.getElementById("swal-input1").value;
                              password =
                                document.getElementById("swal-input2").value;
                              if (correo === "" || password === "") {
                                Swal.showValidationMessage(
                                  `Por favor, ingrese los datos`
                                );
                              } else {
                                setIsLoading(true);
                                fetch(`${pathContext}/api/auth/login`, {
                                  method: "POST",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                  body: JSON.stringify({
                                    correo: correo,
                                    password: password,
                                  })
                                })
                                  .then((response) => {
                                    if (!response.ok) {
                                      throw new Error(response.statusText);
                                    }
                                    return response.json();
                                  })
                                  .then((data) => {
                                    if(data.data.rol === 'E'){
                                      fetch(
                                        `${pathContext}/api/alarma/deactivate/${item.idCamillas}`,
                                        {
                                          method: "POST",
                                          headers: {
                                            "Content-Type": "application/json",
                                          },
                                          body: JSON.stringify({
                                            correo: correo.toLowerCase(),
                                            password: password,
                                          }),
                                        }
                                      )
                                        .then((response) => {
                                          if (!response.ok) {
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
                                          if (!datos.error) {
                                              setIsLoading(false)
                                          } else {
                                            Swal.fire({
                                              icon: "error",
                                              title: "Oops...",
                                              text: "Datos incorrectos",
                                            });
                                          }
                                        })
                                        .catch((error) => console.log(error))
                                    } else {
                                      Swal.fire({
                                        icon: "error",
                                        title: "Oops...",
                                        text: "No tiene permisos para desactivar la alarma",
                                      });
                                    }
                                  })
                                  .catch((error) =>
                                    Swal.fire({
                                      icon: "error",
                                      title: "Oops...",
                                      text: "Algo salió mal!",
                                    })
                                  )
                              }
                            },
                          });
                        }
                      }}
                      alert={item.estadoAlarma}
                      id={item.idCamillas}
                      camillaObject={item}
                      estadoCamilla={item.estado}
                    />
                  );
                })
              : null}
          </div>
        </div>
      )}
    </div>
  );
}
