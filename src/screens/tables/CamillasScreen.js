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

export default function CamillasScreen() {
  const [camillas, setCamillas] = useState([]);

  useEffect(() => {
    if (!isUserAuthenticated()) {
      window.location.href = "/";
    }

    fetch(`${pathContext}/api/camillas/institucion/${localStorage.getItem("idInstitucion")}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((datos) => setCamillas(datos.data))
      .catch((error) => console.log(error));
  }, []);
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
      <div
        style={{
          margin: "5%",
          marginTop: 0,
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
            marginTop: "12%",
          }}
        >
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
                    <Typography variant="h5" fontWeight="bold">
                      No.
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h5" fontWeight="bold">
                      Nombre
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h5" fontWeight="bold">
                      Expediente
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h5" fontWeight="bold">
                      Sala
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h5" fontWeight="bold">
                      Acciones
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {camillas ? (
                  camillas.map((item, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{item.nombre ? item.nombre : 'No asignada'}</TableCell>
                        <TableCell>{item.numeroExpediente}</TableCell>
                        <TableCell>Sala 3</TableCell>
                        <TableCell>
                          <Button
                            text={"Editar"}
                            style={styles.btnEditarCamilla}
                            onClick={(e) =>{
                              localStorage.setItem("idCamillaEdit", item.idCamillas)
                              window.location.href = "/editarCamilla"
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
      </div>
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
};
