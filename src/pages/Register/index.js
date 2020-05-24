import React, { Component } from 'react';
import './style.css';
import BlackLogo from "../../Assets/blackLogo.png"
import { Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhoneAlt, faIdCard, faIdCardAlt, faLock } from '@fortawesome/free-solid-svg-icons'
import LoginModal from '../../Components/LoginModal/index';
import TermsModal from '../../Components/TermsModal/index';


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

    render(){
        return(
            <div className="container-register42">
                <LoginModal ref={this.loginModalRef} ></LoginModal>
                <TermsModal ref={this.termsModalRef} ></TermsModal>
                <div className="register-box42">
                    <Form>
    
                        <Form.Group controlId="registerGroupHeader">
    
                            <Form.Label className="text-center loginTitle" style={{width: "100%"}}><img alt="logo" src={BlackLogo} className="logo-login"></img></Form.Label>
                            <Form.Label className="text-center loginTitle" style={{width: "100%", fontWeight: "bold"}}>Crie sua conta</Form.Label>
                
                        </Form.Group>
                        
                        <Form.Group controlId="registerGroupName text-center" className="register-cell" style={{width: "100%"}}>
                            <Form.Label className=""><FontAwesomeIcon icon={faUser} className="registerIcon"/></Form.Label>
                            <Form.Control className="text-center" type="text" placeholder="Nome completo*" style={{width: "268px"}}/>
                        </Form.Group>
    
                        <Form.Group controlId="registerGroupEmail" className="register-cell">
                            <Form.Label className=""><FontAwesomeIcon icon={faEnvelope} className="registerIcon"/></Form.Label>
                            <Form.Control className="text-center " type="email" placeholder="Email*" style={{width: "268px", marginRight: "4px"}}/>
                        </Form.Group>
    
                        <Form.Group controlId="registerGroupTel" className="register-cell">
                            <Form.Label className=""><FontAwesomeIcon icon={faPhoneAlt} className="registerIcon"/></Form.Label>
                            <Form.Control className="text-center " type="tel" placeholder="Telefone*" style={{width: "268px", marginRight: "3px"}}/>
                        </Form.Group>
    
                        <Form.Group controlId="registerGroupCpf" className="register-cell">
                            <Form.Label className=""><FontAwesomeIcon icon={faIdCard} className="registerIcon"/></Form.Label>
                            <Form.Control className="text-center " type="text" placeholder="CPF (somente números)*" maxlength="11" style={{width: "268px", marginRight: "7px"}}/>
                        </Form.Group>
    
                        <Form.Group controlId="registerGroupCnpj" className="register-cell">
                            <Form.Label className=""><FontAwesomeIcon icon={faIdCardAlt} className="registerIcon"/></Form.Label>
                            <Form.Control className="text-center " type="text" placeholder="CNPJ (somente números)" maxlength="14" style={{width: "268px", marginRight: "7px"}}/>
                        </Form.Group>
    
                        <Form.Group controlId="registerGroupPass" className="register-cell">
                            <Form.Label className=""><FontAwesomeIcon icon={faLock} className="registerIcon"/></Form.Label>
                            <Form.Control className="text-center " type="password" placeholder="Senha*" style={{width: "268px"}}/>
                        </Form.Group>
    
                        <Form.Group controlId="registerGroupPassConfirm" className="register-cell">
                            <Form.Label className=""><FontAwesomeIcon icon={faLock} className="registerIcon"/></Form.Label>
                            <Form.Control className="text-center " type="password" placeholder="Confirmar Senha*" style={{width: "268px"}}/>
                        </Form.Group>
    
                        <Form.Group controlId="registerGroupcCheckbox" className="check-box-cont">
                            <Form.Check type="checkbox" label="Eu aceito os termos e condições" />
                        </Form.Group>
    
                        <a href="/" className="btn-team register-button register-cell">
                                        CRIAR CONTA
                        </a>
    
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

export default App;
