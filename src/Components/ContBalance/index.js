import React from 'react';

export default function ConsumeGraph(){


    return(
        <div className="AnaliseTable-container" style={{ justifyContent: "space-between"}}>
            <div className="consume-header">
                <p className="consume-title-analise">Balanço mensal</p>
            </div>


            <div style={{display: "flex", justifyContent: "space-around", width: "100%", padding: "0px 20px", fontSize: "14px"}}>
                <p style={{textAlign: "start", width: "50%"}}>Energia Contratada</p>
                <p style={{textAlign: "right", width: "50%"}}>186,74 MWh</p>
            </div>

            <div style={{display: "flex", justifyContent: "space-around", width: "100%", padding: "0px 20px", fontSize: "14px"}}>
                <p style={{textAlign: "start", width: "50%"}}>Energia Consumida</p>
                <p style={{textAlign: "right", width: "50%"}}>192,35 MWh</p>
            </div>

            <div style={{display: "flex", justifyContent: "space-around", width: "100%", padding: "0px 20px", fontSize: "14px"}}>
                <p style={{textAlign: "start", width: "50%"}}>Sobra/Déficit</p>
                <p style={{textAlign: "right", width: "50%"}}>-5,61 MWh</p>
            </div>
            <div style={{display: "flex", justifyContent: "center", width: "100%", fontSize: "14px"}}>
                <b style={{textAlign: "center"}}>Subcontratado</b>
            </div>
                
        </div>
    );
}