import React from 'react';
import SimapiNavbar from '../componets/navbar/SimapiNavbar';
import CamillaContainer from '../componets/containers/CamillaContainer';
import { Select } from '@material-ui/core';

export default function HomeScreen() {

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
                <CamillaContainer idIsla={''} idSala={''}/>

            </div>
        </div>



    )
}

