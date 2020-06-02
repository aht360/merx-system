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
        const { NomeAgente } = this.state;
        try {
            var response = await api.post("/DadosConsumo", { NomeAgente });
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
                        <div style={{display: "flex", flexDirection: "column", marginTop: "50px", backgroundColor: "white", width: "1400px", padding: "30px", borderRadius: "10px", boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.06)"}}>
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                <p style={{fontSize: "30px", fontWeight: "bold"}}>Gráfico Consumo</p>
                            </div>
                            
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", borderBottom: "solid", borderWidth: '1px', fontSize: "12px"}}>
                                <p style={{width: "100px"}}>Cód Perfil</p>
                                <p style={{width: "100px"}}>Patamar</p>
                                <p style={{width: "100px"}}>Jan19</p>
                                <p style={{width: "100px"}}>Fev19</p>
                                <p style={{width: "100px"}}>Mar19</p>
                                <p style={{width: "100px"}}>Abr19</p>
                                <p style={{width: "100px"}}>Mai19</p>
                                <p style={{width: "100px"}}>Jun19</p>
                                <p style={{width: "100px"}}>Jul19</p>
                                <p style={{width: "100px"}}>Ago19</p>
                                <p style={{width: "100px"}}>Set19</p>
                                <p style={{width: "100px"}}>Out19</p>
                                <p style={{width: "100px"}}>Nov19</p>
                                <p style={{width: "100px"}}>Dez19</p>
                            </div>
                            {
                            this.state.data.map(item => (
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", borderBottom: "solid", borderWidth: '1px', fontSize: "12px"}}>
                                    <p style={{width: "100px"}}>{item.CodPerfil}</p>
                                    <p style={{width: "100px"}}>{item.Patamar}</p>
                                    <p style={{width: "100px"}}>{item.Jan19}</p>
                                    <p style={{width: "100px"}}>{item.Fev19}</p>
                                    <p style={{width: "100px"}}>{item.Mar19}</p>
                                    <p style={{width: "100px"}}>{item.Abr19}</p>
                                    <p style={{width: "100px"}}>{item.Mai19}</p>
                                    <p style={{width: "100px"}}>{item.Jun19}</p>
                                    <p style={{width: "100px"}}>{item.Jul19}</p>
                                    <p style={{width: "100px"}}>{item.Ago19}</p>
                                    <p style={{width: "100px"}}>{item.Set19}</p>
                                    <p style={{width: "100px"}}>{item.Out19}</p>
                                    <p style={{width: "100px"}}>{item.Nov19}</p>
                                    <p style={{width: "100px"}}>{item.Dez19}</p>
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
