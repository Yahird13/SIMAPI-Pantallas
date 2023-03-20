import React, { useState } from 'react';
import SimapiNavbar from '../componets/navbar/SimapiNavbar';
import Button from '../componets/buttons/Button';
import { C_PRIMARIO } from '../componets/colors';

export default function SettingsScreen() {

        const [image, setImage] = useState(null);

        const handleImageChange = (event) => {
            const file = event.target.files[0];
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    
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
                <div style={{ paddingLeft: '20px' }}>
                    <label style={{
                        fontSize: '35px',
                        style: 'bold',
                        marginBottom: '10px',
                        marginTop: '10px'
                    }}>Configuración de colores del tema</label><br />
                    <label style={{
                        marginTop: '10px',
                        fontSize: '25px',
                        marginBottom: '20px'
                    }}>Seleccione los colores del tema</label><br />
                    <label style={{
                        fontSize: '20px',
                        paddingRight: '123px',
                        marginBottom: '20px'
                    }}>Color Principal:</label>
                    <input type={"color"}></input><br />
                    <label style={{
                        fontSize: '20px',
                        paddingRight: '100px',
                        marginBottom: '20px'
                    }}>Color Secundario:</label>
                    <input type={"color"}></input><br />
                    <label style={{
                        fontSize: '20px',
                        paddingRight: '125px',
                        marginBottom: '20px'
                    }}>Color Terciario:</label>
                    <input type={"color"}></input>
                </div>
                <Button text={"Guardar Colores"} style={styles.btnGuardarColores} path={"#"} />

                <div style={{ paddingTop: '20px', paddingLeft: '20px' }}>
                    <label style={{
                        fontSize: '35px',
                        style: 'bold',
                        marginBottom: '10px',
                    }}>Agregar nuevo logo</label><br />
                    <label style={{
                        marginTop: '10px',
                        fontSize: '25px',
                        marginBottom: '20px',
                        paddingRight: '30px'
                    }}>Seleccione el archivo</label>
                    <input type={"file"}
                        accept='image/*'
                        onChange={handleImageChange}></input><br />
                    <div style={{
                        border: '1px solid black',
                        width: '600px',
                        height: '300px',
                    }}>
                        {image && <img src={image} style={{
                            width:'600px', 
                            height:'300px',
                            }} />}
                    </div>

                    <Button text={"Guardar Logo"} style={styles.btnGuardarLogo} path={"#"} />
                </div>
            </div>
        </div>
    );
};

const styles = {
    btnGuardarColores: {
        backgroundColor: C_PRIMARIO,
        width: 300,
        height: 60,
        position: 'absolute',
        right: '300px',
        bottom: '550px',
    },
    btnGuardarLogo: {
        backgroundColor: C_PRIMARIO,
        width: 300,
        height: 60,
        position: 'absolute',
        right: '300px',
        bottom: '200px',
    }
}
