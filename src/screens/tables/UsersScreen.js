import React, {useEffect} from 'react'
import SimapiNavbar from '../../componets/navbar/SimapiNavbar'
import { Table, TableHead, TableBody, TableRow, TableCell, Typography } from '@material-ui/core';//instalar con yarn add @material-ui/core
import Button from '../../componets/buttons/Button';
import { isUserAuthenticated } from '../../auth/TokenValidate'; 

export default function UsersScreen() {
    useEffect(() => {
        if (!isUserAuthenticated()) {
            window.location.href = "/";
        }
    }, []);
  return (
    <div>
        <SimapiNavbar navbarItems={[
                { path: "/inicio", text: "Inicio" },
                { path: "/camillas", text: "Camillas" },
                { path: "/usuarios", text: "Usuarios" },
                { path: "/historial", text: "Historial" }]} />

            <Button text={"Agregar Usuario"} style={styles.btnAgregarUsuario} path={"#"} />

            <div style={{
                position: 'fixed',
                bottom: '45px',
                right: '45px',
                left: '45px',
                top: '225px',
                borderRadius: '15px',
                border: '5px solid black'
            }}>
                <div style={{
                    paddingTop: '20px',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    paddingBotton: '20px'
                }}>
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
                                        Rol
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
  );
};

const styles = {
    btnAgregarUsuario:{
        position:'absolute',
        width:'200px',
        height:'50px',
        backgroundColor: 'green',
        top: '150px',
        right: '45px',
    }
}
