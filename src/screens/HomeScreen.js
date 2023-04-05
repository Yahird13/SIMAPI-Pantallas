import React, {useEffect} from 'react';
import SimapiNavbar from '../componets/navbar/SimapiNavbar';
import CamillaContainer from '../componets/containers/CamillaContainer';
import { isUserAuthenticated } from '../auth/TokenValidate';
import SimapiSelect from '../componets/select/SimapiSelect';

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
                {/* <SimapiSelect/> */}
                <CamillaContainer idIsla={''} idSala={''}/>

            </div>
        </div>



    )
}

