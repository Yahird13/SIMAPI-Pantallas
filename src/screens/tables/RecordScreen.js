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
import { isUserAuthenticated } from "../../auth/TokenValidate";
import Button from "../../componets/buttons/Button";

export default function RecordScreen() {
  useEffect(() => {
    if (!isUserAuthenticated()) {
      window.location.href = "/";
    }
  }, []);
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
          margin: "5%",
          marginTop: "12%",
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
                  <Typography variant="h5" fontWeight="bold">
                    No.
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5" fontWeight="bold">
                    Fecha
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5" fontWeight="bold">
                    Hora
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5" fontWeight="bold">
                    Paciente
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5" fontWeight="bold">
                    Camilla
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
                <TableCell>1/04/2023</TableCell>
                <TableCell>13:53 pm</TableCell>
                <TableCell>Yahir Alberto Diaz Gonzalez</TableCell>
                <TableCell>Camilla 3</TableCell>
                <TableCell>
                  <Button
                    text={"Detalles"}
                    style={styles.btnDetallesHistorial}
                    onClick={() =>
                      (window.location.href = "/detallesHistorial")
                    }
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
                                <IconButton onClick={() => props.onDelete(row.id)}><Delete /></IconButton>
                            </TableCell>
                        </TableRow>
                    ))} */}
            </TableBody>
          </Table>
        </div>
      </div>
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
};
