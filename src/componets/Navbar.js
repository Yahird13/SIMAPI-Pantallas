import React from 'react';
import TextField from './inputs/TextField';
import { faEnvelope, faEye, faEyeSlash, faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock} from '@fortawesome/free-solid-svg-icons';
import EmailField from './inputs/EmailField';
import PasswordField from './inputs/PasswordField';
import SimapiNavbar from './navbar/SimapiNavbar';
import IconContainer from './containers/IconContainer';
import { C_TERCIARIO, C_PRIMARIO } from './colors';
import Button from './buttons/Button';
import CamillaContainer from './containers/CamillaContainer';

export default function MyNavbar(){

        return (
            <>
                <SimapiNavbar logo={"https://www.hnm.org.mx/img/hnm.png"} navbarItems={[
                    {path: "/inicio", text: "Inicio"},
                    {path: "/camillas", text: "Camillas"},
                    {path: "/usuarios", text: "Usuarios"},
                    {path: "/historial", text: "Historial"}]}/>
                <TextField style={{marginTop: 150}}/>
                <EmailField icon={ faEnvelope }/>
                <PasswordField icon={ faLock } passIcons={[faEye,faEyeSlash]}/>
                {/* <IconContainer text={"Camilla"} camilla={true} colorAlert={'red'}  styleText={{fontSize: 10}} iconCamilla={ faBedPulse } size={"5x"} style={{height: 100, with: 100}}/> */}
                <Button camilla={true} onClick={() => console.log("presionado")} style={{marginLeft: 100, margin: 10}}/>
                <IconContainer icon={ faUser } size={"5x"} style={{ border: "1px solid black", borderRadius: "50%", width: 200, height: 200, backgroundColor: C_TERCIARIO}}/>
                <Button text={"Hola"} style={{backgroundColor: C_PRIMARIO,width: 423,height: 84,}}/>
                <CamillaContainer/>
                <div style={{height: "200%", width: "100%", backgroundColor: 'black'}}>
                    a
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    a
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>a
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>a
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </>
            
        );
}