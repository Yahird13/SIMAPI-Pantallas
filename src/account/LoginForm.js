import React from 'react';
import Button from '../componets/buttons/Button';
import { C_PRIMARIO, C_TERCIARIO } from '../componets/colors';
import EmailField from '../componets/inputs/EmailField';
import PasswordField from '../componets/inputs/PasswordField';
import { faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import IconContainer from '../componets/containers/IconContainer';


export const LoginForm = () => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
        }}>
            <div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1,
                    
                }}>
                    <IconContainer icon={faUser} size={"8x"} style={{
                        position: 'absolute',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: "1px solid C_TERCIARIO",
                        borderRadius: "50%",
                        width: 200,
                        height: 200,
                        backgroundColor: C_TERCIARIO
                    }} />
                </div>

                <div style={
                    {
                        borderRadius: '15px',
                        backgroundColor: C_PRIMARIO,
                        width: '675px',
                        height: '425px',
                    }}>

                    <div style={{ paddingTop: '130px', textAlign: 'center' }}>
                        <text style={{
                            marginTop: '40px',
                            fontWeight: 'bold',
                            fontSize: '30px'
                        }}>Bienvenido a SIMAPI</text>
                    </div>
                    <div>
                        <div style={{
                            display: 'flex',
                            marginTop: '20px',
                            justifyContent: 'center',
                        }}>
                            <EmailField icon={faEnvelope} />
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '40px',
                            paddingBottom: '40px'
                        }}>
                            <PasswordField icon={faLock} passIcons={[faEye, faEyeSlash]} />
                        </div>
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