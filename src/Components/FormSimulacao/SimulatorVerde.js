import React from 'react'
import {Table} from './styled.js'

import avatar from '../../Assets/avatar-empty.png'
import blackLogo from '../../Assets/blackLogo.png'

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


    const{ demanda, demandaFpu, consumoP, consumoPf } = inputs

    return(
        <div className="resultadoSimulacaoContainer">
            <div className="headerResultadoSimulacao">
                <div className="headerLeft">
                    <p className="titleResultadoSimulacao">
                        Resultado Simulação
                    </p>
                    <div className="headerLeftContent">
                        <img src={avatar} alt="avatar" />
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
                        <p className="headerLeftContentSubTitle">
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
                    <p className="ResSimulTable">
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
                    <p className="ResSimulTable">
                        Fator tributo
                    </p>
                    <p className="ResSimulTable">
                        Faturado com Impostos
                    </p>
                </div>

                <div className="ResSimulTableTitle">
                    <p className="ResSimulTableContent">
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
                        R$ 10.000,21
                    </p>
                    <p className="ResSimulTableContent">
                        0,74
                    </p>
                    <p className="ResSimulTableContent">
                        {totalConsumoPonta}
                    </p>
                    
                </div>

                <div className="ResSimulTableTitle">
                    <p className="ResSimulTableContent">
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
                        R$ 10.000,21
                    </p>
                    <p className="ResSimulTableContent">
                        0,74
                    </p>
                    <p className="ResSimulTableContent">
                        {totalcativoConsumoPontaFora}
                    </p>
                    
                </div>

                <div className="ResSimulTableTitle">
                    <p className="ResSimulTableContent">
                        TUSD demanda ponta
                    </p>
                    <p className="ResSimulTableContent">
                        R$/MWh
                    </p>
                    <p className="ResSimulTableContent">
                        64,588
                    </p>
                    <p className="ResSimulTableContent">
                        1789,64
                    </p>
                    <p className="ResSimulTableContent">
                        R$ 10.000,21
                    </p>
                    <p className="ResSimulTableContent">
                        0,74
                    </p>
                    <p className="ResSimulTableContent">
                        R$ 19.488,86
                    </p>
                    
                </div>

                <div className="ResSimulTableTitle">
                    <p className="ResSimulTableContent">
                        TUSD demanda fora de Ponta
                    </p>
                    <p className="ResSimulTableContent">
                        R$/MWh
                    </p>
                    <p className="ResSimulTableContent">
                        64,588
                    </p>
                    <p className="ResSimulTableContent">
                        1789,64
                    </p>
                    <p className="ResSimulTableContent">
                        R$ 10.000,21
                    </p>
                    <p className="ResSimulTableContent">
                        0,74
                    </p>
                    <p className="ResSimulTableContent">
                        R$ 19.488,86
                    </p>
                    
                </div>

                <div className="ResSimulTableTitle">
                    <p className="ResSimulTableContent">
                        TUSD encargos ponta
                    </p>
                    <p className="ResSimulTableContent">
                        R$/MWh
                    </p>
                    <p className="ResSimulTableContent">
                        64,588
                    </p>
                    <p className="ResSimulTableContent">
                        1789,64
                    </p>
                    <p className="ResSimulTableContent">
                        R$ 10.000,21
                    </p>
                    <p className="ResSimulTableContent">
                        0,74
                    </p>
                    <p className="ResSimulTableContent">
                        R$ 19.488,86
                    </p>
                    
                </div>

                <div className="ResSimulTableTitle">
                    <p className="ResSimulTableContent">
                        TURDS encargo fora ponta
                    </p>
                    <p className="ResSimulTableContent">
                        R$/MWh
                    </p>
                    <p className="ResSimulTableContent">
                        64,588
                    </p>
                    <p className="ResSimulTableContent">
                        1789,64
                    </p>
                    <p className="ResSimulTableContent">
                        R$ 10.000,21
                    </p>
                    <p className="ResSimulTableContent">
                        0,74
                    </p>
                    <p className="ResSimulTableContent">
                        R$ 19.488,86
                    </p>
                    
                </div>

            </div>

            <div className="containerResSimul">
                <p className="containerResSimulTitle">
                    Custos Adicionais
                </p>
                <div className="ResSimulTableTitle">
                    <p className="ResSimulTable">
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
                    <p className="ResSimulTable">
                        Fator tributo
                    </p>
                    <p className="ResSimulTable">
                        Faturado com Impostos
                    </p>
                </div>

                <div className="ResSimulTableTitle">
                    <p className="ResSimulTableContent">
                        Consumo Ponta
                    </p>
                    <p className="ResSimulTableContent">
                        R$/MWh
                    </p>
                    <p className="ResSimulTableContent">
                        64,588
                    </p>
                    <p className="ResSimulTableContent">
                        1789,64
                    </p>
                    <p className="ResSimulTableContent">
                        R$ 10.000,21
                    </p>
                    <p className="ResSimulTableContent">
                        0,74
                    </p>
                    <p className="ResSimulTableContent">
                        R$ 19.488,86
                    </p>
                    
                </div>

                

                <div className="ResSimulTableTitle">
                    <p className="ResSimulTableContent">
                        Consumo fora de ponta
                    </p>
                    <p className="ResSimulTableContent">
                        R$/MWh
                    </p>
                    <p className="ResSimulTableContent">
                        64,588
                    </p>
                    <p className="ResSimulTableContent">
                        1789,64
                    </p>
                    <p className="ResSimulTableContent">
                        R$ 10.000,21
                    </p>
                    <p className="ResSimulTableContent">
                        0,74
                    </p>
                    <p className="ResSimulTableContent">
                        R$ 19.488,86
                    </p>
                    
                </div>

            </div>


            <div className="containerResSimul">
                <p className="containerResSimulTitle">
                    Ambiente Livre
                </p>
                <div className="ResSimulTableTitle">
                    <p className="ResSimulTable">
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
                    <p className="ResSimulTable">
                        Fator tributo
                    </p>
                    <p className="ResSimulTable">
                        Faturado com Impostos
                    </p>
                </div>

                <div className="ResSimulTableTitle">
                    <p className="ResSimulTableContent">
                        Consumo Ponta
                    </p>
                    <p className="ResSimulTableContent">
                        R$/MWh
                    </p>
                    <p className="ResSimulTableContent">
                        64,588
                    </p>
                    <p className="ResSimulTableContent">
                        1789,64
                    </p>
                    <p className="ResSimulTableContent">
                        R$ 10.000,21
                    </p>
                    <p className="ResSimulTableContent">
                        0,74
                    </p>
                    <p className="ResSimulTableContent">
                        R$ 19.488,86
                    </p>
                    
                </div>

                <div className="ResSimulTableTitle">
                    <p className="ResSimulTableContent">
                        Consumo Fora de Ponta
                    </p>
                    <p className="ResSimulTableContent">
                        R$/MWh
                    </p>
                    <p className="ResSimulTableContent">
                        64,588
                    </p>
                    <p className="ResSimulTableContent">
                        1789,64
                    </p>
                    <p className="ResSimulTableContent">
                        R$ 10.000,21
                    </p>
                    <p className="ResSimulTableContent">
                        0,74
                    </p>
                    <p className="ResSimulTableContent">
                        R$ 19.488,86
                    </p>
                    
                </div>

                <div className="ResSimulTableTitle">
                    <p className="ResSimulTableContent">
                        TUSD demanda ponta
                    </p>
                    <p className="ResSimulTableContent">
                        R$/MWh
                    </p>
                    <p className="ResSimulTableContent">
                        64,588
                    </p>
                    <p className="ResSimulTableContent">
                        1789,64
                    </p>
                    <p className="ResSimulTableContent">
                        R$ 10.000,21
                    </p>
                    <p className="ResSimulTableContent">
                        0,74
                    </p>
                    <p className="ResSimulTableContent">
                        R$ 19.488,86
                    </p>
                    
                </div>

                <div className="ResSimulTableTitle">
                    <p className="ResSimulTableContent">
                        TUSD demanda fora de Ponta
                    </p>
                    <p className="ResSimulTableContent">
                        R$/MWh
                    </p>
                    <p className="ResSimulTableContent">
                        64,588
                    </p>
                    <p className="ResSimulTableContent">
                        1789,64
                    </p>
                    <p className="ResSimulTableContent">
                        R$ 10.000,21
                    </p>
                    <p className="ResSimulTableContent">
                        0,74
                    </p>
                    <p className="ResSimulTableContent">
                        R$ 19.488,86
                    </p>
                    
                </div>

                <div className="ResSimulTableTitle">
                    <p className="ResSimulTableContent">
                        TUSD encargos ponta
                    </p>
                    <p className="ResSimulTableContent">
                        R$/MWh
                    </p>
                    <p className="ResSimulTableContent">
                        64,588
                    </p>
                    <p className="ResSimulTableContent">
                        1789,64
                    </p>
                    <p className="ResSimulTableContent">
                        R$ 10.000,21
                    </p>
                    <p className="ResSimulTableContent">
                        0,74
                    </p>
                    <p className="ResSimulTableContent">
                        R$ 19.488,86
                    </p>
                    
                </div>

                <div className="ResSimulTableTitle">
                    <p className="ResSimulTableContent">
                        TURDS encargo fora ponta
                    </p>
                    <p className="ResSimulTableContent">
                        R$/MWh
                    </p>
                    <p className="ResSimulTableContent">
                        64,588
                    </p>
                    <p className="ResSimulTableContent">
                        1789,64
                    </p>
                    <p className="ResSimulTableContent">
                        R$ 10.000,21
                    </p>
                    <p className="ResSimulTableContent">
                        0,74
                    </p>
                    <p className="ResSimulTableContent">
                        R$ 19.488,86
                    </p>
                    
                </div>

            </div>

            
            
            
            <Table>
                <table>
                    <tr>
                        <th>Cativo</th>
                        <th>Qtd</th>
                        <th>Tarifa</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <th>Demanda:</th>
                        <td>{demanda}</td>
                        <td>{cativoDemandaUnica}</td>
                        <td>{totalDemandaUnica}</td>
                    </tr>
                    <tr>
                        <th>Demanda Ultrapassagem:</th>
                        <td>{demandaFpu}</td>
                        <td>{cativoDemandaUltrapassagem}</td>
                        <td>{totalDemandaUltrapassagem}</td>
                    </tr>
                    <tr>
                        <th>Consumo ponta:</th>
                        <td>{consumoP}</td>
                        <td>{cativoConsumoPonta}</td>
                        <td>{totalConsumoPonta}</td>
                    </tr>
                    <tr>
                        <th>Consumo ponta Fora:</th>
                        <td>{consumoPf}</td>
                        <td>{cativoConsumoPontaFora}</td>
                        <td>{totalcativoConsumoPontaFora}</td>
                    </tr>
                    <tr>
                        <th>Gerador:</th>
                        <td>{qtdGerador}</td>
                        <td>{custoGeracaoDisel}</td>
                        <td>{totalGerador}</td>
                    </tr>
                    <tr>
                        <th>Total:</th>
                        <td></td>
                        <td></td>
                        <td>{totalCativo}</td>
                    </tr>
                </table>
            
                <table>
                    <tr>
                        <th>Livre</th>
                        <th> Qtd</th>
                        <th> tarifa</th>
                        <th>total</th>
                    </tr>
                    <tr>
                        <th>Demanda:</th>
                        <td>{livreDemandaUnica}</td>
                        <td>{tarifaLivreDemandaUnica}</td>
                        <td>{totalLivreDemanda}</td>
                    </tr>
                    <tr>
                        <th>Consumo Ponta:</th>
                        <td>{livreConsumoPonta}</td>
                        <td>{tarifaLivreConsumoPonta}</td>
                        <td>{totalLivreConsumoPonta}</td>
                    </tr>
                    <tr>
                        <th>Consumo Fora Ponta:</th>
                        <td>{livreConsumoPontaFora}</td>
                        <td>{tarifaLivreConsumoForaPonta}</td>
                        <td>{totalLivreConsumoForaPonta}</td>
                    </tr>
                    <tr>
                        <th>Gerador:</th>
                        <td>{livreGerador}</td>
                        <td>{custoGeracaoDisel}</td>
                        <td>{totalLivreGerador}</td>
                    </tr>
                    <tr>
                        <th>Energia ACL:</th>
                        <td>{energiaACL}</td>
                        <td>{energiaACLTarifa}</td>
                        <td>{totalEnergiaACL}</td>
                    </tr>
                    <tr>
                        <th>ICMS:</th>
                        <td></td>
                        <td>{livreIcms}</td>
                        <td>{totalIcms}</td>
                    </tr>
                    <tr>
                        <th>Total Livre:</th>
                        <td></td>
                        <td></td>
                        <td>{totalLivre}</td>
                    </tr>
                    <tr>
                        <th>Economia:</th>
                        <td></td>
                        <td></td>
                        <td>{economiaLivre}</td>
                    </tr>
                    <tr>
                        <th>Porcetagem:</th>
                        <td></td>
                        <td></td>
                        <td>{economiaPorcentagem}</td>
                    </tr>
                </table>
                
            </Table>
            
        </div>


        



    )

    
}
