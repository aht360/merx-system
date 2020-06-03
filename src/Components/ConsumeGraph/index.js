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
                <p className="consume-subtitle">Anual MWh</p>
            </div>
            <div className="consume-content">
                <div className="inside-chart">
                    <p style={{color: "#0067CC", fontSize: "32px", fontWeight: "bold"}}>3,86</p>
                    <p style={{color: "#0067CC", fontSize: "12px", fontWeight: "bold"}}>Lastro</p>
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
                    <p><FontAwesomeIcon icon={faArrowCircleRight} className="verticalIcon" style={{color: '#0067CC'}}/> Consumo (MWh)</p>
                    <p><FontAwesomeIcon icon={faArrowCircleRight} className="verticalIcon" style={{color: 'rgb(78, 134, 190)'}}/> Contrato (MWh)</p>
                    <p><FontAwesomeIcon icon={faArrowCircleRight} className="verticalIcon" style={{color: '#CFE7FF'}}/> Take mínimo</p>
                    <p><FontAwesomeIcon icon={faArrowCircleRight} className="verticalIcon" style={{color: '#87C4FF '}}/> Take máximo</p>
                </div>
            </div>
        </div>
    );
}