import React from 'react'

import avatar from '../../Assets/avatar-empty.png'
import blackLogo from '../../Assets/blackLogo.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag } from '@fortawesome/free-solid-svg-icons'


export default function SimulatorVerde(props){

    const inputs = props.inputs
    const ResultCativo = props.resultCat
    const ResultLivre = props.resultLiv
    

    const {cativoDemandaUnica,cativoDemandaUltrapassagem,cativoConsumoPonta,cativoConsumoPontaFora,qtdGerador,
        totalDemandaUnica,totalDemandaUltrapassagem,totalConsumoPonta,totalcativoConsumoPontaFora,totalGerador
        } = ResultCativo

    const {livreDemandaUnica,livreConsumoPonta,livreConsumoPontaFora,livreGerador,energiaACL,
            tarifaLivreDemandaUnica,tarifaLivreConsumoPonta,tarifaLivreConsumoForaPonta,
            custoGeracaoDisel,energiaACLTarifa,totalLivreDemanda,totalLivreConsumoPonta,
            totalLivreConsumoForaPonta,totalLivreGerador,totalEnergiaACL,livreIcms,totalIcms,
            totalCativo,totalLivre,economiaLivre,economiaPorcentagem
    }= ResultLivre


    var qtdGeradorFormated = qtdGerador;

    if(qtdGeradorFormated !== undefined){

        qtdGeradorFormated = formatQtdGerador(qtdGeradorFormated)
    }


    function formatQtdGerador(e){
        var formmated = [];
        var i = 0;
        console.log(e)
        for (let index = 2; index < e.length; index++) {
            
            if(e[index] === '.' && e[index+1] === '0'){
                return formmated;
            }
            if(e[index] !== ','){
                formmated[i] = e[index];
                i++;
            }

        }
        return formmated;
    }

    const{ demanda, demandaFpu, consumoP, consumoPf } = inputs

    return(
        <div className="resultadoSimulacaoContainer">
            <div className="headerResultadoSimulacao">
                <div className="headerLeft">
                    <p className="titleResultadoSimulacao">
                        Resultado Simulação
                    </p>
                    <div className="headerLeftContent">
                        <img src={avatar} alt="avatar" style={{width: '100px'}}/>
                        <div className="simulacaoName">
                            <p className="headerLeftContentTitle">
                                Empresa Principal
                            </p>
                            <p className="headerLeftContentSubTitle">
                                DVM SOLAR
                            </p>
                        </div>
                    </div>
                </div>
                <div className="headerRight">
                    <img src={blackLogo} alt="avatar" className="logoSizeResultado"/>
                    <div className="simulacaoName">
                        <p className="headerRightContentTitle">
                            Mês de referência
                        </p>
                        <p className="headerRightContentSubTitle">
                            Junho/2020
                        </p>
                    </div>
                </div>
            </div>

            <p className="interTitle">
                Custo Médio Mensal
            </p>

            <div className="containerResSimul">
                <p className="containerResSimulTitle">
                    Ambiente Cativo
                </p>
                <div className="ResSimulTableTitle">
                    <p className="ResSimulTable" style={{textAlign: "left"}}>
                        Grandeza Elétrica
                    </p>
                    <p className="ResSimulTable">
                        Unidade
                    </p>
                    <p className="ResSimulTable">
                        Grandezas Faturadas
                    </p>
                    <p className="ResSimulTable">
                        Tarifas
                    </p>
                    <p className="ResSimulTable">
                        Faturado
                    </p>
                </div>

                <div className="ResSimulTableTitle">
                    <p className="ResSimulTableContent" style={{textAlign: "left"}}>
                        Consumo Ponta
                    </p>
                    <p className="ResSimulTableContent">
                        R$/MWh
                    </p>
                    <p className="ResSimulTableContent">
                        {consumoP}
                    </p>
                    <p className="ResSimulTableContent">
                        {cativoConsumoPonta}
                    </p>
                    <p className="ResSimulTableContent">
                        {totalConsumoPonta}
                    </p>
                    
                </div>

                <div className="ResSimulTableTitle">
                    <p className="ResSimulTableContent" style={{textAlign: "left"}}> 
                        Consumo Fora de Ponta
                    </p>
                    <p className="ResSimulTableContent">
                        R$/MWh
                    </p>
                    <p className="ResSimulTableContent">
                        {consumoPf}
                    </p>
                    <p className="ResSimulTableContent">
                        {cativoConsumoPontaFora}
                    </p>
                    <p className="ResSimulTableContent">
                        {totalcativoConsumoPontaFora}
                    </p>
                    
                </div>

                <div className="ResSimulTableTitle">
                    <p className="ResSimulTableContent" style={{textAlign: "left"}}>
                        Demanda
                    </p>
                    <p className="ResSimulTableContent">
                        R$/MWh
                    </p>
                    <p className="ResSimulTableContent">
                        {demanda}
                    </p>
                    <p className="ResSimulTableContent">
                        {cativoDemandaUnica}
                    </p>
                    <p className="ResSimulTableContent">
                        {totalDemandaUnica}
                    </p>
                    
                </div>

                <div className="ResSimulTableTitle">
                    <p className="ResSimulTableContent" style={{textAlign: "left"}}>
                        Demanda Ultrapassagem
                    </p>
                    <p className="ResSimulTableContent">
                        R$/MWh
                    </p>
                    <p className="ResSimulTableContent">
                        {demandaFpu}
                    </p>
                    <p className="ResSimulTableContent">
                        {cativoDemandaUltrapassagem}
                    </p>
                    <p className="ResSimulTableContent">
                        {totalDemandaUltrapassagem}
                    </p>
                    
                </div>

                <div className="ResSimulTableTitle">
                    <p className="ResSimulTableContent" style={{textAlign: "left"}}>
                        Gerador
                    </p>
                    <p className="ResSimulTableContent">
                        R$/MWh
                    </p>
                    <p className="ResSimulTableContent">
                        {qtdGeradorFormated}
                    </p>
                    <p className="ResSimulTableContent">
                        {custoGeracaoDisel}
                    </p>
                    <p className="ResSimulTableContent">
                        {totalGerador}
                    </p>
                    
                </div>

                <div className="ResSimulTableTitle">
                    <p className="ResSimulTableContent" style={{textAlign: "left"}}>
                        Total
                    </p>
                    <p className="ResSimulTableContent">
                        
                    </p>
                    <p className="ResSimulTableContent">
                        
                    </p>
                    <p className="ResSimulTableContent">
                        
                    </p>
                    <p className="ResSimulTableContent">
                        {totalCativo}
                    </p>
                    
                </div>

            </div>

            <div className="containerResSimul">
                <p className="containerResSimulTitle">
                    Custos Adicionais
                </p>
                <div className="ResSimulTableTitle">
                    <p className="ResSimulTable" style={{textAlign: 'left'}}>
                        Grandeza Elétrica
                    </p>
                    <p className="ResSimulTable">
                        Unidade
                    </p>
                    <p className="ResSimulTable">
                        Grandezas Faturadas
                    </p>
                    <p className="ResSimulTable">
                        Tarifas
                    </p>
                    <p className="ResSimulTable">
                        Faturado
                    </p>
                </div>

                <div className="ResSimulTableTitle">
                    <p className="ResSimulTableContent" style={{textAlign: 'left'}}>
                        Bandeira Amarela <FontAwesomeIcon icon={faFlag} className="verticalIcon" style={{color: "#FBFF28"}}/>
                    </p>
                    <p className="ResSimulTableContent">
                        R$/MWh
                    </p>
                    <p className="ResSimulTableContent">
                        {Number(consumoP) + Number(consumoPf)}
                    </p>
                    <p className="ResSimulTableContent">
                        R$13,43
                    </p>
                    <p className="ResSimulTableContent">
                        R${(Number(consumoP) + Number(consumoPf)) * 13.43}
                    </p>
                    
                </div>

                

                <div className="ResSimulTableTitle">
                    <p className="ResSimulTableContent" style={{textAlign: 'left'}}>
                        Bandeira Vermelha 1 <FontAwesomeIcon icon={faFlag} className="verticalIcon" style={{color: "red"}}/>
                    </p>
                    <p className="ResSimulTableContent">
                        R$/MWh
                    </p>
                    <p className="ResSimulTableContent">
                        {Number(consumoP) + Number(consumoPf)}
                    </p>
                    <p className="ResSimulTableContent">
                        R$41,69
                    </p>
                    <p className="ResSimulTableContent">
                        R${(Number(consumoP) + Number(consumoPf)) * 41.69}
                    </p>
                    
                </div>

                <div className="ResSimulTableTitle">
                    <p className="ResSimulTableContent" style={{textAlign: 'left'}}>
                        Bandeira Vermelha 2 <FontAwesomeIcon icon={faFlag} className="verticalIcon" style={{color: "#D10000"}}/>
                    </p>
                    <p className="ResSimulTableContent">
                        R$/MWh
                    </p>
                    <p className="ResSimulTableContent">
                        {Number(consumoP) + Number(consumoPf)}
                    </p>
                    <p className="ResSimulTableContent">
                        R$62,43
                    </p>
                    <p className="ResSimulTableContent">
                        R${(Number(consumoP) + Number(consumoPf)) * 62.43}
                    </p>
                    
                </div>

            </div>


            <div className="containerResSimul">
                <p className="containerResSimulTitle">
                    Ambiente Livre
                </p>
                <div className="ResSimulTableTitle">
                    <p className="ResSimulTable" style={{textAlign: 'left'}}>
                        Grandeza Elétrica
                    </p>
                    <p className="ResSimulTable">
                        Unidade
                    </p>
                    <p className="ResSimulTable">
                        Grandezas Faturadas
                    </p>
                    <p className="ResSimulTable">
                        Tarifas
                    </p>
                    <p className="ResSimulTable">
                        Faturado sem impostos
                    </p>
                </div>

                <div className="ResSimulTableTitle">
                    <p className="ResSimulTableContent" style={{textAlign: 'left'}}>
                        Demanda
                    </p>
                    <p className="ResSimulTableContent">
                        R$/MWh
                    </p>
                    <p className="ResSimulTableContent">
                        {livreDemandaUnica}
                    </p>
                    <p className="ResSimulTableContent">
                        {tarifaLivreDemandaUnica}
                    </p>
                    <p className="ResSimulTableContent">
                        {totalLivreDemanda}
                    </p>
                    
                </div>

                <div className="ResSimulTableTitle">
                    <p className="ResSimulTableContent" style={{textAlign: 'left'}}>
                        Consumo Ponta
                    </p>
                    <p className="ResSimulTableContent">
                        R$/MWh
                    </p>
                    <p className="ResSimulTableContent">
                        {livreConsumoPonta}
                    </p>
                    <p className="ResSimulTableContent">
                        {tarifaLivreConsumoPonta}
                    </p>
                    <p className="ResSimulTableContent">
                        {totalLivreConsumoPonta}
                    </p>
                    
                </div>

                <div className="ResSimulTableTitle">
                    <p className="ResSimulTableContent" style={{textAlign: 'left'}}>
                        Consumo Fora de Ponta
                    </p>
                    <p className="ResSimulTableContent">
                        R$/MWh
                    </p>
                    <p className="ResSimulTableContent">
                        {livreConsumoPontaFora}
                    </p>
                    <p className="ResSimulTableContent">
                        {tarifaLivreConsumoForaPonta}
                    </p>
                    <p className="ResSimulTableContent">
                        {totalLivreConsumoForaPonta}
                    </p>
                    
                </div>

                <div className="ResSimulTableTitle">
                    <p className="ResSimulTableContent" style={{textAlign: 'left'}}>
                        Gerador
                    </p>
                    <p className="ResSimulTableContent">
                        R$/MWh
                    </p>
                    <p className="ResSimulTableContent">
                        {livreGerador}
                    </p>
                    <p className="ResSimulTableContent">
                        {custoGeracaoDisel}
                    </p>
                    <p className="ResSimulTableContent">
                        {totalLivreGerador}
                    </p>
                    
                </div>

                <div className="ResSimulTableTitle">
                    <p className="ResSimulTableContent" style={{textAlign: 'left'}}>
                        Energia ACL
                    </p>
                    <p className="ResSimulTableContent">
                        R$/MWh
                    </p>
                    <p className="ResSimulTableContent">
                        {energiaACL}
                    </p>
                    <p className="ResSimulTableContent">
                        {energiaACLTarifa}
                    </p>
                    <p className="ResSimulTableContent">
                        {totalEnergiaACL}
                    </p>
                    
                </div>

                <div className="ResSimulTableTitle">
                    <p className="ResSimulTableContent" style={{textAlign: 'left'}}>
                        ICMS
                    </p>
                    <p className="ResSimulTableContent">
                        R$/MWh
                    </p>
                    <p className="ResSimulTableContent">
                        -
                    </p>
                    <p className="ResSimulTableContent">
                        {livreIcms}
                    </p>
                    <p className="ResSimulTableContent">
                        {totalIcms}
                    </p>
                    
                </div>

                <div className="ResSimulTableTitle">
                    <p className="ResSimulTableContent" style={{textAlign: 'left'}}>
                        Total Livre
                    </p>
                    <p className="ResSimulTableContent">
                        R$/MWh
                    </p>
                    <p className="ResSimulTableContent">
                        -
                    </p>
                    <p className="ResSimulTableContent">
                        -
                    </p>
                    <p className="ResSimulTableContent">
                        {totalLivre}
                    </p>
                    
                </div>

                <div className="ResSimulTableTitle">
                    <p className="ResSimulTableContent" style={{textAlign: 'left'}}>
                        Economia
                    </p>
                    <p className="ResSimulTableContent">
                        R$/MWh
                    </p>
                    <p className="ResSimulTableContent">
                        -
                    </p>
                    <p className="ResSimulTableContent">
                        -
                    </p>
                    <p className="ResSimulTableContent">
                        {economiaLivre}
                    </p>
                    
                </div>

                <div className="ResSimulTableTitle">
                    <p className="ResSimulTableContent" style={{textAlign: 'left'}}>
                        Porcentagem
                    </p>
                    <p className="ResSimulTableContent">
                        R$/MWh
                    </p>
                    <p className="ResSimulTableContent">
                        -
                    </p>
                    <p className="ResSimulTableContent">
                        -
                    </p>
                    <p className="ResSimulTableContent">
                        {economiaPorcentagem}
                    </p>
                    
                </div>

            </div>

        </div>

    )
    
}
