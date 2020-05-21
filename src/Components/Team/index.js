import React from 'react';
import './style.css';
import {Container, Row, Col } from 'react-bootstrap';

export default function Team(){

    return(
        <Container className="container-team">
            <Row className="linhaTeam">
                <Col className="col-team">
                    <h1 className="title-revolution">
                        Faça parte da MERX
                    </h1>
                    <p className="subtitle-team">
                        Com a MERX, você trabalha com uma empresa séria, focada em oferecer excelência na qualidade de seus produtos e serviços
                    </p>
                </Col>

                <Col className="col-team2">
                    <div className="buttons">
                        <div className="beClient">
                            <span className="spanClass">Invista em um dos negócios que mais crescem no Brasil</span>
                            <a href="https://google.com" className="btn-compare btn-team">
                                Quero ser um investidor
                            </a>
                        </div>
                        <div className="beClient">
                            <span className="spanClass">Suas necessidades de forma personalizada e objetiva</span>
                            <a href="https://google.com" className="btn-compare btn-team">
                                Quero ser um cliente
                            </a>
                        </div>
                        <div className="beClient">
                            <span className="spanClass">Leve nossas soluções para seus clientes</span>
                            <a href="https://google.com" className="btn-compare btn-team">
                                Quero ser parceiro
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}