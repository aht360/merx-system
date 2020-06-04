import React, { Component }  from 'react';
import api from '../../Services/apiSimulation'

import './style.css';

class App extends Component{

    constructor(props){
        super();
        
        this.state = {
            NomeAgente: props.nome,
            data: [],
            erro: false
        }
    }

    async componentDidMount() {
        const { NomeAgente } = this.state
        try {
            const response = await api.post("/DadosCadastrais", { NomeAgente });
            this.setState({data: response.data});
            
            if(response.data.length !== 0){
                this.setState({erro: true});

            }

        } catch (err) {
            alert('erro ao se comunicar com o bd')
            this.setState({erro: true});
        }
    }


    render(){        

        return(
            <div>
                { this.state.data[0] !== undefined && 
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
        );

    }
}


export default App;
