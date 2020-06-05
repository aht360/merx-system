import React, { Component }  from 'react';

import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


class App extends Component{

    constructor(props){
        super();
        
        this.state = {
            data: {},
        }

        this.setState({ data: props.data })
    }

    render(){

        const data = this.state.data;
        var data_graph = []
        data_graph = [
            {
                name: 'Jan/19', lastro: data.Jan19, amt: 2400,
            },
            {
                name: 'Fev/19', lastro: data.Fev19 , amt: 2210,
            },
            {
                name: 'Mar/19', lastro: data.Mar19 , amt: 2210,
            },
            {
                name: 'Abr/19', lastro: data.Abr19 , amt: 2210,
            },
            {
                name: 'Mai/19', lastro: data.Mai19 , amt: 2210,
            },
            {
                name: 'Jun/19', lastro: data.Jun19 , amt: 2210,
            },
            {
                name: 'Jul/19', lastro: data.Jul19 , amt: 2210,
            },
            {
                name: 'Ago/19', lastro: data.Ago19 , amt: 2210,
            },
            {
                name: 'Set/19', lastro: data.Set19 , amt: 2210,
            },
            {
                name: 'Out/19', lastro: data.Out19 , amt: 2210,
            },
            {
                name: 'Nov/19', lastro: data.Nov19 , amt: 2210,
            },
            {
                name: 'Dez/19', lastro: data.Nov19 , amt: 2210,
            },
    
        ]

              
        return (

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
        );
        
    }
}


export default App;
