import React, { Component }  from 'react';
import NavBar from '../../Components/Navbar/index';
import Footer from '../../Components/Footer/index';
import { Form } from 'react-bootstrap';
import './style.css';


import api from '../../Services/apiSimulation'




class App extends Component{

    state = {
        SiglaAgente: "",
        data: [],
        show: false
    };


    handleSearch = async e => {
        e.preventDefault();
        var { SiglaAgente } = this.state;
        SiglaAgente = SiglaAgente.toUpperCase();
        
        if (!SiglaAgente) {
            alert("Preencha todos os dados para fazer a pesquisa");
        } 
        else {
            try {
                
                const response = await api.post("/DadosCadastrais", { SiglaAgente });
                
                console.log(response.data.length)
                
                this.setState({data: response.data});

                if(response.data.length !== 0){
                    this.setState({show: true});

                }
                else{
                    this.setState({show: false});
                    alert('Não existe empresa com essa sigla no nosso banco de dados')
                }

            } catch (err) {
                console.log(err);
                alert("Não existe empresa com essa sigla no nosso banco de dados");
                this.setState({show: false});
                
            }
        }

    }

    render(){


        return(
            <div style={{textAlign: "center"}}>
                <NavBar changeColor="false"/>
                <div className="container-pesquisa-master">
                    <h1>Pesquisa Mercado Livre</h1>
                    <Form onSubmit={this.handleSearch}>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Control
                                className="text-center center-input"
                                size="lg"
                                type="text"
                                placeholder="Insira a sigla da empresa"
                                style={{width: "268px"}}
                                onChange={e => this.setState({ SiglaAgente: e.target.value })}
                            />
                        </Form.Group>
        
                        <button className="btn-pesquisaml" type="submit">Pesquisar</button>
                    
                    </Form>


                    {

                    this.state.show === true &&
                    this.state.data[0] !== undefined &&
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", color: "black"}}>
                        <div style={{display: "flex", flexDirection: "column", marginTop: "50px", backgroundColor: "white", width: "1200px", padding: "30px", borderRadius: "10px", boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.06)"}}>
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                <p style={{fontSize: "30px", fontWeight: "bold"}}>Dados CCEE</p>
                            </div>
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", borderBottom: "solid", borderWidth: '1px'}}>
                                <div style={{display: "flex", flexDirection: "row", alignItems: "baseline"}}>
                                    <p style={{fontWeight: "bold", fontSize: "22px"}}>Código do agente: </p>
                                    <p style={{fontSize: "18px", marginLeft: "10px"}}>{this.state.data[0].CodAgente}</p>
                                </div>
                                <div style={{display: "flex", flexDirection: "row", alignItems: "baseline"}}>
                                    <p style={{fontWeight: "bold", fontSize: "22px"}}>Nome: </p>
                                    <p style={{fontSize: "18px", marginLeft: "10px"}}>{this.state.data[0].SiglaAgente}</p>
                                </div>
                                <div style={{display: "flex", flexDirection: "row", alignItems: "baseline"}}>
                                    <p style={{fontWeight: "bold", fontSize: "22px"}}>Categoria: </p>
                                    <p style={{fontSize: "18px", marginLeft: "10px"}}>{this.state.data[0].CategoriaAgente}</p>
                                </div>
                            </div>
                            
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", borderBottom: "solid", borderWidth: '1px'}}>
                                <p style={{width: "200px"}}>Código Perfil</p>
                                <p style={{width: "200px"}}>Sigla</p>
                                <p style={{width: "200px"}}>Classe</p>
                                <p style={{width: "200px"}}>Status</p>
                                <p style={{width: "200px"}}>Submercado</p>
                                <p style={{width: "200px"}}>Perfil Varejista</p>
                            </div>
                            {
                            this.state.data.map(item => (
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", borderBottom: "solid", borderWidth: '1px'}}>
                                    <p style={{width: "200px"}}>{item.CodPerfilAgente}</p>
                                    <p style={{width: "200px"}}>{item.SiglaPerfilAgente}</p>
                                    <p style={{width: "200px"}}>{item.ClassePerfilAgente}</p>
                                    <p style={{width: "200px"}}>{item.StatusPerfilAgente}</p>
                                    <p style={{width: "200px"}}>{item.SubmercadoPerfilAgente}</p>
                                    <p style={{width: "200px"}}>{item.PerfilVarej}</p>
                                </div>
                            ))
                                
                            }
                            
                        </div>
                    </div>

                    

                    }

                </div>

                <Footer />
            </div>
        );

    }
}


export default App;
