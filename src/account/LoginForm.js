import React, { useState, useEffect } from 'react';
import Button from '../componets/buttons/Button';
import { C_PRIMARIO, C_TERCIARIO } from '../componets/colors';
import EmailField from '../componets/inputs/EmailField';
import PasswordField from '../componets/inputs/PasswordField';
import { faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import IconContainer from '../componets/containers/IconContainer';
import { Form, Formik } from 'formik';
import Swal from 'sweetalert2';
import { isUserAuthenticated } from '../auth/TokenValidate'; 


export const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const Swal = require('sweetalert2')

    useEffect(() => {
        if (isUserAuthenticated()) {
            window.location.href = "/inicio";
        }
    }, []);

    const initialValues = {
        email: '',
        password: '',
    }

    return (
        <Formik initialValues={initialValues} onSubmit={() => {
            if (email === '' || password === ''){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Campos obligatorios'
                })
            } else {
            fetch("http://localhost:8080/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    correo: email,
                    password: password,
                }),
                })
                .then((response) => {
                    if (!response.ok) {
                        localStorage.setItem("token", null);
                        localStorage.removeItem("token");
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Datos incorrectos'
                        })
                        throw new Error(response.statusText);
                    } else {
                        return response.json();
                    }
                })
                .then((datos) => {
                    localStorage.setItem("token", datos.data.token);
                    window.location.href = "/inicio";
                })
                .catch((error) => console.log(error));
            }
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                width: '100vw',
                overflow: 'hidden',
            }}>
                <Form>
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
                            <h1 style={{
                                fontWeight: 'bold',
                                fontSize: '30px'
                            }}>Bienvenido a SIMAPI</h1>
                        </div>
                        <div>
                            <div style={{
                                display: 'flex',
                                marginTop: '20px',
                                justifyContent: 'center',
                            }}>
                                <EmailField icon={faEnvelope} id={"email"} value={email} onChange={(text) => {setEmail(text.nativeEvent.srcElement.value); /* console.log(text.nativeEvent.srcElement.value) */}}/>
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: '40px',
                                paddingBottom: '40px'
                            }}>
                                <PasswordField icon={faLock} passIcons={[faEye, faEyeSlash]} value={password} id={"password"} onChange={(text) => {setPassword(text.nativeEvent.srcElement.value); /* console.log(text.nativeEvent.srcElement.value) */}}/>
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
                        <Button text={"Iniciar Sesión"} style={styles.btnIniciarSesion} type={'submit'}/>
                    </div>
                </Form>
            </div>
        </Formik>
    );
};

const styles = {
    btnIniciarSesion: {
        backgroundColor: C_PRIMARIO,
        width: 423,
        height: 84,
    }
}