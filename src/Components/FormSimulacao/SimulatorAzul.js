import React from 'react'
import {Table} from './styled.js'

export default function SimulatorVerde(props){

    const inputs = props.inputs
    const ResultCativo = props.resultCat
    const ResultLivre = props.resultLiv

    const {cativoTarifaDemandaPonta,totalCativoUltrapassagemPonta,cativoTarifaUltrapassagemPonta,cativoTarifaDemandaForaPonta,
        cativoTarifaUltrapassagemForaPonta,cativoTarifaConsumoPonta,cativoTarifaConsumoForaPonta,qtdGerador,
        totalCativoDemandaPonta,totalCativoUltrapassagemForaPonta,totalCativoDemandaPontaFora,
        totalCativoConsumoPonta,totalCativoConsumoForaPonta,totalCativoConsumoGerador,totalCativo
     } = ResultCativo

    const {livreDemanda,livreDemandaForaPonta,livreConsumoPonta,livreGerador,livreConsumoForaPonta,
        livreTarifaDemanda,livreTarifaConsumoPonta,livreTarifaConsumoForaPonta,
        livreTarifaGerador,totalLivreDemanda,totalLivreDemandaForaPonta,totalLivreConsumoPonta,totalLivreConsumoForaPonta,
        totalLivreGerador,energiaACL,energiaACLTarifa,totalEnergiaACL,totalICMS,totalLivre,economia,economiaPorcentagem,livreIcms
        }= ResultLivre 

    var livreTarifaDemandaForaPonta = (ResultLivre.livreTarifaDemandaForaPonta)
    

    const{ demanda, demandaFpu, consumoP, consumoPf, demandaP, demandaPu } = inputs

    return(
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
                    <td>{cativoTarifaDemandaPonta}</td>
                    <td>{totalCativoDemandaPonta}</td>
                </tr>
                <tr>
                    <th>Demanda Ultrapassagem:</th>
                    <td>{demandaPu}</td>
                    <td>{cativoTarifaUltrapassagemPonta}</td>
                    <td>{totalCativoUltrapassagemPonta}</td>
                </tr>
                <tr>
                    <th>Demanda Fora Ponta:</th>
                    <td>{demandaP}</td>
                    <td>{cativoTarifaDemandaForaPonta}</td>
                    <td>{totalCativoDemandaPontaFora}</td>
                </tr>
                <tr>
                    <th>Ultrapassagem Fora Ponta:</th>
                    <td>{demandaFpu}</td>
                    <td>{cativoTarifaUltrapassagemForaPonta}</td>
                    <td>{totalCativoUltrapassagemForaPonta}</td>
                </tr>
                <tr>
                    <th>Consumo ponta:</th>
                    <td>{consumoP}</td>
                    <td>{cativoTarifaConsumoPonta}</td>
                    <td>{totalCativoConsumoPonta}</td>
                </tr>
                <tr>
                    <th>Consumo ponta Fora:</th>
                    <td>{consumoPf}</td>
                    <td>{cativoTarifaConsumoForaPonta}</td>
                    <td>{totalCativoConsumoForaPonta}</td>
                </tr>
                <tr>
                    <th>Gerador:</th>
                    <td>{qtdGerador}</td>
                    <td>{livreTarifaGerador}</td>
                    <td>{totalCativoConsumoGerador}</td>
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
                    <td>{livreDemanda}</td>
                    <td>{livreTarifaDemanda}</td>
                    <td>{totalLivreDemanda}</td>
                </tr>
                <tr>
                    <th>Demanda Fora Ponta:</th>
                    <td>{livreDemandaForaPonta}</td>
                    <td>->{livreTarifaDemandaForaPonta}</td>
                    <td>{totalLivreDemandaForaPonta}</td>
                </tr>
                <tr>
                    <th>Consumo Ponta:</th>
                    <td>{livreConsumoPonta}</td>
                    <td>{livreTarifaConsumoPonta}</td>
                    <td>{totalLivreConsumoPonta}</td>
                </tr>
                <tr>
                    <th>Consumo Fora Ponta:</th>
                    <td>{livreConsumoForaPonta}</td>
                    <td>{livreTarifaConsumoForaPonta}</td>
                    <td>{totalLivreConsumoForaPonta}</td>
                </tr>
                <tr>
                    <th>Gerador:</th>
                    <td>{livreGerador}</td>
                    <td>{livreTarifaGerador}</td>
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
                    <td>{totalICMS}</td>
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
                    <td>{economia}</td>
                </tr>
                <tr>
                    <th>Porcetagem:</th>
                    <td></td>
                    <td></td>
                    <td>{economiaPorcentagem}</td>
                </tr>
            </table>
        </Table>

    )

    
}
