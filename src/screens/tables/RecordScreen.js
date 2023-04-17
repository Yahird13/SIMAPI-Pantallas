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
import { isUserAuthenticated } from "../../auth/TokenValidate";
import Button from "../../componets/buttons/Button";
import { pathContext } from "../../utils/PathContext";
import { isInstitutionAuthenticated } from "../../auth/InstitutionValidate";
import Loader from "../../componets/loader/Loader";

export default function RecordScreen() {
  const [historial, setHistorial] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //useEffect(() => {
  if (!isUserAuthenticated()) {
    if (!isInstitutionAuthenticated()) {
      window.location.replace("/");
    } else{
      window.location.replace("/inicio");
    }
  } else if (localStorage.getItem("rol") !== "A") {
    if (localStorage.getItem("rol") === "SA") {
      window.location.replace("/administradores");
    } else {
      window.location.replace("/inicio");
    }
  }

  const [camillas, setCamillas] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `${pathContext}/api/auth/camillas/institucion/${localStorage.getItem(
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
        setCamillas(datos.data);
      })
      .catch((error) => console.log(error))

    fetch(
      `${pathContext}/api/historial/institucion/${localStorage.getItem(
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
      .then((datos) => setHistorial(datos.data))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <div>
      <SimapiNavbar/>
      {isLoading ? (<Loader/>):(
      <div
        style={{
          margin: "5%",
          marginTop: "10%",
          borderRadius: "15px",
          border: "5px solid black",
          minHeight: 490,
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
                    Fecha
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    style={styles.center}
                  >
                    Hora
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    style={styles.center}
                  >
                    Paciente
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
              {historial
                ? historial.map((item, index) => {
                    return item.fechaAtencion ? (
                      <TableRow key={index}>
                        <TableCell>
                          <label style={{ ...styles.center, fontSize: "18px" }}>
                            {index + 1}
                          </label>
                        </TableCell>
                        <TableCell>
                          <label style={{ ...styles.center, fontSize: "18px" }}>
                            {item.fechaPeticion}
                          </label>
                        </TableCell>
                        <TableCell>
                          <label style={{ ...styles.center, fontSize: "18px" }}>
                            {item.horaDePeticion}
                          </label>
                        </TableCell>
                        <TableCell>
                          <label style={{ ...styles.center, fontSize: "18px" }}>
                            {item.nombrePaciente}
                          </label>
                        </TableCell>
                        <TableCell style={styles.center}>
                          <Button
                            text={"Detalles"}
                            style={styles.btnDetallesHistorial}
                            onClick={() =>{
                              localStorage.setItem("historial", JSON.stringify(item))
                              window.location.replace("/detallesHistorial")
                            }}
                          />
                        </TableCell>
                      </TableRow>
                    ) : null;
                  })
                : null}
            </TableBody>
          </Table>
        </div>
      </div>)}
    </div>
  );
}

const styles = {
  btnDetallesHistorial: {
    color: "black",
    width: "120px",
    backgroundColor: "#0000FF",
    marginRight: "10px",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
