import React, { useEffect, useState } from "react";
import SimapiNavbar from "../../componets/navbar/SimapiNavbar";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@material-ui/core"; //instalar con yarn add @material-ui/core
import Button from "../../componets/buttons/Button";
import { isUserAuthenticated } from "../../auth/TokenValidate";
import { pathContext } from "../../utils/PathContext";
import { isInstitutionAuthenticated } from "../../auth/InstitutionValidate";
import Loader from "../../componets/loader/Loader";

export default function CamillasScreen() {
  const [camillas, setCamillas] = useState([]);
  const [camillasFiltradas, setCamillasFiltradas] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
    setIsLoading(true);
    fetch(
      `${pathContext}/api/camillas/institucion/${localStorage.getItem(
        "idInstitucion"
      )}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    )
      .then((response) => response.json())
      .then((datos) => {
        setCamillasFiltradas(datos.data);
        setCamillas(datos.data)
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  const handleBusqueda = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }

  const filtrar = (datoFiltro) => {
    const resultadoBusqueda = camillas.filter((camilla) => {
      if(
        camilla.nombre.toLowerCase().includes(datoFiltro.toLowerCase()) ||
        camilla.numeroExpediente.toLowerCase().includes(datoFiltro.toLowerCase()) ||
        camilla.idSala.toString().toLowerCase().includes(datoFiltro.toString().toLowerCase()) ||
        camilla.idSala.toString().toLowerCase().includes(datoFiltro.toString().toLowerCase())
      ){
        return camilla
      }
    });
    setCamillasFiltradas(resultadoBusqueda);
  }

  return (
    <div>
      <SimapiNavbar
        logo={"https://www.hnm.org.mx/img/hnm.png"}
        navbarItems={[
          { path: "/inicio", text: "Inicio" },
          { path: "/camillas", text: "Camillas" },
          { path: "/usuarios", text: "Usuarios" },
          { path: "/historial", text: "Historial" },
        ]}
      />
      {isLoading ? <Loader/> : 
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
          <input
            type="text"
            placeholder="Buscar por nombre, expediente, isla o sala"
            value={busqueda}
            style={{
              width: "50%",
              height: "50px",
              borderRadius: "15px",
              border: "2px solid black",
              paddingLeft: "10px",
              fontSize: "18px",

            }}
            onChange={handleBusqueda}
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
                      No. Expediente
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      style={styles.center}
                    >
                      Sala
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      style={styles.center}
                    >
                      Isla
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
                {camillas ? (
                  camillasFiltradas.map((item, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>
                          <label style={{...styles.center, fontSize: "18px"}} >{index + 1}</label>
                        </TableCell>
                        <TableCell>
                          <label style={{...styles.center, fontSize: "18px"}} >
                            {item.nombre ? item.nombre : "No asignada"}
                          </label>
                        </TableCell>
                        <TableCell>
                          <label style={{...styles.center, fontSize: "18px"}} >{item.numeroExpediente}</label>
                        </TableCell>
                        <TableCell>
                          <label style={{...styles.center, fontSize: "18px"}} >{item.idSala}</label>
                        </TableCell>
                        <TableCell>
                          <label style={{...styles.center, fontSize: "18px"}} >{item.idIsla}</label>
                        </TableCell>
                        <TableCell style={{...styles.center, fontSize: "18px"}}>
                          <Button
                            text={"Editar"}
                            style={styles.btnEditarCamilla}
                            onClick={(e) => {
                              localStorage.setItem(
                                "idCamillaEdit",
                                item.idCamillas
                              );
                              window.location.replace("/editarCamilla");
                            }}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })
                ) : (
                  <TableRow>
                    <TableCell>No hay camillas</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>}
    </div>
  );
}

const styles = {
  btnAgregarCamilla: {
    width: "200px",
    height: "50px",
    backgroundColor: "#3fad5e",
  },
  btnEditarCamilla: {
    width: "100px",
    backgroundColor: "#FFFF00",
    marginRight: "10px",
  },
  btnEliminarCamilla: {
    width: "120px",
    backgroundColor: "#FF0000",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
