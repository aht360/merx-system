import React from 'react';
import './style.css';
import footer1 from '../../Assets/footer1.png'
import footer2 from '../../Assets/footer2.png'
import footer3 from '../../Assets/footer3.png'
import footer4 from '../../Assets/footer4.png'

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
                <div className="column-partner">
                    <img className="partner-size" src={footer1} alt="f1"/>
                </div>
            </div>
            
            
            
            
        </div>
    );
}