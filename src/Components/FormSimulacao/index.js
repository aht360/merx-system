import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './style.css';

export default function FormSimulacao(){
    return(
        <div className="container-formSimulacao-master">
            <div className="container-formSimulacao">
                <h3 className="dados-title">Dados pessoais</h3>
                <Form>
                    <div className="formLine">
                        <Form.Group controlId="simulationName" style={{width: "400px"}}>
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>

                        <Form.Group controlId="simulationEmail" style={{width: "400px"}}>
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" placeholder="" />
                        </Form.Group>
                    </div>

                    <div className="formLine">
                        <Form.Group controlId="simulationCNPJ" style={{width: "400px"}}>
                            <Form.Label>CNPJ</Form.Label>
                            <Form.Control type="number" placeholder="Somente números" />
                        </Form.Group>

                        <Form.Group controlId="simulationNumber" style={{width: "400px"}}>
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control type="number" placeholder="Somente números" />
                        </Form.Group>
                    </div>

                    <div className="formLine">
                        <p style={{width: "400px", textAlign: "center", borderBottomStyle: "solid", fontWeight: "bold", margin: "30px 0px", color: "#0067CC"}}>Autoprodutor de energia</p>

                        <p style={{width: "400px", textAlign: "center", borderBottomStyle: "solid", fontWeight: "bold", margin: "30px 0px", color: "#0067CC"}}>Mercado Livre de energia</p>
                    </div>

                    <div className="formLine">
                        <Form.Group controlId="simulationCNPJ" style={{width: "400px"}}>
                            <Form.Label>Distribuidora</Form.Label>
                            <Form.Control as="select" value="Choose...">
                                <option>Choose your option</option>
                                <option>Label</option>
                                <option>Label</option>
                                <option>Label</option>
                                <option>Label</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="simulationNumber" style={{width: "400px"}}>
                            <Form.Label>THS</Form.Label>
                            <Form.Control as="select" value="Choose...">
                                <option>Choose your option</option>
                                <option>Label</option>
                                <option>Label</option>
                                <option>Label</option>
                                <option>Label</option>
                            </Form.Control>
                        </Form.Group>
                    </div>

                    <div className="formLine">
                        <Form.Group controlId="simulationCNPJ" style={{width: "400px"}}>
                            <Form.Label>Demanda</Form.Label>
                            <Form.Control as="select" value="Choose...">
                                <option>Choose your option</option>
                                <option>Label</option>
                                <option>Label</option>
                                <option>Label</option>
                                <option>Label</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="simulationNumber" style={{width: "400px"}}>
                            <Form.Label>Demanda FP ULTRAP</Form.Label>
                            <Form.Control as="select" value="Choose...">
                                <option>Choose your option</option>
                                <option>Label</option>
                                <option>Label</option>
                                <option>Label</option>
                                <option>Label</option>
                            </Form.Control>
                        </Form.Group>
                    </div>

                    <div className="formLine">
                        <Form.Group controlId="simulationCNPJ" style={{width: "400px"}}>
                            <Form.Label>Usa gerador no horário de PONTA?</Form.Label>
                            <Form.Control as="select" value="Choose...">
                                <option>Choose your option</option>
                                <option>Label</option>
                                <option>Label</option>
                                <option>Label</option>
                                <option>Label</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="simulationNumber" style={{width: "400px"}}>
                            <Form.Label>Tipo de energia</Form.Label>
                            <Form.Control as="select" value="Choose...">
                                <option>Choose your option</option>
                                <option>Label</option>
                                <option>Label</option>
                                <option>Label</option>
                                <option>Label</option>
                            </Form.Control>
                        </Form.Group>
                    </div>

                    <div style={{display: "flex", justifyContent: "center", marginTop: "40px"}}>
                        <Button className="btn-team register-button register-cell" type="submit">
                            Simular sua economia
                        </Button>
                    </div>

                </Form>
            </div>
        </div>
    );
}