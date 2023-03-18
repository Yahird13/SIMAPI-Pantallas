import React from 'react';
import Button from '../componets/buttons/Button';
import { C_PRIMARIO } from '../componets/colors';

export const LoginForm = () => {
    return(
        <div>
            <div style={{padding: '20px'}}>
                <text style={{fontWeight: 'bold', fontSize:'25px'}}>Bienvenido a SIMAPI</text>
            </div>
            <div>
                
            </div>
            <div>
                <Button text={"Iniciar Sesión"} style={styles.btnIniciarSesion} path={"#"}/>
            </div>
        </div>
    );
};

const styles = {
    btnIniciarSesion: {
        backgroundColor: C_PRIMARIO,
        width: 423,
        height: 84,
    }
}