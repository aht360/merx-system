import React, { Component }  from 'react';
import NavBar from '../../Components/Navbar/index';
import Footer from '../../Components/Footer/index';
import { Form } from 'react-bootstrap';
import './style.css';


import api from '../../Services/apiSimulation'




class App extends Component{

    state = {
        SiglaAgente: "",
        data: {},
        show: false
    };


    handleSearch = async e => {
        e.preventDefault();
        const { SiglaAgente } = this.state;
        
        if (!SiglaAgente) {
            alert("Preencha todos os dados para fazer a pesquisa");
        } 
        else {
            try {
                
                const response = await api.post("/DadosCadastrais", { SiglaAgente });

                console.log(response);
                alert('pesquisa feita!');
                this.setState({data: response.data});
                this.setState({show: true});
                console.log(this.state.data.NomeAgente);

            } catch (err) {
                
                console.log(err);
                alert("Não existe empresa com essa sigla no nosso banco de dados");
                
            }
        }

    }

    render(){


        return(
            <div className="container-data-master" style={{textAlign: "center"}}>
                <NavBar changeColor="false"/>
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
                <div className="data-ml">
                    <div className="data-ml-row">
                        <p className="data-ml-row-title">Cód. Agente: </p>
                        <p className="data-ml-row-content">{this.state.data.CodAgente}</p>
                    </div>
                    <div className="data-ml-row">
                        <p className="data-ml-row-title">Sigla do Agente: </p>
                        <p className="data-ml-row-content">{this.state.data.SiglaAgente}</p>
                    </div>
                    <div className="data-ml-row">
                        <p className="data-ml-row-title">Nome Empresarial do Agente: </p>
                        <p className="data-ml-row-content">{this.state.data.NomeAgente}</p>
                    </div>
                    <div className="data-ml-row">
                        <p className="data-ml-row-title">CNPJ: </p>
                        <p className="data-ml-row-content">{'0' + this.state.data.CnpjAgente}</p>
                    </div>
                    <div className="data-ml-row">
                        <p className="data-ml-row-title">Cód Perfil de Agente: </p>
                        <p className="data-ml-row-content">{this.state.data.CodPerfilAgente}</p>
                    </div>
                    <div className="data-ml-row">
                        <p className="data-ml-row-title">Classe do Perfil de Agente: </p>
                        <p className="data-ml-row-content">{this.state.data.ClassePerfilAgente}</p>
                    </div>
                    <div className="data-ml-row">
                        <p className="data-ml-row-title">Status do Perfil de Agente: </p>
                        <p className="data-ml-row-content">{this.state.data.StatusPerfilAgente}</p>
                    </div>
                    <div className="data-ml-row">
                        <p className="data-ml-row-title">Categoria do Agente: </p>
                        <p className="data-ml-row-content">{this.state.data.CategoriaAgente}</p>
                    </div>
                    <div className="data-ml-row">
                        <p className="data-ml-row-title">Submercado do Perfil de Agente: </p>
                        <p className="data-ml-row-content">{this.state.data.SubmercadoPerfilAgente}</p>
                    </div>
                    <div className="data-ml-row">
                        <p className="data-ml-row-title">Perfil Varejista: </p>
                        <p className="data-ml-row-content">{this.state.data.PerfilVarej}</p>
                    </div>
                </div>
                }

                <Footer />
            </div>
        );

    }
}


export default App;
