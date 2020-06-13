import React from 'react';
import './style.css';
import BeProducer from '../../Assets/beProducer.jpg';
import TheMerx from '../../Assets/theMerx.jpg';
import Fade from 'react-reveal/Fade';

export default function About(){

    return(
        <div className="container-about">
            <div class="item-about">
                <Fade left>
                    <img className="picImg" src={BeProducer} alt="Be Produce"/>
                </Fade>
            </div>

            <div class="item-about">
                <div className="textAbout">
                    <p className="titleAbout">A MERX</p>
                    <span>Entendemos que a sofisticação anda de mãos dadas com a simplicidade. Proporcionamos assistência técnica de forma clara, direta e focada no resultado para nossos Clientes e Parceiros, que fazem parte do time MERX.</span>
                    <span>Oferecemos todo o suporte técnico para que sua empresa.  Aproveite as vantagens do ambiente de contratação livre, tanto como cliente final ou parceiro de negócios.</span>
                </div>                   
            </div>

            <div class="item-about">
                <div className="textAbout">
                    <p className="titleAbout">Seja produtor de energia elétrica</p>
                    <span>
                        Os principais atrativos da autoprodução são isenção de encargos setoriais, sem rocolhimento ICMS sobre energia produzida entre agentes de mesmo CNPJ de acordo com cada estado, 
                        diminuição da exposição e variações de preços, aplicação independente da localização geográfica e o direito de comercializar seus excedentes de energia com outros consumidores livres e até mesmo outros agentes de geração.
                    </span>
                </div>
            </div>

            <div class="item-about">
                <Fade right>
                    <img className="picImg" src={TheMerx} alt="The Merx"/>
                </Fade>
            </div>
            
        </div>
    );
}