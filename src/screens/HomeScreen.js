import React from 'react';
import SimapiNavbar from '../componets/navbar/SimapiNavbar'

export default function HomeScreen() {
    return (
        <div>
            <SimapiNavbar navbarItems={[
                { path: "/inicio", text: "Inicio" },
                { path: "/camillas", text: "Camillas" },
                { path: "/usuarios", text: "Usuarios" },
                { path: "/historial", text: "Historial" }]} />
        </div>
        
    )
}
