import React, { Component } from 'react';
import './style.css';
import BlackLogo from "../../Assets/blackLogo.png"
import { Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhoneAlt, faIdCard, faIdCardAlt, faLock, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import LoginModal from '../../Components/LoginModal/index';
import TermsModal from '../../Components/TermsModal/index';

import { withRouter } from "react-router-dom";

import api from '../../Services/apiSimulation';

class App extends Component{

    loginModalRef = (obj) => { 
        this.showModal = obj && obj.handleShow 
    }

    onLoginClick = () => {
        this.showModal();
    }

    termsModalRef = (obj) => { 
        this.showTermsModal = obj && obj.handleShow 
    }

    onTermsClick = () => {
        this.showTermsModal();
    }

    state = {
        nome: "",
        email: "",
        tel: "",
        cpf: "",
        companyCNPJ: "",
        password: "",
        Usertype: "",
        error: ""
    };

    handleSignUp = async e => {
        e.preventDefault();
        const { nome, email, tel, cpf, companyCNPJ, password, Usertype } = this.state;

        if (!nome || !email || !password) {
            alert("Preencha todos os dados para se cadastrar");
        } 
        else {
            try {

                await api.post("/sessions", { nome, email, tel, cpf, companyCNPJ, password, Usertype })

                alert('cadastro realizado!');
                this.props.history.push("/");

            } catch (err) {
                console.log(err);
                alert("Ocorreu um erro ao registrar sua conta.");
            }
        }
    }



    render(){
        return(
            <div className="container-register42">
                <LoginModal ref={this.loginModalRef} ></LoginModal>
                <TermsModal ref={this.termsModalRef} ></TermsModal>
                <div className="register-box42">
                    <Form onSubmit={this.handleSignUp}>
    
                        <Form.Group controlId="registerGroupHeader">

                            <Form.Label className="text-center loginTitle" style={{width: "100%"}}><img alt="logo" src={BlackLogo} className="logo-login"></img></Form.Label>
                            <Form.Label className="text-center loginTitle" style={{width: "100%", fontWeight: "bold"}}>Crie sua conta</Form.Label>

                        </Form.Group>

                        <Form.Group controlId="registerGroupName text-center" className="register-cell" style={{width: "100%"}}>
                            <Form.Label className=""><FontAwesomeIcon icon={faUser} className="registerIcon"/></Form.Label>
                            <Form.Control
                                required
                                className="text-center"
                                type="text"
                                placeholder="Nome completo*" 
                                style={{width: "fit-content"}}
                                onChange={e => this.setState({ nome: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group controlId="registerGroupEmail" className="register-cell">
                            <Form.Label className=""><FontAwesomeIcon icon={faEnvelope} className="registerIcon"/></Form.Label>
                            <Form.Control
                                required
                                className="text-center" 
                                type="email"
                                placeholder="Email*"
                                style={{width: "fit-content", marginRight: "4px"}}
                                onChange={e => this.setState({ email: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group controlId="registerGroupTel" className="register-cell">
                            <Form.Label className=""><FontAwesomeIcon icon={faPhoneAlt} className="registerIcon"/></Form.Label>
                            <Form.Control
                                required 
                                className="text-center "
                                type="tel"
                                placeholder="Telefone*"
                                style={{width: "fit-content", marginRight: "3px"}}
                                onChange={e => this.setState({ tel: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group controlId="registerGroupCpf" className="register-cell">
                            <Form.Label className=""><FontAwesomeIcon icon={faIdCard} className="registerIcon"/></Form.Label>
                            <Form.Control 
                                required
                                className="text-center " 
                                type="text" 
                                placeholder="CPF (somente números)*" 
                                maxLength="11" 
                                style={{width: "fit-content", marginRight: "7px"}}
                                onChange={e => this.setState({ cpf: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group controlId="registerGroupCnpj" className="register-cell">
                            <Form.Label className=""><FontAwesomeIcon icon={faIdCardAlt} className="registerIcon"/></Form.Label>
                            <Form.Control
                                required 
                                className="text-center " 
                                type="text" 
                                placeholder="CNPJ*" 
                                maxLength="14" 
                                style={{width: "fit-content", marginRight: "7px"}}
                                onChange={e => this.setState({ companyCNPJ: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group controlId="registerGroupOpt" className="register-cell">
                            <Form.Label><FontAwesomeIcon icon={faAddressBook} className="registerIcon"/></Form.Label>
                            <Form.Control
                                as="select"
                                onChange={e => this.setState({ Usertype: e.target.value })}
                                required
                                
                                style={{width: "fit-content", textAlign: "center", padding: "0px 15%"}}
                            >
                                <option value="cliente" className="text-center">Cliente</option>
                                <option value="parceiro" className="text-center" >Parceiro</option>
                                
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="registerGroupPass" className="register-cell">
                            <Form.Label className=""><FontAwesomeIcon icon={faLock} className="registerIcon"/></Form.Label>
                            <Form.Control
                                required
                                className="text-center " 
                                type="password"
                                placeholder="Senha*" 
                                style={{width: "fit-content"}}
                                onChange={e => this.setState({ password: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group controlId="registerGroupPassConfirm" className="register-cell">
                            <Form.Label className=""><FontAwesomeIcon icon={faLock} className="registerIcon"/></Form.Label>
                            <Form.Control
                                required
                                className="text-center "
                                type="password"
                                placeholder="Confirmar Senha*"
                                style={{width: "fit-content"}}
                            />
                        </Form.Group>

                        <Form.Group controlId="registerGroupcCheckbox" className="check-box-cont">
                            <Form.Check
                                required
                                type="checkbox"
                                label="Eu aceito os termos e condições"
                            />
                        </Form.Group>

                        <Button className="btn-team register-button register-cell" type="submit">
                            CRIAR CONTA
                        </Button>

                        <Form.Group controlId="formGroupFooter">

                            <Form.Label className="text-center" style={{width: "100%"}}>
                                <p className="loginText" style={{marginTop: "40px"}}>
                                    Já tem conta?   
                                    <a onClick={this.onLoginClick} href="#?" style={{display: "inline", color: "#0067CC", marginLeft: "5px"}}>
                                        Faça login
                                    </a>
                                </p>
                            </Form.Label>
                        
                            <Form.Label className="text-center" style={{width: "100%"}}>
                                <a href="/" style={{marginTop: "20px", color: "rgba(64, 64, 64, 0.8)", fontSize: "12px", textDecorationLine: "underline"}}>
                                    Ir para home
                                </a>
                            </Form.Label>

                            <Form.Label className="text-center" style={{width: "100%"}}>
                                <a href="#?" onClick={this.onTermsClick} style={{marginTop: "20px", color: "rgba(64, 64, 64, 0.8)", fontSize: "12px", textDecorationLine: "underline"}}>
                                    Termos e condições
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
            </div>
        )
    }
}

export default withRouter(App);
