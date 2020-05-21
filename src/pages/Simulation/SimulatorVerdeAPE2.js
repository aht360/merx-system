import React from 'react'
import {Table} from './styled.js'

export default function SimulatorVerde(props){

    const inputs = props.inputs
    const ResultCativo = props.resultCat
    const ResultLivre = props.resultLiv
    const ape = props.apeResult

    const {cativoDemandaUnica,cativoDemandaUltrapassagem,cativoConsumoPonta,cativoConsumoPontaFora,qtdGerador,
        totalDemandaUnica,totalDemandaUltrapassagem,totalConsumoPonta,totalcativoConsumoPontaFora,totalGerador
        } = ResultCativo

    const {livreDemandaUnica,livreConsumoPonta,livreConsumoPontaFora,livreGerador,energiaACL,
                    tarifaLivreDemandaUnica,tarifaLivreConsumoPonta,tarifaLivreConsumoForaPonta,
                    custoGeracaoDisel,energiaACLTarifa,totalLivreDemanda,totalLivreConsumoPonta,
                    totalLivreConsumoForaPonta,totalLivreGerador,totalEnergiaACL,totalCativo,
                    totalLivre,economiaLivre,economiaPorcentagem} = ResultLivre 

    const{demandaUsinaRemota,tarifaDemandaUsina,totalUsinaRemota,energiaGeracao,tarifaEnergiaGeracao,
        totalEnergiaGeracao,energiaComplemento,energiaComplementoTarifa,totalEnergiaComplemento,
        livreIcms,totalEnergiaIcms,TFSE,ccee} = ape



    const{cliente, cnpj, distribuidora, ths, grupoTarifa, demanda, demandaFpu, consumoP, consumoPf, demandaP,
                demandaPu, usaGerador, geradorACL, consumoGerador, desconto} = inputs
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
                    <th>Demanda Usina Remota:</th>
                    <td>{demandaUsinaRemota}</td>
                    <td>{tarifaDemandaUsina}</td>
                    <td>{totalUsinaRemota}</td>
                </tr>
                <tr>
                    <th>Energia geração:</th>
                    <td>{energiaGeracao}</td>
                    <td>{tarifaEnergiaGeracao}</td>
                    <td>{totalEnergiaGeracao}</td>
                </tr>
                <tr>
                    <th>Energia Complemento:</th>
                    <td>{energiaComplemento}</td>
                    <td>{energiaComplementoTarifa}</td>
                    <td>{totalEnergiaComplemento}</td>
                </tr>
                <tr>
                    <th>Energia ICMS:</th>
                    <td>{energiaComplemento}</td>
                    <td>{livreIcms}</td>
                    <td>{totalEnergiaIcms}</td>
                </tr>
                <tr>
                    <th>TFSE:</th>
                    <td></td>
                    <td></td>
                    <td>{TFSE}</td>
                </tr>
                <tr>
                    <th>CCEE:</th>
                    <td></td>
                    <td></td>
                    <td>{ccee}</td>
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

    )

    
}
