import React from 'react'
import SimapiNavbar from '../../componets/navbar/SimapiNavbar'
import { Table, TableHead, TableBody, TableRow, TableCell, Typography } from '@material-ui/core';//instalar con yarn add @material-ui/core


export default function RecordScreen() {
    return (
        <div>
            <SimapiNavbar navbarItems={[
                { path: "/inicio", text: "Inicio" },
                { path: "/camillas", text: "Camillas" },
                { path: "/usuarios", text: "Usuarios" },
                { path: "/historial", text: "Historial" }]} />

            <div style={{
                position: 'fixed',
                bottom: '45px',
                right: '45px',
                left: '45px',
                top: '175px',
                borderRadius: '15px',
                border: '5px solid black'
            }}>
                <div style={{
                    paddingTop: '20px',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    paddingBotton:'20px' }}>
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
        </div >
    )
}