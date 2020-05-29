import React from 'react';
import './style.css';



export default function Main(){
    
    return(
        <div className="table-container">
            <div className="textBox-table">
                <p className="text-table">
                    Seguida pela Lei 9.074, de 07 de julho de 1995, criando o produtor independente de energia (PIE) e o consumidor livre de energia elétrica, consumidor com direito a escolher livremente seu fornecedor de energia elétrica, de acordo com condições pré-estabelecidas definidas no quadro abaixo:
                </p>
            </div>

        <div style={{display: "flex", justifyContent: "center"}}>

            <div className="table-column">

                <div className="table-row">
                    <p className="table-item-title">Demanda mínima</p>
                    <p className="table-item">10 MW</p>
                    <p className="table-item">3 MW</p>
                    <p className="table-item">3 MW</p>
                    <p className="table-item">500 KW*</p>
                </div>
                <div className="table-row">
                    <p className="table-item-title">Tensão mínima de fornecimento</p>
                    <p className="table-item">69 Kv </p>
                    <p className="table-item"></p>
                    <p className="table-item">69 Kv </p>
                    <p className="table-item"> </p>
                </div>
                <div className="table-row">
                    <p className="table-item-title">Exercício da opção (consumidor livre)</p>
                    <p className="table-item">1998</p>
                    <p className="table-item">1998</p>
                    <p className="table-item">2000</p>
                    <p className="table-item">1998 </p>
                </div>
                <div className="table-row">
                    <p className="table-item-title">Data ligação do consumidor</p>
                    <p className="table-item"></p>
                    <p className="table-item">Após 08.07.95</p>
                    <p className="table-item"></p>
                    <p className="table-item">Após 08.07.95</p>
                </div>
            </div>

        </div>
           

            <div className="textBox-table">
                <p className="text-table">
                    Em 1996, o Ministério de Minas e Energia (MME) implantou o Projeto de Reestruturação do Setor Elétrico Brasileiro, conhecido como projeto RE-SEB. Foi implantado por meio da contratação da consultoria inglesa Coopers &amp; Lybrad, que havia participado das reformas em países como: Grã-Bretanha, Finlândia, Ucrânia e Portugal, e tinha como principais objetivos: a desverticalização das empresas de energia elétrica, separando os segmentos em geração, transmissão e distribuição; criação da ANEEL; criação do ONS; criação do MAE; estabelecimento da competição na geração e comercialização; manter a distribuição e transmissão reguladas. </p>
                <p className="text-table">
                    Em 2003, foram lançadas duas importantes Medidas Provisórias, a Medida Provisória nº 144, que tratava sobre a comercialização da energia elétrica, e a Medida Provisória nº 145 que criou a EPE, com isso foi dado início a evolução do setor elétrico nacional. Estas Medidas Provisórias foram mais tarde transformadas na Lei Nº 10.848, de 15 de Março de 2004, que trouxe a desregulação do mercado de energia, saindo de um regime monopolista e levando a um mercado mais aberto e competitivo. 
                </p>
                <p className="text-table">
                    Essa mudança aconteceu com a substituição do Mercado Atacadista de Energia (MAE) pela Câmara de Comercialização de Energia Elétrica (CCEE), e divisão do mercado em dois ambientes de negociação de energia elétrica, o Ambiente de Contratação Livre (ACL) e Ambiente de Contratação Regulada (ACR).
                </p>
            </div>
        </div>
    );
}