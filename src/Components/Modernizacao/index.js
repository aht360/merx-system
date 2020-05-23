import React from 'react';
import './style.css';
import Fade from 'react-reveal/Fade';

export default function Modernizacao (){
    return(
        <div className="container-modernizacao">
            <div className="titleBox-modernizacao">
                <h1 className="title-modenizacao">O marco na modernização</h1>
                <p className="subtitle-modernizacao">Setor elétrico</p>
            </div>

            <div className="textBox-modernizacao">
                <p className="text-modernizacao correct-height">
                    Em busca de incentivar a abertura do mercado para maior participação do mercado livre de energia, a luz da CP33 (Consulta Pública 33), o mercado irá se expandir com a evolução dos seguintes temas:
                </p>

                <div className="container-table">
                    
                    <div className="line-vant">
                        <div className="col-vant">
                            <Fade left>
                                <b className="table-title">Principais propostas</b>
                            </Fade>
                        </div>
                        <div className="col-vant">
                            <Fade right>
                                <b className="table-title align-table">Etapas abertura</b>
                            </Fade>
                        </div>
                    </div>
                    
                    <div className="line-vant">
                        <div className="col-vant">
                            <Fade left>
                            <p className="table-item">Abertura do mercado livre de energia elétrica</p>
                            </Fade>
                        </div>
                        <div className="col-vant">
                            <Fade right>
                            <p className="table-item">2000 kW em 1º.01.2020</p>
                                
                            </Fade>
                        </div>
                    </div>

                    <div className="line-vant">
                        <div className="col-vant">
                            <Fade left>
                            <p className="table-item">Consumidor residencial escolher seu próprio fornecedor de energia</p>
                            </Fade>
                        </div>
                        <div className="col-vant">
                            <Fade right>
                                
                            <p className="table-item">1500 kW em 1º.01.2021</p>
                            </Fade>
                        </div>
                    </div>

                    <div className="line-vant">
                        <div className="col-vant">
                            <Fade left>
                            <p className="table-item">Otimização do mercado de curto prazo (MCP)</p>
                            </Fade>
                        </div>
                        <div className="col-vant">
                            <Fade right>
                                
                            <p className="table-item">1000 kW em 1º.01.2022</p>
                            </Fade>
                        </div>
                    </div>

                    <div className="line-vant">
                        <div className="col-vant">
                            <Fade left>
                            <p className="table-item">Separação de atacado e varejo</p>
                            </Fade>
                        </div>
                        <div className="col-vant">
                            <Fade right>
                                
                            <p className="table-item">500 kW em 1º.01.2023</p>
                            </Fade>
                        </div>
                    </div>

                    <div className="line-vant">
                        <div className="col-vant">
                            <Fade left>
                            <p className="table-item">Criação de uma bolsa organizada para negociação de energia</p>
                            </Fade>
                        </div>
                        <div className="col-vant">
                            <Fade right>
                                
                            <p className="table-item destak">Residencial em 1º.01.2024</p>
                            </Fade>
                        </div>
                    </div>

                </div>

                <p className="text-modernizacao">
                    Buscando proporcionar um crescimento equilibrado do mercado, foi proposta essa abertura parcialmente fracionada. A Consulta Pública 33 ainda prevê que o Poder Executivo apresente um plano para acesso ao ambiente livre também para os consumidores conectados na baixa tensão (Residencial).
                </p>
            </div>

        </div>
    );
}
