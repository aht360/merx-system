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

        const data = this.state.data;
        
        var data_graph = []
        if(data.length > 2){
            data_graph = [
                {
                    name: 'Jan/19', total: Number(data[0].Jan19) + Number(data[1].Jan19) + Number(data[2].Jan19) , amt: 2400,
                },
                {
                    name: 'Fev/19', total: Number(data[0].Fev19) + Number(data[1].Fev19) + Number(data[2].Fev19) , amt: 2210,
                },
                {
                    name: 'Mar/19', total: Number(data[0].Mar19) + Number(data[1].Mar19) + Number(data[2].Mar19) , amt: 2210,
                },
                {
                    name: 'Abr/19', total: Number(data[0].Abr19) + Number(data[1].Abr19) + Number(data[2].Abr19) , amt: 2210,
                },
                {
                    name: 'Mai/19', total: Number(data[0].Mai19) + Number(data[1].Mai19) + Number(data[2].Mai19) , amt: 2210,
                },
                {
                    name: 'Jun/19', total: Number(data[0].Jun19) + Number(data[1].Jun19) + Number(data[2].Jun19) , amt: 2210,
                },
                {
                    name: 'Jul/19', total: Number(data[0].Jul19) + Number(data[1].Jul19) + Number(data[2].Jul19) , amt: 2210,
                },
                {
                    name: 'Ago/19', total: Number(data[0].Ago19) + Number(data[1].Ago19) + Number(data[2].Ago19) , amt: 2210,
                },
                {
                    name: 'Set/19', total: Number(data[0].Set19) + Number(data[1].Set19) + Number(data[2].Set19) , amt: 2210,
                },
                {
                    name: 'Out/19', total: Number(data[0].Out19) + Number(data[1].Out19) + Number(data[2].Out19) , amt: 2210,
                },
                {
                    name: 'Nov/19', total: Number(data[0].Nov19) + Number(data[1].Nov19) + Number(data[2].Nov19) , amt: 2210,
                },
                {
                    name: 'Dez/19', total: Number(data[0].Dez19) + Number(data[1].Dez19) + Number(data[2].Dez19) , amt: 2210,
                },
            ];
        }
              
        return (
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", color: "black"}}>
                <div style={{display: "flex", flexDirection: "column", marginTop: "50px", backgroundColor: "white", width: "1200px", padding: "30px", borderRadius: "10px", boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.06)"}}>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                        <p style={{fontSize: "30px", fontWeight: "bold"}}>Consumo Total</p>
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
                        <Bar dataKey="total" fill="#69b4ff" />
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
                                <p style={{width: '100px'}} >{parseFloat(item.total.toFixed(2))}</p>
                            ))
                        }
                    </div>


                </div>
                    

            </div>
            
        );
        
    }
}


export default App;
