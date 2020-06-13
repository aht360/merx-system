import React, {Component} from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import './style.css';


const data = [
  {name: 'Jan', R$: 10},
  {name: 'Fev', R$: 30},
  {name: 'Mar', R$: 35},
  {name: 'Abr', R$: 38},
  {name: 'Mai', R$: 55},
  {name: 'Jun', R$: 30},
  {name: 'Jul', R$: 20},
  {name: 'Ago', R$: 25},
  {name: 'Set', R$: 43},
  {name: 'Out', R$: 50},
  {name: 'Nov', R$: 47},
  {name: 'Dez', R$: 50},
];

class SimpleLineChart extends Component {
  
    render () {
        return (
            <div className="container-econimyGraph">
                <div className="graphHeader">
                    <b className="title-graphic">Economia Acumulada</b>
                    <p className="subtitle-graphic">12 meses</p>
                </div>
                <div style={{ width: '100%', height: 250 }}>
                    <ResponsiveContainer>
                        <AreaChart 
                            data={data}
                            margin={{ top: 10, right: 50, left: 5, bottom: 0 }}
                        >
                            <defs>
                                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#b0e1ff" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#b0e1ff" stopOpacity={0}/>
                                </linearGradient>
                            </defs>

                            <XAxis dataKey="name"/>

                            <YAxis label={{ value: 'Mil Reais', angle: -90, position: 'insideLeft' }} />

                            <CartesianGrid strokeDasharray="3 3" vertical={false}/>

                            <Tooltip />

                            <Area type="monotone" dataKey="R$" stroke="#0067CC" fillOpacity={1} fill="url(#colorPv)" strokeWidth={4} />

                        </AreaChart>
                    </ResponsiveContainer>
                </div>

            </div>
        );
    }
}

export default SimpleLineChart;