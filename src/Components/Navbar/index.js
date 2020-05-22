import React from 'react'
import {Link} from "react-router-dom";
import Logo from "../../Assets/logo.png"
import BlackLogo from "../../Assets/blackLogo.png"
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'
import './style.css';

export default function NavBar(props){
    var changeColor = props.changeColor || false
    var colorBack
    var fontColor
    var borderColor
    if(changeColor ===false){
        colorBack = "#0067CC"
        fontColor = "#FFFFFF"
    }else{
        colorBack = "#FFFFFF;"
        fontColor = "#0067CC"
    }

    const divStyle = {
        backgroundColor: colorBack,
        color: fontColor,
        borderColor: fontColor
    };
    
    return(
        <Navbar collapseOnSelect expand="lg" className="bg-blue" style={divStyle} variant="dark">
            <Navbar.Brand href="#home">
                {!changeColor && <img className="logoBrand" src={Logo} alt="Logo"/>}
                {changeColor && <img className="logoBrand" src={BlackLogo} alt="Logo"/>}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-navItems">
                        <Nav.Link id="navItem-color" style={divStyle} href="/">Início</Nav.Link>
                        <Nav.Link id="navItem-color" style={divStyle} href="#pesquisa">Pesquisa Mercado Livre</Nav.Link>
                        <Nav.Link id="navItem-color" style={divStyle} href="#negocie">Negocie sua Energia</Nav.Link>
                        <Nav.Link id="navItem-color" style={divStyle} href="#simulacao">Simulação</Nav.Link>
                        <Nav.Link id="navItem-color" style={divStyle} href="#pricing">Mercado Livre de Energia</Nav.Link>
                        <Nav.Link id="navItem-color" style={divStyle} href="autoproducao">Autoprodução de Energia</Nav.Link>
                        <Nav.Link id="navItem-color" style={divStyle} href="#pricing">Contato</Nav.Link>
                        <Nav.Link id="navItem-color" style={divStyle} href="#pricing">Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}