import React, { useState, useEffect } from "react";
import CamillaButton from "../buttons/CamillaButton";
import Swal from "sweetalert2";

export default function CamillaContainer(props) {
  const [camillas, setCamillas] = useState([]);

  const fetchCamillas = () => {
    fetch("http://localhost:8080/api/camillas", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => setCamillas(data.data))
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchCamillas();
    }, 500);

    return () => clearInterval(interval);
  }, [camillas]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, auto)",
        gridTemplateRows: "repeat(2, auto)",
        gap: "auto",
        alignItems: "center",
        gridAutoColumns: "minmax(min-content, max-content)",
      }}
    >
      {camillas
        ? camillas.map((item, index) => {
            console.log(item.estadoAlarma);
            return (
              <CamillaButton
                key={index}
                textCamilla={`${item.nombre}`}
                camilla={true}
                onClick={() => {
                  if(item.estadoAlarma){
                  let correo = "";
                  let password = "";
                  Swal.fire({
                    title: "Inicie sesión",
                    html:
                      '<input type="email" id="swal-input1" class="swal2-input" placeholder="Correo" required>' +
                      '<input type="password" id="swal-input2" class="swal2-input" placeholder="Contraseña" required>',
                    preConfirm: () => {
                      correo = document.getElementById("swal-input1").value;
                      password = document.getElementById("swal-input2").value;
                      fetch("http://localhost:8080/api/auth/login", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          correo: correo,
                          password: password,
                        }),
                      })
                        .then((response) => {
                          if (!response.ok) {
                            Swal.fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Datos incorrectos",
                            });
                            throw new Error(response.statusText);
                          } else {
                            fetch(
                              `http://localhost:8080/api/camillas/${item.idCamillas}`,
                              {
                                method: "PUT",
                                headers: {
                                  "Content-Type": "application/json",
                                  Authorization:
                                    "Bearer " + localStorage.getItem("token"),
                                },
                                body: JSON.stringify({
                                  nombre: item.nombre,
                                  numeroExpediente: item.numeroExpediente,
                                  idInstitucion: item.idInstitucion,
                                  idEnfermera: item.idEnfermera,
                                  estado: item.estado,
                                  estadoAlarma: false,
                                }),
                              }
                            )
                              .then((response) => {
                                if (!response.ok) {
                                  throw new Error(response.statusText);
                                } else {
                                  //turnOffAlert();
                                }
                              })
                              .catch((error) => console.log(error.message));
                            return response.json();
                          }
                        })
                        .then((datos) => console.log(datos))
                        .catch((error) => console.log(error));
                      if (correo === "" || password === "") {
                        Swal.showValidationMessage(
                          `Por favor, ingrese los datos`
                        );
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
  );
}
