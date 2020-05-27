import React, { Component } from 'react';
import './style.css';
import {Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import EmailModal from '../../Components/EmailModal/index'




class Team extends Component {

    loginModalRef = (obj) => { 
        this.showModal = obj && obj.handleShow 
    }

    onLoginClick = () => {
        this.showModal();
    }


    render(){
        return(
            <Container fluid className="container-team">
                <EmailModal ref={this.loginModalRef} ></EmailModal>
                <Row className="linhaTeam">
                    <Col className="col-team" sm={4}>
                        <h1 className="title-revolution">
                            Faça parte da MERX
                        </h1>
                        <p className="subtitle-team">
                            Com a MERX, você trabalha com uma empresa séria, focada em oferecer excelência na qualidade de seus produtos e serviços
                        </p>
                            
                    </Col>
    
                    <Col className="col-team2" sm={8}>
                        <div className="buttons">
                            <div className="beClient">
                                <span className="spanClass">Invista em um dos negócios que mais crescem no Brasil</span>
                                <Fade right>
                                    <a onClick={this.onLoginClick} href="#email" className="btn-tem btn-team">
                                        Quero ser um investidor
                                    </a>
                                </Fade>
                            </div>
                            <div className="beClient">
                                <span className="spanClass">Suas necessidades de forma personalizada e objetiva</span>
                                <Fade right>
                                    <a onClick={this.onLoginClick} href="#email" className="btn-tem btn-team">
                                        Quero ser um cliente
                                    </a>
                                </Fade>
                            </div>
                            <div className="beClient">
                                <span className="spanClass">Leve nossas soluções para seus clientes</span>
                                <Fade right>
                                    <a onClick={this.onLoginClick} href="#email" className="btn-tem btn-team">
                                        Quero ser parceiro
                                    </a>
                                </Fade>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );

    }
}

export default Team;