import React from 'react'

import avatar from '../../Assets/avatar-empty.png'
import blackLogo from '../../Assets/blackLogo.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag } from '@fortawesome/free-solid-svg-icons'

import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


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
            totalLivreConsumoForaPonta,totalLivreGerador,totalEnergiaACL,
            totalCativo
    }= ResultLivre


    var qtdGeradorFormated = qtdGerador;
    var livreDemandaUnicaFormated = formatQtdGerador(livreDemandaUnica)
    var livreConsumoPontaFormated = formatQtdGerador(livreConsumoPonta)
    var livreConsumoPontaForaFormated = formatQtdGerador(livreConsumoPontaFora)
    var livreGeradorFormated = formatQtdGerador(livreGerador)
    var energiaACLFormated = formatQtdGerador(energiaACL)

    
    if(qtdGeradorFormated !== undefined){

        qtdGeradorFormated = formatQtdGerador(qtdGeradorFormated)
    }


    function formatQtdGerador(e){
        var formmated = [];
        var i = 0;
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
    
    var energia1 = Number(props.energia1)
    var energia2 = Number(props.energia2)
    var energia3 = Number(props.energia3)
    var energia4 = Number(props.energia4)

    console.log('energia2: ', energia2);

    var distr = Number(Number(removeSimbol(totalLivreDemanda)) + Number(removeSimbol(totalLivreConsumoPonta)) + Number(removeSimbol(totalLivreConsumoForaPonta)) + Number(removeSimbol(totalLivreGerador)))
    var tqtd = Number(Number(removeSimbol(consumoP)) + Number(removeSimbol(consumoPf)) + Number(removeSimbol(qtdGeradorFormated)))
    
    console.log('distr: ',distr)

    console.log('tqtd: ',tqtd)

    var icms1 = ((energia1/(0.75) - energia1))
    var icms2 = ((energia2/(0.75) - energia2))
    var icms3 = ((energia3/(0.75) - energia3))
    var icms4 = ((energia4/(0.75) - energia4))

    console.log('icms2: ', icms2);

    var EF1 = ((energia1 + icms1) * (tqtd)/1000)
    var EF2 = ((energia2 + icms2) * (tqtd)/1000)
    var EF3 = ((energia3 + icms3) * (tqtd)/1000)
    var EF4 = ((energia4 + icms4) * (tqtd)/1000)

    console.log('EF2: ', EF2 )

    var CF1 = distr + EF1
    var CF2 = distr + EF2
    var CF3 = distr + EF3
    var CF4 = distr + EF4

    console.log('CF2: ' ,CF2 )
    
    var ECO1 = (Number(removeSimbol(totalCativo)) - CF1).toFixed(2)
    var ECO2 = (Number(removeSimbol(totalCativo)) - CF2).toFixed(2)
    var ECO3 = (Number(removeSimbol(totalCativo)) - CF3).toFixed(2)
    var ECO4 = (Number(removeSimbol(totalCativo)) - CF4).toFixed(2)

    var PECO1 = (((Number(removeSimbol(totalCativo)) - CF1)/Number(removeSimbol(totalCativo)))*100).toFixed(2)
    var PECO2 = (((Number(removeSimbol(totalCativo)) - CF2)/Number(removeSimbol(totalCativo)))*100).toFixed(2)
    var PECO3 = (((Number(removeSimbol(totalCativo)) - CF3)/Number(removeSimbol(totalCativo)))*100).toFixed(2)
    var PECO4 = (((Number(removeSimbol(totalCativo)) - CF4)/Number(removeSimbol(totalCativo)))*100).toFixed(2)

    const data_graph = [
        {
            name: '2021', economia: (Number(ECO1)*12),
        },
        {
            name: '2022', economia: (Number(ECO1)*12 )+ (Number(ECO2) *12),
        },
        {
            name: '2023', economia: (Number(ECO1)*12) + (Number(ECO2)*12) + (Number(ECO3)*12),
        },
        {
            name: '2024', economia: (Number(ECO1)*12) + (Number(ECO2)*12) + (Number(ECO3)*12) + (Number(ECO4)*12),
        },
    ];


    function removeSimbol(param){
        var my_number = '';
        
        for (let index = 0; index < param.length; index++) {
            if(param[index] !== 'R' && param[index] !== '$' && param[index] !== ','){
                my_number = my_number + param[index]
            }
            
        }

        return (my_number)
    }

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
                        {livreDemandaUnicaFormated}
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
                        {livreConsumoPontaFormated}
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
                        {livreConsumoPontaForaFormated}
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
                        {livreGeradorFormated}
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
                        {energiaACLFormated}
                    </p>
                    <p className="ResSimulTableContent">
                        {energiaACLTarifa}
                    </p>
                    <p className="ResSimulTableContent">
                        {totalEnergiaACL}
                    </p>
                    
                </div>

                {/*
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
                */}

            </div>

            <div className="economia-box-line">

                <div className="economia-box">
                    <p className="title-economia-box">
                        Economia em 2021
                    </p>
                    <div className="economia-box-content">
                        <p className="economia-box-content-tent">
                            R$ {ECO1}
                        </p>
                        <p className="economia-box-content-tent">
                            {PECO1} %
                        </p>
                    </div>
                </div>

                <div className="economia-box">
                    <p className="title-economia-box">
                        Economia em 2022
                    </p>
                    <div className="economia-box-content">
                        <p className="economia-box-content-tent">
                            R$ {ECO2}
                        </p>
                        <p className="economia-box-content-tent">
                            {PECO2} %
                        </p>
                    </div>
                </div>

                <div className="economia-box">
                    <p className="title-economia-box">
                        Economia em 2023
                    </p>
                    <div className="economia-box-content">
                        <p className="economia-box-content-tent">
                            R$ {ECO3}
                        </p>
                        <p className="economia-box-content-tent">
                            {PECO3} %
                        </p>
                    </div>
                </div>

                <div className="economia-box">
                    <p className="title-economia-box">
                        Economia em 2024
                    </p>
                    <div className="economia-box-content">
                        <p className="economia-box-content-tent">
                            R$ {ECO4} 
                        </p>
                        <p className="economia-box-content-tent">
                            {PECO4} %
                        </p>
                    </div>
                </div>

            </div>

            <div className="rodapeResSimul">
                <p className="rodapeResSimul-content">
                    Estudo indicativo de referência, o preço final de aquisição de energia pode ser maior ou menor que o apontado neste estudo.
                </p>
            </div>

            <p className="ecoProjt">
                Economial anual projetada
            </p>

            <div className="eco-anual-projetada">
                <div className="graphEcoAcumu">
                    <p className="pagTitle">
                        Pagamentos
                    </p>

                    <BarChart
                        width={550}
                        height={300}
                        data={data_graph}
                        margin={{
                            top: 5, right: 30, left: 0, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="economia" fill="#0067CC" />
                    </BarChart>


                </div>
                
            </div>



        </div>

    )
    
}
