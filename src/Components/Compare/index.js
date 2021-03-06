import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import Fade from 'react-reveal/Fade';
import { Nav } from 'react-bootstrap'




import './style.css';

export default function Compare(){

    return(
        <div className="row-compare">
            
            <div className="column-compare margin-both">

                <div className="text-box-compare">

                    <h2 className="compare-h">Mercado Livre de Energia</h2>
                    <p className="compare-p">É um ambiente de comercialização onde o consumidor pode escolher seu fornecedor de energia elétrica, além de receber vários incentivos e até vender sua energia excedente. As economias médias chegam a 30% dependendo do perfil de consumo e outras condições específicas de cada consumidor.</p>
                    <Fade left delay={1000}>
                        <Nav.Link href="mercado-livre" className="btn-compare">
                            Saiba Mais <FontAwesomeIcon icon={faArrowCircleRight} className="verticalIcon"/>
                        </Nav.Link>
                    </Fade>

                </div>

            </div>

            <div className="line"></div>

            <div className="column-compare">

                <div className="text-box-compare">

                    <h2 className="compare-h">Autoproducão de energia</h2>
                    <p className="compare-p">Os autoprodutores são outra classe de agente que atua no ambiente de contratação livre, eles são consumidores que recebem a concessão 
                            ou autorização para produção de energia elétrica destinada ao seu próprio consumo.</p>
                    <Fade right delay={1000}>
                        <Nav.Link href="autoproducao" className="btn-compare correctMarginTop">
                            Saiba Mais <FontAwesomeIcon icon={faArrowCircleRight} className="verticalIcon"/>
                        </Nav.Link>
                    </Fade>

                </div>
                
            </div>

        </div>
        
    );
}