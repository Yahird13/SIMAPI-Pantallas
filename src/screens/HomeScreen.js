import React from 'react';
import SimapiNavbar from '../componets/navbar/SimapiNavbar';
import CamillaContainer from '../componets/containers/CamillaContainer';
import { Select } from '@material-ui/core';

export default function HomeScreen() {

    const camillas = [
        { idCamilla: 'camilla1', paciente: 'Diego', estado: false, expediente: 'expediente 1' },
        { idCamilla: 'camilla2', paciente: 'Johana', estado: true, expediente: 'expediente 2' },
        { idCamilla: 'camilla3', paciente: 'Juan', estado: false, expediente: 'expediente 3' },
        { idCamilla: 'camilla4', paciente: 'Pedro', estado: true, expediente: 'expediente 4' },
        { idCamilla: 'camilla5', paciente: 'Maria', estado: false, expediente: 'expediente 5' },
        { idCamilla: 'camilla6', paciente: 'Luis', estado: true, expediente: 'expediente 6' },
        { idCamilla: 'camilla7', paciente: 'Luisa', estado: false, expediente: 'expediente 7' },
        { idCamilla: 'camilla8', paciente: 'Antionio', estado: true, expediente: 'expediente 8' },
        { idCamilla: 'camilla9', paciente: 'Marcos', estado: false, expediente: 'expediente 9' },
        { idCamilla: 'camilla10', paciente: 'Fernando', estado: true, expediente: 'expediente 10' },
    ]

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
                <select style={{
                    marginTop:'20px',

                }}>
                    <option>Isla 1</option>
                    <option>Isla 2</option>
                </select>
                <select>
                    <option>Sala 1</option>
                    <option>Sala 2</option>
                    <option>Sala 3</option>
                    <option>Sala 4</option>
                    <option>Sala 5</option>
                </select>
                <CamillaContainer camillas={camillas} />

            </div>
        </div>



    )
}
