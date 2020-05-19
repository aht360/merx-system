import React from 'react'
import ReactTypingEffect from 'react-typing-effect';
import NavBar from '../../Components/NavBar/navBar.js'
import Footer from '../../Components/Footer/footer.js'
import {Containers,Infos,Body,Pictures,Text,Icons,ContainerIcon,BeClient,ContainerBePartner,Container} from './styles.js'
import {IoIosArrowForward} from 'react-icons/io'
import {Link} from 'react-router-dom'
import TheMerx from '../../Assets/theMerx.jpg'
import BeProducer from '../../Assets/beProducer.jpg'
import Apartament from '../../Assets/apartment.svg'
import Radar from '../../Assets/radar.svg'
import Arrows from '../../Assets/arrows.svg'
import Pc from '../../Assets/Pc.png'

export default function Main(){

    var phrases = ["Escolha seu fornecedor","Negocie sua energia excedente ou gerada","Realize suas cotações",
                  "Analise seus dados","Simule sua economia","Conheça mais sobre,"]


    return(
        <Body>
            <NavBar/>

            <Container>         
                <div>
                    <div>
                        <b><ReactTypingEffect text={phrases} eraseDelay="2000" speed="50"/>
                        <br></br> no mercado livre de energia.</b>
                    </div>
                    <br></br>
                    <div>
                        <span>Nós criamos uma plataforma para lhe dar todo o controle sobre sua performance e rentabilidade, entre em contato conosco e nós cuidamos de todo o resto</span>
                        <br></br>
                        <button>Faça suas cotações <IoIosArrowForward size={16}/></button>
                    </div>
                </div>

                <div>
                    <img src={Pc} alt="pc"/>
                </div>
            </Container>
            <div className="branco"></div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Containers width="100%">
                    <Infos>
                        <h2>Mercado Livre de Energia</h2>
                        <br></br>
                        <p>É um ambiente de comercialização onde o consumidor pode escolher seu fornecedor de energia elétrica, além de receber vários incentivos e até vender sua energia excedente. As economias médias chegam a 30% dependendo do perfil de consumo e outras condições específicas de cada consumidor.</p>           
                        <br></br>
                        <Link to ="/mercado_livre"><button><b>Saiba Mais</b><IoIosArrowForward size={16}/></button></Link>
                    </Infos>
                    <div className="line"></div>
                    <Infos>
                        <h2>Autoproducão de energia</h2>
                        <br></br>
                        <p>Os autoprodutores são outra classe de agente que atua no ambiente de contratação livre, eles são consumidores que recebem a concessão 
                        ou autorização para produção de energia elétrica destinada ao seu próprio consumo.</p>
                        <br></br>
                        <Link to ="/autoproducao"><button><b>Saiba Mais</b><IoIosArrowForward size={16}/></button></Link>
                    </Infos>
                </Containers>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                    <Pictures>
                        <img src={BeProducer} alt="Be Produce"/>
                        <Text>
                            <p>A MERX</p>
                            <span>Entendemos que a sofisticação anda de mãos dadas com a simplicidade. Proporcionamos assistência técnica de forma clara, direta e focada no resultado para nossos Clientes e Parceiros, que fazem parte do time MERX.</span>
                            <span>Oferecemos todo o suporte técnico para que sua empresa.  Aproveite as vantagens do ambiente de contratação livre, tanto como cliente final ou parceiro de negócios.</span>
                        </Text>
                    </Pictures>
                <br></br>
                <br></br>
                <br></br>
                    <Pictures>
                        <Text>
                            <p>Seja produtor de energia elétrica</p>
                            <span>Os principais atrativos da autoprodução são isenção de encargos setoriais, sem rocolhimento ICMS sobre energia produzida entre agentes de mesmo CNPJ de acordo com cada estado, 
                                diminuição da exposição e variações de preços, aplicação independente da localização geográfica e o direito de comercializar seus excedentes de energia com outros consumidores livres e até mesmo outros agentes de geração.</span>
                            
                        </Text>
                        <img src={TheMerx} alt="The Merx"/>
                    </Pictures>
                    <br></br>
                    <br></br>
                    <br></br>
                <ContainerIcon>
                    <div className="title">
                        <h1>A revolução já aconteceu</h1>
                        <span>A energia muda a forma como você vive.</span>
                    </div>
                        <Icons>
                            <div>
                                <img src={Arrows} alt="Data"/>
                                <span>A quantidade de dados disponível para tomada de decisão já está muito além da capacidade humanada.</span>
                            </div>
                            <div>
                                <img src={Radar} alt="Track"/>
                                <span>As melhores gestoras globais já usam drones, inteligência artificial, entre outras para ter sucesso no mercado financeiro.</span>
                            </div>
                            <div>
                                <img src={Apartament} alt="Management"/>
                                <span>E a sua gestora? Ainda compete no mercado usando as mesmas técnicas de 30 anos atrás?</span>                                
                            </div>
                        </Icons>
                </ContainerIcon>

                <ContainerBePartner>
                    <div className="title">
                        <b>Faça parte da MERX</b>
                        <br></br>
                        <br></br>
                        <p>Com a MERX, você trabalha com uma empresa séria, focada em oferecer excelência 
                            na qualidade de seus produtos e serviços</p>
                    </div>
                    <div className="buttons">
                        <BeClient>
                            <span>Invista em um dos negócios que mais crescem no Brasil</span>
                            <button><b>QUERO SER UM INVESTIDOR  </b></button>
                        </BeClient>
                        <BeClient>
                            <span>Suas necessidades de forma personalizada e objetiva</span>
                            <button><b>QUERO SER UM CLIENTE</b></button>
                        </BeClient>
                        <BeClient>
                            <span>Leve nossas soluções para seus clientes</span>
                            <button><b>QUERO SER PARCEIRO</b></button>
                        </BeClient>
                    </div>
                </ContainerBePartner>
                <Footer/>
        </Body>

    )
}


