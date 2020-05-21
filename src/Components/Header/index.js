import React from 'react';
import Pc from '../../Assets/Pc.png';
import ReactTypingEffect from 'react-typing-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import './style.css';

export default function Header(){

    var phrases = ["Escolha seu fornecedor","Negocie sua energia excedente ou gerada","Realize suas cotações",
                  "Analise seus dados","Simule sua economia","Conheça mais sobre,"];

    return(
        <div className="container">
            <div className="container-text">
                <div className="container-text-typedEffect">
                    <b><ReactTypingEffect text={phrases} eraseDelay="2000" speed="50"/></b>
                    <br/>
                    <b>No mercado livre de energia.</b>
                </div>
                <div className="subText">
                    <span>Nós criamos uma plataforma para lhe dar todo o controle sobre sua performance e rentabilidade, entre em contato conosco e nós cuidamos de todo o resto.</span>
                </div>
                <a href="https://google.com" className="btn btn-header btn--animated">
                    Faça suas cotações <FontAwesomeIcon icon={faArrowCircleRight} className="verticalIcon"/>
                </a>
            </div>

            <div className="container-img">
                <img className="imgSize" src={Pc} alt="pc"/>
            </div>
        </div>
    );
}