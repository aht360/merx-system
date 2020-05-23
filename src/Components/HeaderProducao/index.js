import React from 'react';
import Lamp from '../../Assets/lamp.png';
import './style.css';
import Fade from 'react-reveal/Fade';

export default function HeaderProducao(){
    
    return(
        <div className="container-ml-header">
            <div className="textBox-ml-header">
                <Fade top delay={500}>
                    <h1 className="title-ml-header">
                        Entenda mais sobre auto produtor de energia elétrica
                    </h1>
                </Fade>
                <Fade bottom delay={500}>
                    <p className="subtitle-ml-header">
                    O Autoprodutor de Energia Elétrica ou APE, é a pessoa ou empresas reunidas em consórcio que recebem concessão ou autorização para produzir energia elétrica destinada ao seu uso exclusivo. Decreto n. 2.003, de 10 setembro de 1996.
                    </p>
                </Fade>
            </div>
            <div className="imgBox-ml-header">
                <Fade right delay={1000}>
                    <img className="imgSize-autoproducao" src={Lamp} alt="pc"/>
                </Fade>
            </div>
        </div>
    );
}