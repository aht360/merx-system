import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import BlackLogo from "../../Assets/blackLogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './style.css';

import api from '../../Services/apiSimulation';

class LoginModal extends React.Component {
  constructor(props, context){
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
        show: false,
        name: '',
        toSend: '',
        toSubject: '',
        toText: ''
    }
}

    handleShow() {
        console.log(this.state)
        this.setState({ show: true })
    }

    handleClose(){
        this.setState({ show: false })
    }

    handleSendEmail = async e => {
        e.preventDefault();
        const { name, toSend, toSubject, toText } = this.state;
        if ( !name || !toSend || !toSubject || !toText ){
            alert('Por favor, preencha todos os dados para enviar o email')
        }
        else{
            try {

                await api.post("/email", { name, toSend, toSubject, toText })

                alert('Email enviado!');
                

            } catch (err) {
                console.log(err);
                alert("Ocorreu um erro ao enviar o email.");
            }
        }
    }


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
                            <Form onSubmit={this.handleSendEmail}>

                                <Form.Group controlId="formGroupHeader">

                                    <Form.Label className="text-center loginTitle" style={{width: "100%"}}><img alt="logo" src={BlackLogo} className="logo-login"></img></Form.Label>
                                    <Form.Label className="text-center loginTitle" style={{width: "100%", fontWeight: "bold"}}>Fale conosco!</Form.Label>
                                    <Form.Label className="text-center loginTitle" style={{width: "100%", fontSize: "18px"}}>Preencha o formulário abaixo que entraremos em contato o mais rápido possível!</Form.Label>
                                    
                                </Form.Group>

                                <Form.Group controlId="talkName" className="center-input">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control
                                        required
                                        type="text" 
                                        size="sm" 
                                        placeholder="" 
                                        onChange={e => this.setState({ name: e.target.value })}
                                    />
                                </Form.Group>
                                
                                <Form.Group controlId="talkEmail" className="center-input">
                                    <Form.Label>E-mail</Form.Label>
                                    <Form.Control
                                        required
                                        type="email" 
                                        size="sm" 
                                        placeholder=""
                                        onChange={e => this.setState({ toSend: e.target.value })}
                                    />
                                </Form.Group>

                                <Form.Group controlId="talkSubject" className="center-input">
                                    <Form.Label>Assunto</Form.Label>

                                    <Form.Control as="select" custom onChange={e => this.setState({ toSubject: e.target.value })}>
                                        <option>Selecione um assunto</option>
                                        <option>Quero ser um investidor!</option>
                                        <option>Quero ser um cliente!</option>
                                        <option>Quero ser parceiro!</option>

                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId="talkMsg" className="center-input">
                                    <Form.Label>Digite sua mensagem</Form.Label>
                                    <Form.Control
                                        required
                                        as="textarea"
                                        rows="3"
                                        onChange={e => this.setState({ toText: e.target.value })}
                                    />
                                </Form.Group>

                                <Form.Group className="center-input">
                                    <Form.Check
                                        label="Desejo receber novidades sobre Merx Energia"
                                        feedback="You must agree before submitting."
                                        style={{fontSize: "14px"}}
                                    />
                                </Form.Group>


                                <div style={{display: "flex", justifyContent: "center", marginTop: "40px", width: "300px"}}>
                                    <Button className="btn-team register-button register-cell" type="submit">
                                        Enviar
                                    </Button>
                                </div>

                                <Form.Group controlId="formGroupFooter">

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

