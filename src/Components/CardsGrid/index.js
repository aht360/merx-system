import React from 'react';
import CardContent from '../CardContent/index';
import './style.css';

export default function CardsGrid(){
    return(
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", marginBottom: "30px"}}>
            <div className="cardsGrid-container">
                <div className="cardsGrid-row">
                    <CardContent date="Maio/2020" content="Faturas e Contribuição Associativa CCEE" status="1" fullWidth="false"/>
                    <CardContent date="Abril/2020" content="Certidão Negativa de Falências, Concordância, Recuperação Judicial ou Extrajudicial" status="2"fullWidth="false" />
                    <CardContent date="Março/2020" content="É necessário reavaliar o documento" status="3" fullWidth="false"/>
                </div>
                <div className="cardsGrid-row">
                    <CardContent date="Fevereiro/2020" content="É necessário reavaliar o documento" status="3" fullWidth="false"/>
                    <CardContent date="Janeiro/2020" content="Faturas e Contribuição Associativa CCEE" status="1" fullWidth="false"/>
                    <CardContent date="Dezembro/2019" content="Faturas e Contribuição Associativa CCEE" status="1" fullWidth="false"/>
                </div>
                <div className="cardsGrid-row">
                    <CardContent date="Novembro/2019" content="Faturas e Contribuição Associativa CCEE" status="1" fullWidth="false"/>
                    <CardContent date="Setembro/2019" content="Faturas e Contribuição Associativa CCEE" status="1" fullWidth="false"/>
                    <CardContent date="Outubro/2019" content="Certidão Negativa de Falências, Concordância, Recuperação Judicial ou Extrajudicial" status="2" fullWidth="false" />
                </div>
            </div>
        </div>
    );
}