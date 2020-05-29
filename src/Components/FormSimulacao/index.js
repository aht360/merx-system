import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './style.css';
import apiSimulation from '../../Services/apiSimulation';

import SimulatorVerde from './SimulatorVerde.js';
import SimulatorAzul from './SimulatorAzul.js';


class formSimulacao extends Component{
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            cnpj: '',
            tel: '',

            distribuidora: '',
            ths: 'VERDE',
            grupoTarifa: 'A4',
            demanda: '',
            demandaFpu: '',
            consumoP: '',
            consumoPf: '',

            
            demandaP: '',
            demandaPu: '',
            

            usaGerador: 'sim',
            geradorACL: 'sim',
            consumoGerador: '',
            custoGeracaoDisel: '',
    
            desconto: '0',
            calc: 'ML',
            
            /*
            icms: '',
            pis: '',
            cofin: '',
    
            potenciaTransformador: '',
            tipoInstal: 'LOCAL',
            criterioUsina: 'TRANSFORMADOR',
    
            inputGeral: '',
            localInstalacao: 'METALICA',
            geracaoEsperada: '',
    
            */

            show: false,

            input: {},
            resultCativo: {},
            resultLivre: {}
            /*
            ape: {}
            */
            
        }
        
    }

    handleSimulation = async e => {

        

        e.preventDefault();

        const planilha = this.state;

        try {

            const results = await apiSimulation.post('simulacao', planilha);
            
            const { input, ResultCativo, ResultLivre } = results.data;
                
            this.setState({ input: input });
            this.setState({ ResultCativo: ResultCativo });
            this.setState({ ResultLivre: ResultLivre });
            this.setState({ show: true });

            console.log(this.state.input)
            console.log(this.state.ResultCativo)
            console.log(this.state.ResultLivre)
            alert('Será enviado para você, um Email com os detalhes da sua simulação.');
            
        
        } catch (err) {
            alert('Erro, tente novamente.');
        }
        
    }


    render(){

        const { input, ResultCativo, ResultLivre, show, ths, calc } = this.state;

        return(
            <div className="container-formSimulacao-master">
                <div className="container-formSimulacao">
                    <h3 className="dados-title">Dados pessoais</h3>
                    <Form onSubmit={this.handleSimulation}>
                        <div className="formLine">
                            <Form.Group controlId="simulationName" style={{width: "400px"}}>
                                <Form.Label>Nome</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=""
                                    onChange={e => this.setState({ name: e.target.value })}
                                />
                            </Form.Group>
    
                            <Form.Group controlId="simulationEmail" style={{width: "400px"}}>
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder=""
                                    onChange={e => this.setState({ email: e.target.value })}
                                />
                            </Form.Group>
                        </div>
    
                        <div className="formLine">
                            <Form.Group controlId="simulationCNPJ" style={{width: "400px"}}>
                                <Form.Label>CNPJ</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Somente números"
                                    onChange={e => this.setState({ cnpj: e.target.value })}
                                />
                            </Form.Group>
    
                            <Form.Group controlId="simulationNumber" style={{width: "400px"}}>
                                <Form.Label>Telefone</Form.Label>
                                <Form.Control
                                type="number"
                                placeholder="Somente números"
                                onChange={e => this.setState({ tel: e.target.value })}
                            />
                            </Form.Group>
                        </div>
    
                        <div className="formLine">
                            <p style={{width: "400px", textAlign: "center", borderBottomStyle: "solid", fontWeight: "bold", margin: "30px 0px", color: "#0067CC"}}>Autoprodutor de energia</p>
    
                            <p style={{width: "400px", textAlign: "center", borderBottomStyle: "solid", fontWeight: "bold", margin: "30px 0px", color: "#0067CC"}}>Mercado Livre de energia</p>
                        </div>
    
                        <div className="formLine">
                            <Form.Group controlId="simulationCNPJ" style={{width: "400px"}}>
                                <Form.Label>Distribuidora</Form.Label>
                                <Form.Control as="select" onChange={e => this.setState({ distribuidora: e.target.value })}>
                                    <option>Escolha uma distribuidora</option>
                                    <option value="CELPE">Celpe</option>
                                    <option value="CEAL">Ceal</option>
                                    <option value="CEMAR">Cemar</option>
                                    <option value="CEPISA">Cepisa</option>
                                    <option value="COELBA">Coelba</option>
                                    <option value="COSERN">Cosern</option>
                                    <option value="ENEL CE">Enel Ce</option>
                                    <option value="EPB">Epb</option>
                                    <option value="ESE">Ese</option>
                                </Form.Control>
                            </Form.Group>
    
                            <Form.Group controlId="simulationNumber" style={{width: "400px"}}>
                                <Form.Label>THS</Form.Label>
                                <Form.Control as="select"  onChange={e => this.setState({ ths: e.target.value })}>
                                    <option value="VERDE">Verde</option>
                                    <option value="AZUL">Azul</option>
                                </Form.Control>
                            </Form.Group>
                        </div>
    
                        <div className="formLine">
                            <Form.Group controlId="simulationCNPJ" style={{width: "400px"}}>
                                <Form.Label>Grupo Tarifário</Form.Label>
                                <Form.Control as="select" onChange={e => this.setState({ grupoTarifa: e.target.value })}>
                                    <option value="A4">A4</option>
                                    <option value="A3">A3</option>
                                </Form.Control>
                            </Form.Group>
    
                            <Form.Group controlId="simulationNumber" style={{width: "400px"}}>
                                <Form.Label>Demanda</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=""
                                    onChange={e => this.setState({ demanda: e.target.value.replace(',','.') })}
                                    require
                                />
                            </Form.Group>
                        </div>
    
                        <div className="formLine">
                            <Form.Group controlId="simulationCNPJ" style={{width: "400px"}}>
                                <Form.Label>Demanda Fora Ponta Ultrapassagem</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=""
                                    onChange={e => this.setState({ demandaFpu: e.target.value.replace(',','.') })}
                                    require
                                />
                            </Form.Group>
    
                            <Form.Group controlId="simulationNumber" style={{width: "400px"}}>
                                <Form.Label>Consumo de ponta</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=""
                                    onChange={e => this.setState({ consumoP: e.target.value.replace(',','.') })}
                                    require
                                />
                            </Form.Group>
                        </div>

                        <div className="formLine">
                            <Form.Group controlId="simulationCNPJ" style={{width: "400px"}}>
                                <Form.Label>Consumo fora de ponta</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=""
                                    onChange={e => this.setState({ consumoPf: e.target.value.replace(',','.') })}
                                    require
                                />
                            </Form.Group>
    
                            <Form.Group controlId="simulationNumber" style={{width: "400px"}}>
                                <Form.Label>Usa Gerador</Form.Label>
                                <Form.Control as="select" onChange={e => this.setState({ usaGerador: e.target.value })}>
                                    <option value="sim">Sim</option>
                                    <option value="nao">Não</option>
                                </Form.Control>
                            </Form.Group>
                        </div>

                        { 
                            (this.state.ths === "AZUL")

                            &&

                            <div className="formLine">
                                <Form.Group controlId="simulationCNPJ" style={{width: "400px"}}>
                                    <Form.Label>Demanda Ponta</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder=""
                                        onChange={e => this.setState({ demandaP: e.target.value.replace(',','.') })}
                                        require
                                    />
                                </Form.Group>
        
                                <Form.Group controlId="simulationNumber" style={{width: "400px"}}>
                                    <Form.Label>Demanda Ponta Ultrapassagem</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder=""
                                        onChange={e => this.setState({ demandaPu: e.target.value.replace(',','.') })}
                                        require
                                    />
                                </Form.Group>
                            </div>

                        }

                        <div className="formLine">
                            <Form.Group controlId="simulationCNPJ" style={{width: "400px"}}>
                                <Form.Label>Gerador no ACL</Form.Label>
                                <Form.Control as="select" onChange={e => this.setState({ geradorACL: e.target.value })}>
                                    <option value="sim">Sim</option>
                                    <option value="nao">Não</option>
                                </Form.Control>
                            </Form.Group>
    
                            <Form.Group controlId="simulationNumber" style={{width: "400px"}}>
                                <Form.Label>Consumo Gerador</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=""
                                    onChange={e => this.setState({ consumoGerador: e.target.value.replace(',','.') })}
                                    require
                                />
                                
                            </Form.Group>
                        </div>

                        <div className="formLine">
                            <Form.Group controlId="simulationCNPJ" style={{width: "400px"}}>
                                <Form.Label>Custo da Geração Disel</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=""
                                    onChange={e => this.setState({ custoGeracaoDisel: e.target.value.replace(',','.') })}
                                    require
                                />
                            </Form.Group>
    
                            <Form.Group controlId="simulationNumber" style={{width: "400px"}}>
                                <Form.Label>Desconto</Form.Label>
                                <Form.Control as="select" onChange={e => this.setState({ desconto: e.target.value })}>
                                    <option value="0">Conv</option>
                                    <option value="0.5">50%</option>
                                    <option value="1">100%</option>
                                    
                                </Form.Control>
                                
                            </Form.Group>
                        </div>
    
                        <div style={{display: "flex", justifyContent: "center", marginTop: "40px"}}>
                            <Button className="btn-team register-button register-cell" type="submit">
                                Simular sua economia
                            </Button>
                        </div>
    
                    </Form>

                    <br></br>

                    <div className="table-tarifa-container">
                                        
                        { (show === true) && (ths === "VERDE") && (calc === "ML") &&  <SimulatorVerde inputs={ input } resultCat={ ResultCativo }  resultLiv={ ResultLivre }/>}
                        { (show === true) && (ths === "AZUL") && (calc === "ML") &&  <SimulatorAzul inputs={ input } resultCat={ ResultCativo }  resultLiv={ ResultLivre }/>}
                        
                    </div>

                </div>


            </div>
        );
    }
}

export default formSimulacao;