import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import './style.css';

export default function CheckCard(){


    return(
        <div className="container-checkCard">

            <div className="card-checkbox">

                <div className="card-checkbox-item">
                    <p className="card-checkbox-item-title"> <FontAwesomeIcon icon={faCheck} className="iconCardCheck"/> Energia</p>
                    <p className="card-checkbox-item-content">Compra de Energia</p>
                </div>

                <div className="card-checkbox-item">
                    <div className="card-checkbox-item">
                        <p className="card-checkbox-item-title"> <FontAwesomeIcon icon={faCheck} className="iconCardCheck"/> Distribuidora</p>
                        <p className="card-checkbox-item-content">Ajuste e gestão de contratos</p>
                    </div>
                </div>

                <div className="card-checkbox-item">
                    <div className="card-checkbox-item">
                        <p className="card-checkbox-item-title"> <FontAwesomeIcon icon={faCheck} className="iconCardCheck"/> Informações financeiras</p>
                        <p className="card-checkbox-item-content">Abertura da Conta Trianon</p>
                    </div>
                </div>

                <div className="card-checkbox-item">
                    <div className="card-checkbox-item" style={{color: "#C4C4C4"}}>
                        <p className="card-checkbox-item-title"> <FontAwesomeIcon icon={faCheck}/> CCEE</p>
                        <p className="card-checkbox-item-content">Processo de aprovação na CCEE</p>
                    </div>
                </div>

                <div className="card-checkbox-item">
                    <div className="card-checkbox-item" style={{color: "#C4C4C4"}}>
                        <p className="card-checkbox-item-title"> <FontAwesomeIcon icon={faCheck}/> Adequação da Medição</p>
                        <p className="card-checkbox-item-content">Ajuste físico da Medição</p>
                    </div>
                </div>

                <div className="card-checkbox-item">
                    <div className="card-checkbox-item" style={{color: "#C4C4C4"}}>
                        <p className="card-checkbox-item-title"> <FontAwesomeIcon icon={faCheck}/> Aprovação</p>
                        <p className="card-checkbox-item-content">Consumidor Livre</p>
                    </div>
                </div>
                
            </div>

        </div>
    );
}