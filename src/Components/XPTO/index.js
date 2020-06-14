import React, {Component} from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import './style.css';


const data = [
  {name: '1', R$: 3564},
  {name: '2', R$: 3031},
  {name: '3', R$: 3514},
  {name: '4', R$: 3842},
  {name: '5', R$: 5556},
  {name: '6', R$: 3023},
  {name: '7', R$: 2012},
  {name: '8', R$: 2532},
  {name: '9', R$: 4332},
  {name: '10', R$: 5032},
  {name: '11', R$: 4732},
  {name: '12', R$: 5032},
  {name: '13', R$: 1041},
  {name: '14', R$: 3013},
  {name: '15', R$: 3532},
  {name: '16', R$: 3843},
  {name: '17', R$: 5556},
  {name: '18', R$: 3232},
  {name: '19', R$: 2032},
  {name: '20', R$: 2531},
  {name: '21', R$: 4332},
  {name: '22', R$: 5043},
  {name: '23', R$: 4744},
  {name: '24', R$: 5022},
  {name: '25', R$: 1013},
  {name: '26', R$: 3013},
  {name: '27', R$: 3532},
  {name: '28', R$: 3832},
  {name: '29', R$: 5532},
  {name: '30', R$: 3044},
  {name: '31', R$: 2040},
];

class SimpleLineChart extends Component {
  
    render () {
        return (
            <div className="container-econimyGraph" style={{height: "464px"}}>
                <div className="graphHeader">
                    <b className="title-graphic">XPTO</b>
                    <p className="subtitle-graphic">Mensal</p>
                </div>
                <div style={{ width: '100%', height: 250 }}>
                <BarChart
                        width={1180}
                        height={380}
                        data={data}
                        margin={{
                            left: 10
                        }}
                        barSize={5}
                    >
                        <CartesianGrid
                            strokeDasharray="4 4"
                            vertical={false}
                        />
                        <XAxis 
                            dataKey="name"
                            style={{
                                fontFamily: 'Encode Sans',
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                fontSize: '12px',
                                lineHeight: '15px',
                                display: 'flex',
                                alignItems: 'center',
                                letterSpacing: '0.01em',
                                color: '#4C5862',
                            }}
                            
                        />
                        <YAxis 
                            style={{
                                fontFamily: 'Encode Sans',
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                fontSize: '12px',
                                lineHeight: '15px',
                                display: 'flex',
                                alignItems: 'center',
                                letterSpacing: '0.01em',
                                color: '#4C5862'
                            }}
                            
                        />
                        <Tooltip />

                        <Bar
                            dataKey="R$"
                            fill="#0067CC"
                            radius={[5, 5, 0, 0]}
                        />

                    </BarChart>
                    
                </div>

            </div>
        );
    }
}

export default SimpleLineChart;