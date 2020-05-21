import React from 'react';
import './style.css';
import Apartament from '../../Assets/apartment.svg'
import Radar from '../../Assets/radar.svg'
import Arrows from '../../Assets/arrows.svg'
import {Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';


export default function Revolution(){

    return(
        <Container fluid className="container-revolution">
            <Row className="marginRow">
                <Col className="col1" sm={5}>
                    <div className="textBoxLeft">
                        <h1 className="title-revolution">
                            A revolução já aconteceu
                        </h1>
                        <p className="subtitle-revolution">
                            A energia muda a forma como você vive.
                        </p>
                    </div>
                </Col>

                <Col sm={7}>
                    <div className="container-icons">
                        <Fade top>
                            <div className="icon-text">
                                <img className="imgRevolution" src={Arrows} alt="Data"/>
                                <span>A quantidade de dados disponível para tomada de decisão já está muito além da capacidade humanada.</span>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="icon-text">
                                <img className="imgRevolution" src={Radar} alt="Track"/>
                                <span>As melhores gestoras globais já usam drones, inteligência artificial, entre outras para ter sucesso no mercado financeiro.</span>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="icon-text">
                                <img className="imgRevolution" src={Apartament} alt="Management"/>
                                <span>E a sua gestora? Ainda compete no mercado usando as mesmas técnicas de 30 anos atrás?</span>                                
                            </div>
                        </Fade>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}