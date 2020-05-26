import React from 'react';

export default function ConsumeGraph(){


    return(
        <div className="AnaliseTable-container">
            <div className="consume-header">
                <p className="consume-title-analise">Balanço mensal</p>
            </div>

            <div style={{display: "flex", flexDirection: "column"}}>

                <div style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
                    <p style={{textAlign: "left"}}>Energia contratada</p>
                    <p style={{textAlign: "center"}}>170,00 MWh</p>
                </div>

                <div style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
                    <p style={{textAlign: "center"}}>Flexibilidade XPTO</p>
                    <p style={{textAlign: "center"}}>170,00 MWh</p>
                </div>

                <div style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
                    <p style={{textAlign: "center"}}>Flexibilidade XPTO 2</p>
                    <p style={{textAlign: "center"}}>170,00 MWh</p>
                </div>
                <div style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
                    <p style={{textAlign: "center"}}>Energia medida</p>
                    <p style={{textAlign: "center"}}>170,00 MWh</p>
                </div>
                <div style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
                    <p style={{textAlign: "center"}}>Perdas (3%)</p>
                    <p style={{textAlign: "center"}}>170,00 MWh</p>
                </div>
                <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
                    <b style={{textAlign: "center"}}>Subcontratado</b>
                </div>
                
            </div>
        </div>
    );
}