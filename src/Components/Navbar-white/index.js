import React from 'react'
import {Link} from "react-router-dom";
import Logo from "../../Assets/logo.png"
import BlackLogo from "../../Assets/blackLogo.png"
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'
import './style.css';

export default function NavBar(props){
    var changeColor = props.changeColor || false
    var color
    var fontColor
        if(changeColor ===false){
            console.log("alou");
            color = "#0067CC"
            fontColor = "#FFFFFF"
        }else{
            color = "#FFFFFF;"
            fontColor = "#0067CC"
        }

    return(
        <Navbar expand="lg" className="bg-blue"  variant="dark">
            <Navbar.Brand href="#home"><img className="logoBrand" src={BlackLogo} alt="Logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-navItems">
                        <Nav.Link id="navItem-color" href="/">Início</Nav.Link>
                        <Nav.Link id="navItem-color" href="#pesquisa">Pesquisa Mercado Livre</Nav.Link>
                        <Nav.Link id="navItem-color" href="#negocie">Negocie sua Energia</Nav.Link>
                        <Nav.Link id="navItem-color" href="simulacao">Simulação</Nav.Link>
                        <Nav.Link id="navItem-color" href="#pricing">Mercado Livre de Energia</Nav.Link>
                        <Nav.Link id="navItem-color" href="#pricing">Autoprodução de Energia</Nav.Link>
                        <Nav.Link id="navItem-color" href="#pricing">Contato</Nav.Link>
                        <Nav.Link id="navItem-color" href="#pricing">Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}