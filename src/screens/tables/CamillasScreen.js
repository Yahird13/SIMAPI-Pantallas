import React, { useEffect } from "react";
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

export default function CamillasScreen() {
  useEffect(() => {
    if (!isUserAuthenticated()) {
      window.location.href = "/";
    }
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
          marginTop: "12%",
        }}
      >
        <div style={{ width: "100%", marginBottom: 25, display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'right' }}>
          <Button
            text={"Agregar Camilla"}
            style={styles.btnAgregarCamilla}
            onClick={() => (window.location.href = "/agregarCamilla")}
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
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>Yahir Alberto Diaz Gonzalez</TableCell>
                  <TableCell>NOSE9384777</TableCell>
                  <TableCell>Sala 3</TableCell>
                  <TableCell>
                    <Button
                      text={"Editar"}
                      style={styles.btnEditarCamilla}
                      onClick={() => (window.location.href = "/editarCamilla")}
                    />
                    <Button
                      text={"Eliminar"}
                      style={styles.btnEliminarCamilla}
                      path={"#"}
                    />
                  </TableCell>
                </TableRow>
                {/* {props.data.map(row => (
                        <TableRow key={row.id}>
                            <TableCell>{row.no}</TableCell>
                            <TableCell>{row.fecha}</TableCell>
                            <TableCell>{row.hora}</TableCell>
                            <TableCell>{row.paciente}</TableCell>
                            <TableCell>{row.camilla}</TableCell>
                            <TableCell>
                                <IconButton onClick={() => props.onEdit(row.id)}><Edit /></IconButton>
                                <IconButton onClick={() => props.onEdit(row.id)}><Edit /></IconButton>
                                <IconButton onClick={() => props.onDelete(row.id)}><Delete /></IconButton>
                            </TableCell>
                        </TableRow>
                    ))} */}
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
