import React from 'react';
import Button from '../componets/buttons/Button';
import { C_PRIMARIO } from '../componets/colors';

export const LoginForm = () => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
        }}>
            <div>
                <div style={
                    {
                        borderRadius: '15px',
                        backgroundColor: C_PRIMARIO,
                        width: '775px',
                    }}>
                    <div style={{ padding: '20px', textAlign: 'center' }}>
                        <text style={{
                            fontWeight: 'bold',
                            fontSize: '25px'
                        }}>Bienvenido a SIMAPI</text>
                    </div>
                    <div>
                    <input type="email" id="email" name="email" />
                    <input type="password" id="password" name="password" />
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    marginTop: '40px',
                    flexDirection: 'center',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Button text={"Iniciar Sesión"} style={styles.btnIniciarSesion} path={"#"} />
                </div>
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