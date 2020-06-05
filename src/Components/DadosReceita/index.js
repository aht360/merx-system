import React, { Component }  from 'react';
import api from '../../Services/apiSimulation';
import apiReceita from '../../Services/apiReceita';

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

    async componentDidMount(){

        var my_cnpj;

        const { NomeAgente } = this.state

        try {
            const response = await api.post("/DadosCadastrais", { NomeAgente });
            
            my_cnpj = response.data[0].CnpjAgente;

            if(my_cnpj.length < 14) my_cnpj = '0' + my_cnpj;
            

            if(response.data.length !== 0){
                this.setState({erro: true});

            }

        } catch (err) {
            alert('erro ao se comunicar com o bdados')
            this.setState({erro: true});
        }

        const dataReceita = await apiReceita.get(`/${my_cnpj}`);
        this.setState({ data: dataReceita.data })

    }


    render(){        

        const { data } = this.state;

        return(
            <div>
                { this.state.data !== undefined && 
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", color: "black"}}>
                    <div style={{display: "flex", flexDirection: "column", marginTop: "50px", backgroundColor: "white", width: "1200px", padding: "30px", borderRadius: "10px", boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.06)"}}>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            <p style={{fontSize: "30px", fontWeight: "bold"}}>Dados da empresa:</p>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", borderBottom: "solid", borderWidth: '1px'}}>
                            <div style={{display: "flex", flexDirection: "row", alignItems: "baseline", width: '600px', justifyContent: "center"}}>
                                <p style={{fontWeight: "bold", fontSize: "22px"}}>Nome: </p>
                                <p style={{fontSize: "18px", marginLeft: "10px"}}>{data.nome}</p>
                            </div>
                            <div style={{display: "flex", flexDirection: "row", alignItems: "baseline", width: '600px',  justifyContent: "center"}}>
                                <p style={{fontWeight: "bold", fontSize: "22px"}}>UF: </p>
                                <p style={{fontSize: "18px", marginLeft: "10px"}}>{data.uf}</p>
                            </div>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", borderBottom: "solid", borderWidth: '1px'}}>
                            <div style={{display: "flex", flexDirection: "row", alignItems: "baseline", width: '300px'}}>
                                <p style={{fontWeight: "bold", fontSize: "22px"}}>Bairro: </p>
                                <p style={{fontSize: "18px", marginLeft: "10px"}}>{data.bairro}</p>
                            </div>
                            <div style={{display: "flex", flexDirection: "row", alignItems: "baseline", width: '300px'}}>
                                <p style={{fontWeight: "bold", fontSize: "22px"}}>CEP: </p>
                                <p style={{fontSize: "18px", marginLeft: "10px"}}>{data.cep}</p>
                            </div>
                            <div style={{display: "flex", flexDirection: "row", alignItems: "baseline", width: '300px'}}>
                                <p style={{fontWeight: "bold", fontSize: "22px"}}>Municipio: </p>
                                <p style={{fontSize: "18px", marginLeft: "10px"}}>{data.municipio}</p>
                            </div>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", borderBottom: "solid", borderWidth: '1px'}}>
                            <div style={{display: "flex", flexDirection: "row", alignItems: "baseline", width: '300px'}}>
                                <p style={{fontWeight: "bold", fontSize: "22px"}}>Abertura: </p>
                                <p style={{fontSize: "18px", marginLeft: "10px"}}>{data.abertura}</p>
                            </div>
                            <div style={{display: "flex", flexDirection: "row", alignItems: "baseline", width: '300px'}}>
                                <p style={{fontWeight: "bold", fontSize: "22px"}}>Tipo: </p>
                                <p style={{fontSize: "18px", marginLeft: "10px"}}>{data.tipo}</p>
                            </div>
                            <div style={{display: "flex", flexDirection: "row", alignItems: "baseline", width: '300px'}}>
                                <p style={{fontWeight: "bold", fontSize: "22px"}}>CNPJ: </p>
                                <p style={{fontSize: "18px", marginLeft: "10px"}}>{data.cnpj}</p>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>
        );

    }
}


export default App;
