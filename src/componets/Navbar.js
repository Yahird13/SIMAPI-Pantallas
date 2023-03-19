import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import TextField from './inputs/TextField';
import { faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import EmailField from './inputs/EmailField';
import PasswordField from './inputs/PasswordField';
import SimapiNavbar from './navbar/SimapiNavbar';
import IconContainer from './containers/IconContainer';

export default function MyNavbar(){

        return (
            <>
                <Navbar bg="light" expand="lg" style={{paddingTop: 120}}>
                    <Navbar.Brand href="#home">SIMAPI</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#">Inicio</Nav.Link>
                            <Nav.Link href="#">Camillas</Nav.Link>
                            <Nav.Link href="#">Usuarios</Nav.Link>
                            <Nav.Link href="#">Historial</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <TextField/>
                <EmailField icon={ faEnvelope }/>
                <PasswordField icon={ faLock } passIcons={[faEye,faEyeSlash]}/>
                <div style={{marginTop: 100}}></div>
                <SimapiNavbar navbarItems={[
                    {path: "/inicio", text: "Inicio"},
                    {path: "/camillas", text: "Camillas"}, 
                    {path: "/usuarios", text: "Usuarios"}, 
                    {path: "/historial", text: "Historial"}]}/>
                    
                <IconContainer/>
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