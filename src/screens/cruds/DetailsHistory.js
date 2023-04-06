import React from 'react'
import SimapiNavbar from '../../componets/navbar/SimapiNavbar'
import Button from '../../componets/buttons/Button';

export default function DetailsHistory() {
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
                <div style={{ paddingLeft: '25px', paddingTop: '20px' }}>
                    <label style={{
                        fontStyle: 'bold',
                        fontSize: '40px',
                        paddingRight: '150px',
                        marginBottom: '20px',
                    }}>Detalles de atención</label><br />

                    <label style={{
                        fontSize: '35px',
                        paddingRight: '50px',
                        marginBottom: '20px',
                    }}>Fecha de peticion:</label>
                    <input type='text' style={{
                        fontSize: '30px',
                        width: '400px',
                        marginBottom: '20px',
                        textAlign: 'center',
                    }}></input>
                    <label style={{
                        fontSize: '35px',
                        paddingRight: '100px',
                        marginBottom: '20px',
                        paddingLeft: '50px',
                    }}>Fecha de atención:</label>
                    <input type='text' style={{
                        fontSize: '30px',
                        width: '400px',
                        marginBottom: '20px',
                        textAlign: 'center',
                    }}></input><br />

                    <label style={{
                        fontStyle: 'bold',
                        fontSize: '35px',
                        paddingRight: '65px',
                        marginBottom: '20px',
                    }}>Hora de petición:</label>
                    <input type='text' style={{
                        fontSize: '30px',
                        width: '400px',
                        marginBottom: '20px',
                        textAlign: 'center',
                    }}></input>
                    <label style={{
                        fontSize: '35px',
                        paddingRight: '100px',
                        marginBottom: '20px',
                        paddingLeft: '50px',
                    }}>Fecha de atención:</label>
                    <input type='text' style={{
                        fontSize: '30px',
                        width: '400px',
                        marginBottom: '20px',
                        textAlign: 'center',
                    }}></input><br />

                    <label style={{
                        fontStyle: 'bold',
                        fontSize: '35px',
                        paddingRight: '195px',
                        marginBottom: '20px',
                    }}>Paciente:</label>
                    <input type='text' style={{
                        fontSize: '30px',
                        width: '400px',
                        marginBottom: '20px',
                        textAlign: 'center',
                    }}></input>
                    <label style={{
                        fontStyle: 'bold',
                        fontSize: '35px',
                        paddingRight: '220px',
                        paddingLeft: '50px',
                        marginBottom: '20px',
                    }}>Enfermera:</label>
                    <input type='text' style={{
                        fontSize: '30px',
                        width: '400px',
                        marginBottom: '20px',
                        textAlign: 'center',
                    }}></input><br />

                    <label style={{
                        fontStyle: 'bold',
                        fontSize: '35px',
                        paddingRight: '275px',
                        marginBottom: '20px',
                    }}>Isla:</label>
                    <input type='text' style={{
                        fontSize: '30px',
                        width: '200px',
                        marginBottom: '20px',
                        textAlign: 'center',
                    }}></input>
                    <label style={{
                        fontStyle: 'bold',
                        fontSize: '35px',
                        paddingRight: '315px',
                        paddingLeft: '250px',
                        marginBottom: '20px',
                    }}>Sala:</label>
                    <input type='text' style={{
                        fontSize: '30px',
                        width: '200px',
                        marginBottom: '20px',
                        textAlign: 'center',
                    }}></input><br/>

                    <label style={{
                        fontStyle: 'bold',
                        fontSize: '35px',
                        paddingRight: '215px',
                        marginBottom: '20px',
                    }}>Camilla:</label>
                    <input type='text' style={{
                        fontSize: '30px',
                        width: '200px',
                        marginBottom: '20px',
                        textAlign: 'center',
                    }}></input><br />

                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '30%',
                }}>
                    <Button text={"Regresar"} style={styles.btnGuardarUsuario} path={"#"} />
                </div>



            </div>
        </div>
    )
}


const styles = {
    btnGuardarUsuario: {
        fontSize: '30px',
        position: 'absolute',
        width: '400px',
        height: '75px',
        borderRadius: '10px',
        backgroundColor: '#3fad5e',
        bottom: '40px',
    }
}

