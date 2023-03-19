import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import TextField from './inputs/TextField';
import { faEnvelope, faEye, faEyeSlash, faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import EmailField from './inputs/EmailField';
import PasswordField from './inputs/PasswordField';
import SimapiNavbar from './navbar/SimapiNavbar';
import IconContainer from './containers/IconContainer';
import { C_TERCIARIO, C_PRIMARIO } from './colors';
import Button from './buttons/Button';

export default function MyNavbar(){

        return (
            <>
                <TextField style={{marginTop: 150}}/>
                <EmailField icon={ faEnvelope }/>
                <PasswordField icon={ faLock } passIcons={[faEye,faEyeSlash]}/>
                <SimapiNavbar navbarItems={[
                    {path: "/inicio", text: "Inicio"},
                    {path: "/camillas", text: "Camillas"}, 
                    {path: "/usuarios", text: "Usuarios"}, 
                    {path: "/historial", text: "Historial"}]}/>
                <IconContainer image={"https://www.hnm.org.mx/img/hnm.png"}/>
                <IconContainer icon={ faUser } size={"5x"} style={{borderRadius: "50%", width: 200, height: 200, backgroundColor: C_TERCIARIO.toString()}}/>
                <Button text={"Hola"} style={{backgroundColor: C_PRIMARIO,width: 423,height: 84,}}/>
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