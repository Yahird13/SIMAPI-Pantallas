import React, { useState, useEffect } from "react";
import SimapiNavbar from "../../componets/navbar/SimapiNavbar";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@material-ui/core";
import Button from "../../componets/buttons/Button";
import { isUserAuthenticated } from "../../auth/TokenValidate";
import { pathContext } from "../../utils/PathContext";
import Swal from "sweetalert2";
import { isInstitutionAuthenticated } from "../../auth/InstitutionValidate";
import Loader from "../../componets/loader/Loader";

export default function InstitutionScreen() {
  const [instituciones, setInstituciones] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchInstituciones = () => {
    setIsLoading(true);
    fetch(`${pathContext}/api/institucion`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((datos) => {
        setInstituciones(datos.data);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (!isUserAuthenticated()) {
      if (!isInstitutionAuthenticated()) {
        window.location.replace("/");
      } else {
        window.location.replace("/inicio");
      }
    } else if(localStorage.getItem("rol") !== "SA"){
      window.location.replace("/inicio");
    }
    fetchInstituciones()
  }, []);
  return (
    <div>
      <SimapiNavbar />
      {isLoading ? (
        <Loader />
      ) : (
        <div
          style={{
            margin: "5%",
            marginTop: "10%",
          }}
        >
          <div
            style={{
              width: "100%",
              marginBottom: 25,
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "right",
            }}
          >
            <Button
              text={"Agregar Institución"}
              style={styles.btnAgregarInstitucion}
              onClick={() => window.location.replace("/agregarInstitucion")}
            />
          </div>

          <div
            style={{
              borderRadius: "15px",
              border: "5px solid black",
              minHeight: 415,
              width: "100%",
            }}
          >
            <div
              style={{
                padding: "20px",
                width: "100%",
              }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        style={styles.center}
                      >
                        No.
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        style={styles.center}
                      >
                        Nombre
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        style={styles.center}
                      >
                        Correo
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        style={styles.center}
                      >
                        Acciones
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {instituciones
                    ? instituciones.map((item, index) => {
                        return (
                          <TableRow key={index}>
                            <TableCell>
                              <label
                                style={{ ...styles.center, fontSize: "18px" }}
                              >
                                {index + 1}
                              </label>
                            </TableCell>
                            <TableCell>
                              <label
                                style={{ ...styles.center, fontSize: "18px" }}
                              >
                                {item.nombre}
                              </label>
                            </TableCell>
                            <TableCell>
                              <label
                                style={{ ...styles.center, fontSize: "18px" }}
                              >
                                {item.correo}
                              </label>
                            </TableCell>
                            <TableCell
                              style={{ ...styles.center, fontSize: "18px" }}
                            >
                              <Button
                                text={"Detalles"}
                                style={styles.btnDetallesInstitucion}
                                onClick={() => {
                                  localStorage.setItem(
                                    "idInstitucionEdit",
                                    item.idInstitucion
                                  );
                                  window.location.replace(
                                    "/detallesInstitucion"
                                  );
                                }}
                              />
                              <Button
                                text={"Editar"}
                                style={styles.btnEditarInstitucion}
                                onClick={() => {
                                  localStorage.setItem(
                                    "idInstitucionEdit",
                                    item.idInstitucion
                                  );
                                  window.location.replace("/editarInstitucion");
                                }}
                              />

                              {item.rol !== "A" ? (
                                <Button
                                  text={"Eliminar"}
                                  style={styles.btnEliminarInstitucion}
                                  onClick={() => {
                                    Swal.fire({
                                      title: "¿Estás seguro?",
                                      text: "¡No podrás revertir esto!",
                                      icon: "warning",
                                      showCancelButton: true,
                                      confirmButtonColor: "#3085d6",
                                      cancelButtonColor: "#d33",
                                      confirmButtonText: "¡Sí, bórralo!",
                                    }).then((result) => {
                                      if (result.isConfirmed) {
                                        fetch(
                                          `${pathContext}/api/institucion/${item.idInstitucion}`,
                                          {
                                            method: "DELETE",
                                            headers: {
                                              "Content-Type":
                                                "application/json",
                                              Authorization:
                                                "Bearer " +
                                                localStorage.getItem("token"),
                                            },
                                          }
                                        )
                                          .then((response) => response.json())
                                          .then((datos) => {
                                            if (!datos.error) {
                                              Swal.fire({
                                                title: "¡Eliminada!",
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
                                              });
                                              fetchInstituciones()
                                            } else {
                                              throw new Error(datos.message);
                                            }
                                          })
                                          .catch((error) => {
                                            Swal.fire({
                                              title: "¡Error!",
                                              text: error.message,
                                              icon: "error",
                                              showConfirmButton: false,
                                              showCloseButton: true,
                                            });
                                          });
                                      }
                                    });
                                  }}
                                />
                              ) : null}
                            </TableCell>
                          </TableRow>
                        );
                      })
                    : null}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  btnAgregarInstitucion: {
    width: "300px",
    height: "50px",
    backgroundColor: "#3fad5e",
  },
  btnEditarInstitucion: {
    width: "100px",
    backgroundColor: "#FFFF00",
    marginRight: "10px",
  },
  btnEliminarInstitucion: {
    width: "120px",
    backgroundColor: "#FF0000",
    marginRight: "10px",
  },
  btnDetallesInstitucion: {
    width: "120px",
    backgroundColor: "#1B8CF4",
    marginRight: "10px",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
