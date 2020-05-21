import React from 'react';
import './style.css';
import Schema from '../../Assets/schema.png';
import Fade from 'react-reveal/Fade';

export default function Main(){

    return(
        <div className="container-schema">
            <div className="textbox-schema">
                <p>Ainda que não seja uma classe nova de agente, a atuação do autoprodutor é comum entre indústrias eletrointensivas, uma vez que os impactos na variação dos preços e sua importância no preço final da produção são mais sensíveis ao insumo energia elétrica. </p>
            
                <p>Estas indústrias foram as primeiras a investirem em uma produção própria de energia elétrica, com propósito específico: garantir a competitividade da atividade industrial por meio de proteção (hedge) ao risco de preço e garantia de suprimento energético. </p>
            
                <p>Adicionalmente, a autoprodução agrega valor estratégico ao produto industrial, ampliando o domínio da indústria sobre o insumo energético (eficiência) e permitindo à empresa seguir uma política interna própria de produção/consumo de energia. </p>
            
                <p>Foram justamente os autoprodutores (consumidores eletrointensivos), que impulsionaram e construíram as grandes hidrelétricas no Brasil, principalmente na época em que tivemos um amplo processo de privatização do setor elétrico, como discutido no setor do mercado livre de energia. </p>
                
            </div>
            <div className="schemaContainer">
                <img className="imgSchema" src={Schema} alt="Data"/>
            </div>
        </div>
    )
}


