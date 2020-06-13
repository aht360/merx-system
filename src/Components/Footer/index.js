import React from 'react';
import './style.css';
import Logo from '../../Assets/blackLogo.png';
import Zap from '../../Assets/zap.png';
import Fones from '../../Assets/telfot.png';


export default function Footer(){
    return(
        <div className="footer-container">
            <div className="row-footer">
                <div className="column-footer">
                    <img className="logo-footer" src={Logo} alt="f2"/>
                </div>
                <div className="column-footer">
                    <p className="footer-text align-text"> Rua Ministro Nelson Hungria</p>
                </div>
                <div className="column-footer">
                    <p className="footer-text align-text"> <img src={Fones} alt="zap" className="iconFootex" /> +55 81 30192097</p>
                </div>
                <div className="column-footer">
                    <p className="footer-text align-text"> <img src={Zap} alt="zap" className="iconFootex" /> +55 81 986665303</p>
                </div>
                <div className="column-footer">
                    <p className="footer-text align-text"> Recife - PE</p>
                </div>
            </div>
            <div className="row-footer">
                <div className="column-footer">
                    <p className="under-footer">2020 | A MERX é uma plataforma de tecnologia que descomplica o mercado de energia de forma simples, sem carência, sem franquia e sem burocracia.</p>
                </div>
            </div>
        </div>
    )
}