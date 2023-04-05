import React from 'react'
import SimapiNavbar from '../../src/componets/navbar/SimapiNavbar'

export default function CrearCamilla() {
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
            </div>
        </div>
    )
}