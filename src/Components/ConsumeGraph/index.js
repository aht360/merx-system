import React from 'react';
import './style.css';
import { PieChart } from 'react-minimal-pie-chart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'


export default function ConsumeGraph(){


    return(
        <div className="consumeGraph-container">
            <div className="consume-header">
                <p className="consume-title">Previsão de consumo</p>
                <p className="consume-subtitle">100 MWh</p>
            </div>
            <div className="consume-content">
                <div className="inside-chart">
                    <p style={{color: "#0067CC", fontSize: "32px", fontWeight: "bold", lineHeight: '0px'}}>39,86%</p>
                    <p style={{color: "#0067CC", fontSize: "12px", fontWeight: "bold"}}>Consumo</p>
                </div>
                <PieChart
                    className="pieChart-img"
                    data={[
                        { title: 'One', value: 10, color: '#0067CC' },
                        { title: 'Two', value: 15, color: 'rgb(78, 134, 190)' },
                        { title: 'Three', value: 20, color: '#CFE7FF' },
                        { title: 'Four', value: 20, color: '#87C4FF ' },
                    ]}
                    lineWidth={10}
                    animate={true}
                />
                <div style={{display: "flex", flexDirection:"column", transform: "translateY(10px)"}}>
                    <p><FontAwesomeIcon icon={faArrowCircleRight} className="verticalIcon" style={{color: '#0067CC'}}/> 100% Valor Contratado</p>
                    <p><FontAwesomeIcon icon={faArrowCircleRight} className="verticalIcon" style={{color: 'rgb(78, 134, 190)'}}/> -10% Valor min. Contratado</p>
                    <p><FontAwesomeIcon icon={faArrowCircleRight} className="verticalIcon" style={{color: '#CFE7FF'}}/> +10% Valor min. Contratado</p>
                </div>
            </div>
        </div>
    );
}