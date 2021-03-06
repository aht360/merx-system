import React from 'react';
import './style.css';
import footer1 from '../../Assets/footer1.png'
import footer2 from '../../Assets/footer2.png'
import footer3 from '../../Assets/footer3.png'
import footertop4 from '../../Assets/footertop4.png';
import footerbottom4 from '../../Assets/footerbottom4.png'

export default function HeaderFooter(){

    return(
        <div className="container-HeaderFooter">
            <div className="row-partner">
                <div className="column-partner">
                    <img className="partner-size" src={footer2} alt="f2"/>
                </div>
                <div className="column-partner">
                    <img className="partner-size" src={footer3} alt="f3"/>
                </div>
                <div className="column-partner adjust">
                    <img className="partner-size" src={footer1} alt="f1"/>
                </div>
                <div className="column-partner-modifier">
                    <img className="partner-size-modifier" src={footertop4} alt="f1"/>
                    <img className="partner-size-modifier-2" src={footerbottom4} alt="footerbottom"/>
                </div>
            </div>
            
        </div>
    );
}