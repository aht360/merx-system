import React, { useState, useEffect } from 'react';
import NavBar from '../../Components/NavBar/navBar.js';
import Footer from '../../Components/Footer/footer'
import { InputContainer,Body } from './styled.js';
import api from '../../Services/api.js';
import SimulatorVerde from './SimulatorVerde.js';
import SimulatorAzul from './SimulatorAzul.js';
import SimulatorVerdeAPE from './SimulatorVerdeAPE.js'
import SimulatorVerdeAPE2 from './SimulatorVerdeAPE2'

export default function Simulacao() {
  const [cliente, setCliente] = useState('');
  const [cnpj, setCnpj] = useState();
  const [distribuidora, setDistribuidora] = useState('CELPE');
  const [ths, setThs] = useState('VERDE');
  const [grupoTarifa, setGrupoTarifa] = useState('A4');
  const [demanda, setDemanda] = useState();
  const [demandaFpu, setDemandaFpu] = useState();
  const [consumoP, setConsumoP] = useState();
  const [consumoPf, setConsumoPf] = useState();

  const [demandaP,setDemandaP] = useState();
  const [demandaPu,setDemandaPu] = useState()
  const [usaGerador, setUsaGerador] = useState('sim');
  const [geradorACL,setgeradorACL] = useState ('sim')
  const [consumoGerador, setConsumoGerador] = useState('N/A');
  const [custoGeracaoDisel, setCustoGeracaoDisel] = useState();

  const [calc, setCalc] = useState('ML');
  const [desconto,setDesconto] = useState('0')

  const [icms, setIcms] = useState();
  const [pis, setPis] = useState();
  const [cofin, setCofins] = useState();

  const [potenciaTransformador,setpotenciaTransformador] = useState()
  const [tipoInstal,setTipoInstal] = useState('LOCAL')
  const [criterioUsina,setCriterioUsina] = useState('TRANSFORMADOR')
  
  const [inputGeral,setInputGeral] = useState()
  const [localInstalacao,setLocalInstalacao] = useState('METALICA')
  const [geracaoEsperada,SetGeracaoEsperada] = useState()

  const [show,setShow] = useState(false);
  const [inputs, setInputs] = useState({});
  const [resultCativo, setResultCativo] = useState({});
  const [resultLivre, setResultLivre] = useState({});
  const [ape,setApe] = useState({})

  async function handleSimulation(e) { 
    setShow(true)
    e.preventDefault();
    const planilha = {
      cliente,
      cnpj,
      distribuidora,
      ths,
      grupoTarifa,
      demanda,  
      demandaFpu,
      consumoP,
      consumoPf,
      demandaP,
      demandaPu,
      usaGerador,
      geradorACL,
      consumoGerador,
      custoGeracaoDisel,
      calc,
      desconto,
      icms,
      pis,
      cofin,

      potenciaTransformador,
      inputGeral,
      tipoInstal,
      criterioUsina,
      localInstalacao,
      geracaoEsperada
    };

    try {
      const results = await api.post('simulacao', planilha);
      const { input,ResultCativo,ResultLivre,ape } = results.data;
        setInputs(input);
        setResultCativo(ResultCativo);
        setResultLivre(ResultLivre)
          if(calc==="APE"){
            setApe(ape)
          }
        
      
    } catch (err) {
      alert('Erro, tente novamente.');
    }
  }
  return (
    <div>
      <NavBar changeColor="false" />
      <br></br>
      <br></br>
      <br></br>
      <Body>
        <div className="header">
          <div>
            <b>Simule sua economia</b>
            <p>Em um cenário extremamente competitivo, é fundamental encontrar alternativas econômicas para redução de custos.</p>
            <p>Preencha o formulário abaixo e tenha em mãos um detalhado estudo comparativo entre Mercado Livre de Energia e Mercado Cativo, comprovando possibilidades de redução de custos adequadas para a sua empresa.</p>
          </div>
          <div>
            a
          </div>
        </div>
        <br></br>
        <br></br>
        <h2>Dados Empresariais</h2>
        <br></br><br></br>
          <form onSubmit={handleSimulation}>
            <InputContainer>
            <div>
              <b>Nome</b>
              <input type="text"value={cliente} onChange={(e) => setCliente(e.target.value)} placeholder="Ex: MerxEnergia"/>
            </div>

            <div>
              <b>Email</b>
              <input type="email" placeholder="Ex: seuEmail@outlook.com"/>
            </div>

            <div>
              <b>CNPJ</b>
              <input type="text" pattern="[^a-zA-Z]+" title="Apenas números" value={cnpj} onChange={(e) => setCnpj(e.target.value)}/>
            </div>

            <div>
              <b>Fone</b>
              <input type="tel" placeholder="Ex: (81) 30192097"/>
            </div>

            </InputContainer>
            <br></br>
            <br></br>
            <br></br>
            <InputContainer>
              <div>
                <input type="button" value="Mercado Livre" className="Button" onClick={(e)=>setCalc("ML")} />
              </div>
              <div>
                <input type="button" value="Autoprodutor" className="Button" onClick={(e)=>setCalc("APE")}/>
              </div>
              <div>
                <b>Distribuidora</b>
                <select id="distribuidora" value={distribuidora} onChange={(e) => setDistribuidora(e.target.value)}>
                  <option value="CELPE">Celpe</option>
                  <option value="CEAL">Ceal</option>
                  <option value="CEMAR">Cemar</option>
                  <option value="CEPISA">Cepisa</option>
                  <option value="COELBA">Coelba</option>
                  <option value="COSERN">Cosern</option>
                  <option value="ENEL CE">Enel Ce</option>
                  <option value="EPB">Epb</option>
                  <option value="ESE">Ese</option>
                </select>
              </div>

            <div>
              <b>Ths</b>
              <select id="ths" value={ths} onChange={(e) => setThs(e.target.value)}>
                <option value="VERDE">Verde</option>
                <option value="AZUL">Azul</option>
              </select>
            </div>

            <div>
              <b>Grupo Tarifário</b>
              <select id="grupo-tarifa" value={grupoTarifa} onChange={(e) => setGrupoTarifa(e.target.value)}>
                <option value="A4">A4</option>
                <option value="A3">A3</option>
              </select>
            </div>
            <div>
              <b>Demanda</b>
              <input type="text" pattern="[^a-zA-Z]+" title="Apenas números" value={demanda} onChange={(e) => setDemanda(e.target.value.replace(',','.'))}/>
            </div>

            <div>
              <b>Demanda Fora Ponta Ultrapassagem</b>
              <input type="text" pattern="[^a-zA-Z]+" title="Apenas números" value={demandaFpu} onChange={(e) => setDemandaFpu(e.target.value.replace(',','.'))}/>
            </div>

            <div>
              <b>Consumo de Ponta</b>
              <input type="text" pattern="[^a-zA-Z]+" title="Apenas números" value={consumoP} onChange={(e) => setConsumoP(e.target.value.replace(',','.'))}/>
              
            </div>

            <div>
              <b>Consumo Fora de Ponta</b>
              <input type="text" pattern="[^a-zA-Z]+" title="Apenas números" value={consumoPf} onChange={(e) => setConsumoPf(e.target.value.replace(',','.'))}/>            
              
            </div>
            
            {(ths==="AZUL") && <div><b>Demanda Ponta</b><input type="text" pattern="[^a-zA-Z]+" title="Apenas números" value={demandaP} onChange={(e) => setDemandaP(e.target.value.replace(',','.'))}/></div>}
            {(ths==="AZUL") && <div><b>Demanda Ponta Ultrapassagem</b><input type="text" pattern="[^a-zA-Z]+" title="Apenas números" value={demandaPu} onChange={(e) => setDemandaPu(e.target.value.replace(',','.'))}/></div>}
            
            <div>
              <b>Usa Gerador</b>
              <select id="usa-gerador" value={usaGerador} onChange={(e) => setUsaGerador(e.target.value.replace(',','.'))}>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </select>
            </div>

            <div>
              <b>Gerador no ACL</b>   
              <select id="gerador-acl" value={geradorACL} onChange={(e) => setgeradorACL(e.target.value.replace(',','.'))}>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </select>
            </div>

            <div>
              <b>Consumo Gerador</b>
              <input type="text" value={consumoGerador} onChange={(e) => setConsumoGerador(e.target.value.replace(',','.'))}/>
            </div>

            <div>
              <b>Custo da Geração Disel</b>
              <input type="text" pattern="[^a-zA-Z]+" title="Apenas números" value={custoGeracaoDisel} onChange={(e) => setCustoGeracaoDisel(e.target.value.replace(',','.'))}/>
            </div>

            <div>
              <b>DESCONTO</b>
              <select id="desconto" value={desconto} onChange={(e) => setDesconto(e.target.value.replace(',','.'))}>
                <option value="0">Conv</option>
                <option value="0.5">50%</option>
                <option value="1">100%</option>
              </select>            
            </div>

            
            {calc === "APE" &&<div>
                <b>Instalação</b>
                <select id="tipo-instalacao" value={tipoInstal} onChange={(e) => setTipoInstal(e.target.value.replace(',','.'))}>
                  <option value="LOCAL">Local</option>
                  <option value="REMOTA">Remota</option>
                </select>
              </div>}

              {calc === "APE" &&<div>
                <b>Critério tamanho Usina</b>  
                <select id="criterio-usina" value={criterioUsina} onChange={(e) => setCriterioUsina(e.target.value.replace(',','.'))}>
                  <option value="TRANSFORMADOR">Limitada ao Transformador</option>
                  <option value="DEMANDA">Limitada a Demanda Contratada</option>
                  <option value="AREA">Limitada a Área Disponível</option>
                  <option value="DEFINIDA">Potência definida</option>
                  <option value="100%">100% do Consumo</option>
                  <option value="50%">50% do Consumo</option>
                  <option value="25%">25% do Consumo</option>
                </select>
              </div>}
                
              {calc === "APE" &&<div>
                <b>Potência transformador</b>
                <input type="text" pattern="[^a-zA-Z]+" title="Apenas números" value={potenciaTransformador} onChange={(e) => setpotenciaTransformador(e.target.value.replace(',','.'))}/>
              </div>}
              

              {calc === "APE" &&<div>
                <b>
                  {criterioUsina ==="TRANSFORMADOR" && <b>Limitado ao Transformador</b>}
                  {criterioUsina ==="DEMANDA" && <b>Limitada a Demanda Contratada</b>}
                  {criterioUsina ==="AREA" && <b>Limitada a Área Disponível</b>}
                  {criterioUsina ==="DEFINIDA" && <b>Limitada a Potência Definida</b>}
                  {criterioUsina ==="100%" && <b>100% do Consumo</b>}
                  {criterioUsina ==="50%" && <b>50% do Consumo</b>}
                  {criterioUsina ==="25%" && <b>25% do Consumo</b>}
                </b>
                <input type="text" pattern="[^a-zA-Z]+" title="Apenas números" value={inputGeral} onChange={(e) => setInputGeral(e.target.value.replace(',','.'))}/>              
              </div>}

              {calc === "APE" &&<div>
                <b>Local de Instalaçao</b>
                <select id="local-instalacao" value={localInstalacao} onChange={(e) => setLocalInstalacao(e.target.value.replace(',','.'))}>
                  <option value="METALICA">Coberta Metalica</option>
                  <option value="FIBRO-CIMENTO">Coberta Fibro Cimento</option>
                  <option value="SOLO">Solo</option>
                </select>            
              </div>}    

              {calc === "APE" &&<div>
                <b>Geração esperada</b> 
                <input type="text" pattern="[^a-zA-Z]+" title="Apenas números" value={geracaoEsperada} onChange={(e) => SetGeracaoEsperada(e.target.value.replace(',','.'))}/>              
              </div>}
            </InputContainer>
            
            <br></br>
            <br></br>
            <button type="submit">Simular</button>
            <br></br>
            <br></br>
            <br></br>
          </form>
         
          {(show ===true && (ths==="VERDE") && (calc==="ML")) && <SimulatorVerde inputs={inputs} resultCat={resultCativo}  resultLiv={resultLivre}/>}
          {(show ===true && (ths==="AZUL" ) && (calc==="ML")) && <SimulatorAzul inputs={inputs} resultCat={resultCativo}  resultLiv={resultLivre}/>}
          {(show ===true && (ths==="VERDE") && (calc==="APE") && (tipoInstal==="LOCAL")) && <SimulatorVerdeAPE inputs={inputs} resultCat={resultCativo}  resultLiv={resultLivre} apeResult={ape}/>}
          {(show ===true && (ths==="VERDE") && (calc==="APE") && (tipoInstal==="REMOTA")) && <SimulatorVerdeAPE2 inputs={inputs} resultCat={resultCativo}  resultLiv={resultLivre} apeResult={ape}/>}

      </Body>
      <Footer/>
    </div>
  );
}
