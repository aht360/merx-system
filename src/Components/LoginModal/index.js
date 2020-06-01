import React from 'react';
import { Modal, Form } from 'react-bootstrap';
import BlackLogo from "../../Assets/blackLogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './style.css';

import api from '../../Services/apiSimulation';

import { login } from '../../Services/auth';

class LoginModal extends React.Component {
    constructor(props, context){
        super(props, context);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: false,
            email: "",
            password: "",
            error: ""
        }
    }

    handleShow() {
        console.log(this.state)
        this.setState({ show: true })
    }

    handleClose(){
        this.setState({ show: false })
    }

    handleSignIn = async e => {
        e.preventDefault();
        const { email, password } = this.state;
        
        if (!email || !password) {
          this.setState({ error: "Preencha e-mail e senha para continuar!" });
        } else {
            try {
                const response = await api.post("/authenticate", { email, password });

                login(response.data.token);

                alert(`Bem vindo ${response.data.user.nome}`)

                window.location.reload();

            } catch (err) {
                this.setState({
                    error:
                      "Usuário ou senha inválidos."
                });

            }
        }
    };


    render() {
        return (
        <div>

            <Modal 
                    show={this.state.show} 
                    onHide={this.handleClose}
                    dialogClassName='custom-dialog'
                    centered
                >
                    <Modal.Body className="modal-body">
                        <div className="container-modal">
                            <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={this.handleClose}/>
                            <Form onSubmit={this.handleSignIn}>

                                <Form.Group controlId="formGroupHeader">

                                    <Form.Label className="text-center loginTitle" style={{width: "100%"}}><img alt="logo" src={BlackLogo} className="logo-login"></img></Form.Label>
                                    <Form.Label className="text-center loginTitle" style={{width: "100%", fontWeight: "bold"}}>Entrar</Form.Label>
                                    
                                
                                </Form.Group>
                                
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Control
                                        className="text-center center-input"
                                        size="lg" type="email"
                                        placeholder="Email"
                                        style={{width: "268px"}}
                                        onChange={e => this.setState({ email: e.target.value })}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formGroupPassword">
                                    <Form.Control
                                        className="text-center center-input"
                                        size="lg"
                                        type="password"
                                        placeholder="Password"
                                        style={{width: "268px"}}
                                        onChange={e => this.setState({ password: e.target.value })}
                                    />
                                </Form.Group>


                                
                                <button className="fb-button color-change buffer-space-login-2" type="submit">Continuar</button>
                                <div style={{marginTop: "20px", textAlign: "center"}}>

                                    {this.state.error && <p>{this.state.error}</p>}
                                </div>

                                <Form.Group controlId="formGroupFooter">

                                    <Form.Label className="text-center" style={{width: "100%"}}>
                                        <p className="loginText" style={{marginTop: "40px"}}>
                                            Não tem conta?  
                                            <a href="register" style={{display: "inline", color: "#0067CC", marginLeft: "5px"}}>
                                                Crie sua conta
                                            </a>
                                        </p>
                                    </Form.Label>

                                    <Form.Label className="text-center" style={{width: "100%"}}>
                                        <a href="https://google.com" style={{marginTop: "20px", color: "rgba(64, 64, 64, 0.8)", fontSize: "12px", textDecorationLine: "underline"}}>
                                            Esqueceu sua senha?
                                        </a>
                                    </Form.Label>

                                    <Form.Label className="text-center" style={{width: "100%"}}>
                                        <p style={{marginTop: "20px", fontSize: "12px", color: "rgba(151, 151, 151, 0.8)"}}>
                                            MERX's Termos de serviço & Políticas de privacidade
                                        </p>
                                    </Form.Label>
                                    
                                </Form.Group>

                            </Form>

                        </div>

                    </Modal.Body>
                </Modal>

            </div>
        )
    }
}
export default LoginModal

