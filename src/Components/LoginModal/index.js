import React from 'react';
import { Modal } from 'react-bootstrap';
import BlackLogo from "../../Assets/blackLogo.png"
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
            >
                <Modal.Body className="modal-body">
                    <div className="login-container">
                        <form className="login-box">
                            <img alt="logo" src={BlackLogo} className="logo-login"></img>
                            <h1 className="loginTitle">Entrar</h1>
                            <p className="loginText">Vincule o login com o seu Facebook e facilite o seu acesso a MERX. Não postaremos nada em sua página.</p>
                            <button className="fb-button">Entrar com Facebook</button>
                            <p className="divide-text">ou</p>
                            <input className="input-login" type="text" placeholder="Seu login" name="uname" required></input>
                            <input className="input-login buffer-space-login" type="password" placeholder="Sua senha" name="psw" required></input>
                            <button className="fb-button color-change buffer-space-login-2">Continuar</button>

                            <p className="loginText" style={{marginTop: "40px"}}>Não tem conta? <a href="https://google.com" style={{display: "inline", color: "#0067CC"}}>Crie sua conta</a></p>
                            <a href="https://google.com" style={{marginTop: "20px", color: "rgba(64, 64, 64, 0.8)", fontSize: "12px", textDecorationLine: "underline"}}>Esqueceu sua senha?</a>
                            <p style={{marginTop: "20px", fontSize: "12px", color: "rgba(151, 151, 151, 0.8)"}}>MERX's Termos de serviço & Políticas de privacidade</p>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>

        </div>
    )
  }
}
export default LoginModal