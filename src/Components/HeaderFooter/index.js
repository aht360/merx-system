import React from 'react';
import './style.css';
import footer1 from '../../Assets/footer1.png'
import footer2 from '../../Assets/footer2.png'
import footer3 from '../../Assets/footer3.png'
import footer4 from '../../Assets/footer4.png'

export default function HeaderFooter(){

    return(
        <div className="container-HeaderFooter">
            <img classname="correctHeight" src={footer1} alt="f1"/>
            <img src={footer2} alt="f2"/>
            <img src={footer3} alt="f3"/>
            <img classname="correctHeight" src={footer4} alt="f4"/>
        </div>
    );
}