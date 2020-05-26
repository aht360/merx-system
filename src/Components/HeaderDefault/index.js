import React, { Component } from 'react';
import './style.css';
import Fade from 'react-reveal/Fade';
import mlHeader from '../../Assets/ml-header.png';
import simHeader from '../../Assets/simulator.png';
import apHeader from '../../Assets/lamp.png'

class HeaderDefault extends Component{
    constructor(props){
        super();
        var myScreen = props.screen;

        this.state = {
            myScreen
        }
        

    }
    render(){


        const chooseTitle = () => {
            if(this.state.myScreen === "simulacao"){
                return(
                    <p>Simule sua economia</p>
                );
            }
            else if(this.state.myScreen === "mercado-livre"){
                return(
                    <p>Entenda mais sobre a história do Mercado Livre de Energia Elétrica</p>
                );
            }
            else if(this.state.myScreen === "autoproducao"){
                return(
                    <p>Entenda mais sobre auto produtor de energia elétrica</p>
                );
            }
            else{
                alert('opcao invalida HEADERDEFAULT');
            }
        }

        const chooseSubtitle = () => {
            if(this.state.myScreen === "simulacao"){
                return(
                    <div>
                        <p>Em um cenário extremamente competitivo, é fundamental encontrar alternativas econômicas para redução de custos.</p>
                        <Fade left delay={1000}>
                            <p>Preencha o formulário abaixo e tenha em mãos um detalhado estudo comparativo entre Mercado Livre de Energia e Mercado Cativo, comprovando possibilidades de redução de custos adequadas para a sua empresa.</p>    

                        </Fade>
                    </div>
                );
            }
            else if(this.state.myScreen === "mercado-livre"){
                return(
                    <p>Em 1990 com a reformulação do setor elétrico, que expôs geração e comercialização de energia a livre competição, teve como um de seus principais objetivos atrair investidores ao mercado de energia brasileiro, por meio de investimento em empresas privadas, viabilizando, assim, a expansão da oferta de energia elétrica ao sistema.</p>
                );
            }
            else if(this.state.myScreen === "autoproducao"){
                return(
                    <p>O Autoprodutor de Energia Elétrica ou APE, é a pessoa ou empresas reunidas em consórcio que recebem concessão ou autorização para produzir energia elétrica destinada ao seu uso exclusivo. Decreto n. 2.003, de 10 setembro de 1996.</p>
                );
            }
            else{
                alert('opcao invalida HEADERDEFAULT');
            }
        }

        const chooseImg = () => {
            if(this.state.myScreen === "simulacao"){
                return(
                    <img className="imgSize-autoproducao" src={simHeader} alt="sim-header"/>
                );
            }
            else if(this.state.myScreen === "mercado-livre"){
                return(
                    <img className="imgSize-autoproducao" src={mlHeader} alt="ml-header"/>
                );
            }
            else if(this.state.myScreen === "autoproducao"){
                return(
                    <img className="imgSize-autoproducao" src={apHeader} alt="ap-header"/>
                );
            }
            else{
                alert('opcao invalida HEADERDEFAULT');
            }
        }

        return(
            <div className="headerDefault-row">
                <div className="headerDefault-column" style={{textAlign: "left"}}>
                    
                    <Fade top delay={500}>
                        <h1 className="title-ml-header">
                            {chooseTitle()}
                        </h1>
                    </Fade>
                    <Fade bottom delay={500}>
                            <p className="subtitle-ml-header">
                                {chooseSubtitle()}
                            </p>
                    </Fade>
                    
                    
                </div>
                <div className="headerDefault-img">
                    <Fade right delay={1000}>
                        {chooseImg()}
                    </Fade>
                </div>
            </div>
        );
    }
}

export default HeaderDefault;