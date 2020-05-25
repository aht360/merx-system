import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import './style.css';

export default function CheckCard(){


    return(
        <div className="container-checkCard">

            <div className="card-checkbox">

                <div className="card-checkbox-item">
                    <p className="card-checkbox-item-title"> <FontAwesomeIcon icon={faCheck} className="iconCardCheck"/> Empresa</p>
                    <p className="card-checkbox-item-content">Classe, categoria e informações cadastrais da empresa</p>
                </div>

                <div className="card-checkbox-item">
                    <div className="card-checkbox-item">
                        <p className="card-checkbox-item-title"> <FontAwesomeIcon icon={faCheck} className="iconCardCheck"/> Informações Financeiras</p>
                        <p className="card-checkbox-item-content">Classe, categoria e informações cadastrais da empresa</p>
                    </div>
                </div>

                <div className="card-checkbox-item">
                    <div className="card-checkbox-item">
                        <p className="card-checkbox-item-title"> <FontAwesomeIcon icon={faCheck} className="iconCardCheck"/> Contratos e atribuições</p>
                        <p className="card-checkbox-item-content">Classe, categoria e informações cadastrais da empresa</p>
                    </div>
                </div>

                <div className="card-checkbox-item">
                    <div className="card-checkbox-item" style={{color: "#C4C4C4"}}>
                        <p className="card-checkbox-item-title"> <FontAwesomeIcon icon={faCheck}/> Perfil de agente</p>
                        <p className="card-checkbox-item-content">Perfis de atuação no mercado</p>
                    </div>
                </div>

                <div className="card-checkbox-item">
                    <div className="card-checkbox-item" style={{color: "#C4C4C4"}}>
                        <p className="card-checkbox-item-title"> <FontAwesomeIcon icon={faCheck}/> Documentos</p>
                        <p className="card-checkbox-item-content">Documentos vinculados ao cadastro da organização</p>
                    </div>
                </div>

                <div className="card-checkbox-item">
                    <div className="card-checkbox-item" style={{color: "#C4C4C4"}}>
                        <p className="card-checkbox-item-title"> <FontAwesomeIcon icon={faCheck}/> Resumo</p>
                        <p className="card-checkbox-item-content">Resumo das informações cadastrais da empresa</p>
                    </div>
                </div>
                
            </div>

        </div>
    );
}