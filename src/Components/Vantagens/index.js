import React from 'react';
import './style.css';
import Fade from 'react-reveal/Fade';

export default function Vantagens(){

    return(
        <div>
            <div className="container-vantagens">
                <div className="title-box-vantagens">
                    <h1 className="title-vantagens">Veja as diferenças</h1>
                    <p className="subtitle-vantagens">
                        Vantagens e desvantagens 
                    </p>
                </div>
            </div>

            <div className="container-table">
                
                <div className="line-vant">
                    <div className="col-vant">
                        <Fade left>
                            <b className="table-title-a border-left">ACR – AMBIENTE DE CONTRATAÇÃO REGULADA</b>
                        </Fade>
                    </div>
                    <div className="col-vant">
                        <Fade right>
                            <b className="table-title-a border-right">ACL – AMBIENTE DE CONTRATAÇÃO LIVRE</b>
                        </Fade>
                    </div>
                </div>
                
                <div className="line-vant">
                    <div className="col-vant">
                        <Fade left>
                        <p className="o-table-item">EXCEDENTE EM CRÉDITO (VALIDADE 5 ANOS)</p>
                        </Fade>
                    </div>
                    <div className="col-vant">
                        <Fade right>
                        <p className="o-table-item">EXCEDENTE EM CASH (MENSAL)</p>
                            
                        </Fade>
                    </div>
                </div>

                <div className="line-vant">
                    <div className="col-vant">
                        <Fade left>
                        <p className="o-table-item">LIMITAÇÃO TERRITORIAL</p>
                        </Fade>
                    </div>
                    <div className="col-vant">
                        <Fade right>
                            
                        <p className="o-table-item">SEM LIMITAÇÃO TERRITORIAL</p>
                        </Fade>
                    </div>
                </div>

                <div className="line-vant">
                    <div className="col-vant">
                        <Fade left>
                        <p className="o-table-item">PAGA O VALOR CHEIO DA DEMANDA CONTRATADA (GERADOR E CONSUMIDOR)</p>
                        </Fade>
                    </div>
                    <div className="col-vant">
                        <Fade right>
                            
                        <p className="o-table-item">DESCONTO NA DEMANDA CONTRATADA (GERADOR E CONSUMIDOR)</p>
                        </Fade>
                    </div>
                </div>

                <div className="line-vant">
                    <div className="col-vant">
                        <Fade left>
                        <p className="o-table-item">INSEGURANÇA JURÍDICA</p>
                        </Fade>
                    </div>
                    <div className="col-vant">
                        <Fade right>
                            
                        <p className="o-table-item">SEGURANÇA JURÍDICA LASTREADA EM LEIS</p>
                        </Fade>
                    </div>
                </div>

                <div className="line-vant">
                    <div className="col-vant">
                        <Fade left>
                        <p className="o-table-item">ISENÇÃO DE ICMS APENAS ATÉ 1MWp (482)</p>
                        </Fade>
                    </div>
                    <div className="col-vant">
                        <Fade right>
                            
                        <p className="o-table-item">MAIOR PRAZO PARA INICIO DE OPERAÇÃO</p>
                        </Fade>
                    </div>
                </div>

                <div className="line-vant">
                    <div className="col-vant">
                        <Fade left>
                        <p className="o-table-item">PREÇOS REGULADOS PELO GOVERNO</p>
                        </Fade>
                    </div>
                    <div className="col-vant">
                        <Fade right>
                            
                        <p className="o-table-item">ISENÇÃO DE ICMS PARA USINAS MESMO CNPJ</p>
                        </Fade>
                    </div>
                </div>

                <div className="line-vant">
                    <div className="col-vant">
                        <Fade left>
                        <p className="o-table-item">VARIAÇÕES DE BANDEIRAS TARIFÁRIAS</p>
                        </Fade>
                    </div>
                    <div className="col-vant">
                        <Fade right>
                            
                        <p className="o-table-item">PREÇOS LIVREMENTE NEGOCIADOS</p>
                        </Fade>
                    </div>
                </div>

                <div className="line-vant">
                    <div className="col-vant">
                        <Fade left>
                        <p className="o-table-item">PERFIL INDICADO PARA GRUPO B</p>
                        </Fade>
                    </div>
                    <div className="col-vant">
                        <Fade right>
                            
                        <p className="o-table-item">NÃO HÁ VARIAÇÃO DE BANDEIRAS TARIFÁRIAS</p>
                        </Fade>
                    </div>
                </div>

                <div className="line-vant">
                    <div className="col-vant">
                        <Fade left>
                        <p className="o-table-item">PARECER E CONSULTA PARA ACESSO</p>
                        </Fade>
                    </div>
                    <div className="col-vant">
                        <Fade right>
                            
                        <p className="o-table-item">PERFIL INDICADO PARA GRUPO A</p>
                        </Fade>
                    </div>
                </div>

                <div className="line-vant">
                    <div className="col-vant">
                        <Fade left>
                        <p className="o-table-item">DIFERENÇA RELEVANTE ENTRE PREÇOS DE PONTA E FORA PONTA</p>
                        </Fade>
                    </div>
                    <div className="col-vant">
                        <Fade right>
                            
                        <p className="o-table-item">PREÇOS MAIS UNIFORMES COM RELAÇÃO A PATAMARES HORÁRIOS</p>
                        </Fade>
                    </div>
                </div>
            </div>

            <div className="textbox-vant">
                <div className="title3">
                    <b className="title32">Realize sua migração com segurança e tranquilidade!</b>
                </div>
                <p>
                Ressalvamos que a autoprodução é uma atuação que exige diversos conhecimentos específicos com relação às normas técnicas e regulatórias, além de profissionais qualificados para analisar cada caso, identificar e sugerir a melhor estratégia para alcançar os benefícios apresentados. A MERX ENERGIA possui uma área dedicada à Gestão de Energia (Geração e Consumidores) e conta com profissionais que conhecem, com profundidade, as legislações, os benefícios e os riscos da autoprodução.  Além de possuir clientes Autoprodutores em sua carteira de clientes, gerando assim uma expertise única para lhe atender.
                </p>
            </div>

        </div>

    )
}


