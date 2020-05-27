import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import BlackLogo from "../../Assets/blackLogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './style.css';


class LoginModal extends React.Component {
  constructor(props, context){
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
        show: false
    }
}

handleShow() {
    console.log(this.state)
    this.setState({ show: true })
}
handleClose(){
    this.setState({ show: false })
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
                        <Form>

                            <Form.Group controlId="formGroupHeader">

                                <Form.Label className="text-center loginTitle" style={{width: "100%"}}><img alt="logo" src={BlackLogo} className="logo-login"></img></Form.Label>
                                <Form.Label className="text-center loginTitle" style={{width: "100%", fontWeight: "bold"}}>Fale conosco!</Form.Label>
                                
                            </Form.Group>

                            <Form.Group controlId="talkName" className="center-input">
                                <Form.Label>Nome completo</Form.Label>
                                <Form.Control
                                    required
                                    type="text" 
                                    size="sm" 
                                    placeholder="" 
                                />
                            </Form.Group>
                            
                            <Form.Group controlId="talkEmail" className="center-input">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control
                                    required
                                    type="email" 
                                    size="sm" 
                                    placeholder="" 
                                />
                            </Form.Group>

                            <Form.Group controlId="talkSubject" className="center-input">
                                <Form.Label>Assunto</Form.Label>

                                <Form.Control as="select" custom >

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

