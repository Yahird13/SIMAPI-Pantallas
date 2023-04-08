import React, { useEffect } from "react";
import SimapiNavbar from "../../componets/navbar/SimapiNavbar";
import { Table, TableHead, TableBody, TableRow, TableCell, Typography, } from "@material-ui/core"; //instalar con yarn add @material-ui/core
import Button from "../../componets/buttons/Button";
import { isUserAuthenticated } from "../../auth/TokenValidate";

export default function UsersScreen() {
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
            text={"Agregar Usuario"}
            style={styles.btnAgregarUsuario}
            onClick={() => (window.location.href = "/agregarUsuario")}
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
                      Rol
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
                <TableRow>
                  <TableCell>
                    <label style={styles.center}>
                      1
                    </label>
                  </TableCell>
                  <TableCell>
                    <label style={styles.center}>
                      Yahir Alberto Diaz Gonzalez
                    </label>
                  </TableCell>
                  <TableCell>
                    <label style={styles.center}>
                      Enfermera
                    </label>
                  </TableCell>
                  <TableCell style={styles.center}>
                    <Button
                      text={"Detalles"}
                      style={styles.btnDetallesUsuario}
                      onClick={() =>{
                        window.location.href = "/detallesUsuario"
                      }}
                    />
                    <Button
                      text={"Editar"}
                      style={styles.btnEditarUsuario}
                      onClick={() => {
                        window.location.href = "/editarUsuario"
                      }}
                    />
                    <Button
                      text={"Eliminar"}
                      style={styles.btnEliminarUsuario}
                      onClick={() => {
                        window.location.href = "/eliminarUsuario"
                      }}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  btnAgregarUsuario: {
    width: "200px",
    height: "50px",
    backgroundColor: "#3fad5e",
  },
  btnEditarUsuario: {
    width: "100px",
    backgroundColor: "#FFFF00",
    marginRight: "10px",
  },
  btnEliminarUsuario: {
    width: "120px",
    backgroundColor: "#FF0000",
    marginRight: "10px",
  },
  btnDetallesUsuario: {
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
