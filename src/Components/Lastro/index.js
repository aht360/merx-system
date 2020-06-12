import React, { Component }  from 'react';
import api from '../../Services/apiSimulation'

import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class App extends Component{

    constructor(props){
        super();
        
        this.state = {
            NomeAgente: props.nome,
            data: [],
            consumo: [],
            erro: false
        }
    }

    async componentDidMount() {
        const { NomeAgente } = this.state
        var response
        var Sigla
        
        try {
            response = await api.post("/DadosCadastrais", { NomeAgente });
            
            Sigla = response.data[0].SiglaAgente
            
            if(response.data.length !== 0){
                this.setState({erro: true});

            }

        } catch (err) {
            alert('erro ao se comunicar com o bdados')
            this.setState({erro: true});
        }

        response = await api.post("/DadosContrato", { Sigla });

        this.setState({ data: response.data })

        
        response = await api.post("/DadosConsumo", { NomeAgente });
        
        
        var consumoTotal = {
            Jan19: Number(response.data[0].Jan19) + Number(response.data[1].Jan19) + Number(response.data[2].Jan19),
            Fev19: Number(response.data[0].Fev19) + Number(response.data[1].Fev19) + Number(response.data[2].Fev19),
            Mar19: Number(response.data[0].Mar19) + Number(response.data[1].Mar19) + Number(response.data[2].Mar19),
            Abr19: Number(response.data[0].Abr19) + Number(response.data[1].Abr19) + Number(response.data[2].Abr19),
            Mai19: Number(response.data[0].Mai19) + Number(response.data[1].Mai19) + Number(response.data[2].Mai19),
            Jun19: Number(response.data[0].Jun19) + Number(response.data[1].Jun19) + Number(response.data[2].Jun19),
            Jul19: Number(response.data[0].Jul19) + Number(response.data[1].Jul19) + Number(response.data[2].Jul19),
            Ago19: Number(response.data[0].Ago19) + Number(response.data[1].Ago19) + Number(response.data[2].Ago19),
            Set19: Number(response.data[0].Set19) + Number(response.data[1].Set19) + Number(response.data[2].Set19),
            Out19: Number(response.data[0].Out19) + Number(response.data[1].Out19) + Number(response.data[2].Out19),
            Nov19: Number(response.data[0].Nov19) + Number(response.data[1].Nov19) + Number(response.data[2].Nov19),
            Dez19: Number(response.data[0].Dez19) + Number(response.data[1].Dez19) + Number(response.data[2].Dez19),
        }
        

        this.setState({ consumo: consumoTotal })
        

    }


    render(){
        
        const { data, consumo } = this.state;
        const lastro = {
            Jan19: ((Number(data.Jan19) * 744) - Number(consumo.Jan19)) ,
            Fev19: ((Number(data.Fev19) * 672) - Number(consumo.Fev19)) ,
            Mar19: ((Number(data.Mar19) * 720) - Number(consumo.Mar19)) ,
            Abr19: ((Number(data.Abr19) * 744) - Number(consumo.Abr19)),
            Mai19: ((Number(data.Mai19) * 744) - Number(consumo.Mai19)),
            Jun19: ((Number(data.Jun19) * 720) - Number(consumo.Jun19)),
            Jul19: ((Number(data.Jul19) * 744) - Number(consumo.Jul19)) ,
            Ago19: ((Number(data.Ago19) * 744) - Number(consumo.Ago19)) ,
            Set19: ((Number(data.Set19) * 720) - Number(consumo.Set19)) ,
            Out19: ((Number(data.Out19) * 744) - Number(consumo.Out19)) ,
            Nov19: ((Number(data.Nov19) * 720) - Number(consumo.Nov19)) ,
            Dez19: ((Number(data.Dez19) * 744) - Number(consumo.Dez19)) ,
        }
        
        const data_graph = [
            {
                name: 'Jan/19', lastro: lastro.Jan19,
            },
            {
                name: 'Fev/19', lastro: lastro.Fev19 ,
            },
            {
                name: 'Mar/19', lastro: lastro.Mar19 ,
            },
            {
                name: 'Abr/19', lastro: lastro.Abr19 ,
            },
            {
                name: 'Mai/19', lastro: lastro.Mai19 ,
            },
            {
                name: 'Jun/19', lastro: lastro.Jun19 ,
            },
            {
                name: 'Jul/19', lastro: lastro.Jul19 ,
            },
            {
                name: 'Ago/19', lastro: lastro.Ago19 ,
            },
            {
                name: 'Set/19', lastro: lastro.Set19 ,
            },
            {
                name: 'Out/19', lastro: lastro.Out19 ,
            },
            {
                name: 'Nov/19', lastro: lastro.Nov19 ,
            },
            {
                name: 'Dez/19', lastro: lastro.Nov19 ,
            },
    
        ]

    

        return(
            <div>
                { data_graph !== [] &&
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", color: "black"}}>
                        <div style={{display: "flex", flexDirection: "column", marginTop: "50px", backgroundColor: "white", width: "1200px", padding: "30px", borderRadius: "10px", boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.06)"}}>
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                <p style={{fontSize: "30px", fontWeight: "bold"}}>Lastro</p>
                            </div>
                            
                            <BarChart
                                width={1200}
                                height={400}
                                data={data_graph}
                                margin={{
                                    top: 5, right: 30, left: 0, bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="lastro" fill="#69b4ff" />
                            </BarChart>

                            <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                {
                                    data_graph.map(item => (
                                        <p style={{width: '100px', fontWeight: 'bold'}} >{item.name}</p>
                                    ))
                                }
                            </div>
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                {
                                    data_graph.map(item => (
                                        <p style={{width: '100px'}} >{parseFloat(item.lastro.toFixed(2)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                                    ))
                                }
                            </div>
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                
                                <p style={{width: '100px'}} ><b>TOTAL: </b>{parseFloat(data_graph[0].lastro + data_graph[1].lastro + data_graph[2].lastro + data_graph[3].lastro + data_graph[4].lastro + data_graph[5].lastro + data_graph[6].lastro + data_graph[7].lastro + data_graph[8].lastro + data_graph[9].lastro + data_graph[10].lastro + data_graph[11].lastro).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                            </div>
                            
                        </div>
                    </div>
                }
            </div>
        );

    }
}


export default App;
