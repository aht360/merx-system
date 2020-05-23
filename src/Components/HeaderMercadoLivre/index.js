import React from 'react';
import mlHeader from '../../Assets/ml-header.png';
import Fade from 'react-reveal/Fade';
import './style.css';

export default function HeaderMercadoLivre(){
    return(
        <div className="container-ml-header">
            <div className="textBox-ml-header">
                <Fade top delay={500}>
                    <h1 className="title-ml-header">
                        Entenda mais sobre a história do Mercado Livre de Energia Elétrica
                    </h1>
                </Fade>
                <Fade bottom delay={500}>
                    <p className="subtitle-ml-header">
                        Em 1990 com a reformulação do setor elétrico, que expôs geração e comercialização de energia a livre competição, teve como um de seus principais objetivos atrair investidores ao mercado de energia brasileiro, por meio de investimento em empresas privadas, viabilizando, assim, a expansão da oferta de energia elétrica ao sistema.
                    </p>
                </Fade>
            </div>
            <div className="imgBox-ml-header">
                <Fade right delay={1000}>
                    <img className="imgSize-autoproducao" src={mlHeader} alt="pc"/>
                </Fade>
            </div>
        </div>
    );
}