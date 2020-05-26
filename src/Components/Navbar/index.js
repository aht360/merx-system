import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import LoginModal from '../../Components/LoginModal/index'
import { Navbar, Nav } from 'react-bootstrap';
import './style.css';

import BlackLogo from "../../Assets/blackLogo.png";

import Logo from "../../Assets/logo.png";


class App extends Component{
    
    constructor(props){
        super();
        var changeColor = props.changeColor;
        var colorBack = '';
        var fontColor = '';
        var setColor;

        
        switch(changeColor){
            case 'true':
                colorBack = "#0067CC" // Blue
                fontColor = "#FFFFFF" // White
                setColor = true;
                break;
            case 'false':
                colorBack = "#FFFFFF;" // White
                fontColor = "#000" // Black
                setColor = false;
                break;
            default:
                console.log('lixo');
        }

        this.state = {
            colorBack,
            fontColor,
            changeColor: setColor
        }


    }
    
   
    loginModalRef = (obj) => { 
        this.showModal = obj && obj.handleShow 
    }

    onLoginClick = () => {
    this.showModal();
    }


    render(){

        
        const divStyle = {
            backgroundColor: this.state.colorBack,
            color: this.state.fontColor,
            borderColor: this.state.fontColor
        };

        return (
            <div>

                <LoginModal ref={this.loginModalRef} ></LoginModal>

                <Navbar collapseOnSelect expand="lg" className="bg-blue" style={divStyle} variant="light">

                    <Navbar.Brand href="#home">

                        { this.state.changeColor && <img className="logoBrand white" src={Logo} alt="Logo"/> }

                        { !this.state.changeColor && <img className="logoBrand black" src={BlackLogo} alt="Logo"/>}

                    </Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="justify-navItems">
                            <Nav.Link id="navItem-color" style={divStyle} className="hvr-underline-from-left" href="/">Início</Nav.Link>
                            <Nav.Link id="navItem-color" style={divStyle} className="hvr-underline-from-left" onClick={this.onLoginClick} href="#pesquisa-mercado-livre">Pesquisa Mercado Livre</Nav.Link>
                            <Nav.Link id="navItem-color" style={divStyle} className="hvr-underline-from-left" onClick={this.onLoginClick} href="#negocie">Negocie sua Energia</Nav.Link>
                            <Nav.Link id="navItem-color" style={divStyle} className="hvr-underline-from-left" href="/simulacao">Simulação</Nav.Link>
                            <Nav.Link id="navItem-color" style={divStyle} className="hvr-underline-from-left" href="mercado-livre">Mercado Livre de Energia</Nav.Link>
                            <Nav.Link id="navItem-color" style={divStyle} className="hvr-underline-from-left" href="autoproducao">Autoprodução de Energia</Nav.Link>
                            <Nav.Link id="navItem-color" style={divStyle} className="hvr-underline-from-left" href="#pricing">Contato</Nav.Link>
                            <Nav.Link id="navItem-color" style={divStyle} className="hvr-underline-from-left" onClick={this.onLoginClick}>Login</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                    
                </Navbar>

            </div>  
        )
    }
}
export default App;

/*
ReactDOM.render(<App/>, document.getElementById('root'))
*/