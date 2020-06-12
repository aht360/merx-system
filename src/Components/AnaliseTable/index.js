import React from 'react';
import './style.css';

export default function ConsumeGraph(){


    return(
        <div className="AnaliseTable-container">
            <div className="consume-header">
                <p className="consume-title-analise">Análise de contratação</p>
            </div>

            <div style={{display: "flex", flexDirection: "column", fontSize: "14px"}}>

                <div style={{display: "flex", justifyContent: "space-around", width: "100%", padding: "0px 20px"}}>
                    <p style={{textAlign: "start", width: "50%"}}>Energia contratada</p>
                    <p style={{textAlign: "right", width: "50%"}}>163,68 MWh</p>
                </div>

                <div style={{display: "flex", justifyContent: "space-around", width: "100%", padding: "0px 20px"}}>
                    <p style={{textAlign: "start", width: "50%"}}>Flexibilidade XPTO</p>
                    <p style={{textAlign: "right", width: "50%"}}>186,74 MWh</p>
                </div>

                <div style={{display: "flex", justifyContent: "space-around", width: "100%", padding: "0px 20px"}}>
                    <p style={{textAlign: "start", width: "50%"}}>Flexibilidade XPTO 2</p>
                    <p style={{textAlign: "right", width: "50%"}}>147,31 MWh</p>
                </div>
                <div style={{display: "flex", justifyContent: "space-around", width: "100%", padding: "0px 20px"}}>
                    <p style={{textAlign: "start", width: "50%"}}>Energia medida</p>
                    <p style={{textAlign: "right", width: "50%"}}>186,74 MWh</p>
                </div>
                <div style={{display: "flex", justifyContent: "space-around", width: "100%", padding: "0px 20px"}}>
                    <p style={{textAlign: "start", width: "50%"}}>Perdas (3%)</p>
                    <p style={{textAlign: "right", width: "50%"}}>5,60 MWh</p>
                </div>
                <div style={{display: "flex", justifyContent: "space-around", width: "100%", padding: "0px 20px"}}>
                    <p style={{textAlign: "start", width: "50%"}}>Energia Total</p>
                    <p style={{textAlign: "right", width: "50%"}}>192,35 MWh</p>
                </div>
                
            </div>
        </div>
    );
}