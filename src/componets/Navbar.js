import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function MyNavbar(){

        return (
            <Navbar bg="light" expand="lg">
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
        );

}