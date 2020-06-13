import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import './style.css';
import Correct from '../../Assets/correct.png';

export default function CheckCard(props){

    

    return(
        <div className="container-checkCard">

            <div className="card-checkbox">

                {   
                    props.EnergiaCheck
                    &&  
                    <div className="card-checkbox-item">
                        <p className="card-checkbox-item-title"> <img src={Correct} alt="correct" className="iconCardCheck"/> Energia ACL</p>
                        <p className="card-checkbox-item-content">Compra de Energia</p>
                    </div>
                }
                {   
                    !props.EnergiaCheck
                    &&  
                    <div className="card-checkbox-item" style={{color: "#C4C4C4"}}>
                        <p className="card-checkbox-item-title"> <img src={Correct} alt="correct"/> Energia</p>
                        <p className="card-checkbox-item-content">Compra de Energia</p>
                    </div>
                }

                <div className="card-checkbox-item">
                    {
                        props.DistribuidoraCheck
                        && 
                        <div className="card-checkbox-item">
                            <p className="card-checkbox-item-title"> <img src={Correct} alt="correct" className="iconCardCheck"/> Distribuidora</p>
                            <p className="card-checkbox-item-content">Ajuste e gestão de contratos</p>
                        </div>
                    }
                    {
                        !props.DistribuidoraCheck
                        && 
                        <div className="card-checkbox-item" style={{color: "#C4C4C4"}}>
                            <p className="card-checkbox-item-title"> <img src={Correct} alt="correct"/> Distribuidora</p>
                            <p className="card-checkbox-item-content">Ajuste e gestão de contratos</p>
                        </div>
                    }
                </div>

                <div className="card-checkbox-item">
                    {
                        props.FinanceiroCheck
                        && 
                        <div className="card-checkbox-item">
                            <p className="card-checkbox-item-title"> <img src={Correct} alt="correct" className="iconCardCheck"/> Informações financeiras</p>
                            <p className="card-checkbox-item-content">Abertura da Conta Trianon</p>
                        </div>
                    }
                    {
                        !props.FinanceiroCheck
                        && 
                        <div className="card-checkbox-item" style={{color: "#C4C4C4"}}>
                            <p className="card-checkbox-item-title"> <img src={Correct} alt="correct"/> Informações financeiras</p>
                            <p className="card-checkbox-item-content">Abertura da Conta Trianon</p>
                        </div>
                    }
                </div>

                <div className="card-checkbox-item">
                    {
                        props.CCEECheck
                        && 
                        <div className="card-checkbox-item">
                            <p className="card-checkbox-item-title"> <FontAwesomeIcon  icon={faCheck} className="iconCardCheck"/> CCEE</p>
                            <p className="card-checkbox-item-content">Processo de aprovação na CCEE</p>
                        </div>
                    }
                    {
                        !props.CCEECheck
                        && 
                        <div className="card-checkbox-item" style={{color: "#C4C4C4"}}>
                            <p className="card-checkbox-item-title"> <FontAwesomeIcon icon={faCheck}/> CCEE</p>
                            <p className="card-checkbox-item-content">Processo de aprovação na CCEE</p>
                        </div>
                    }
                </div>

                <div className="card-checkbox-item">
                    {
                        props.MedicaoCheck
                        && 
                        <div className="card-checkbox-item">
                            <p className="card-checkbox-item-title"> <img src={Correct} alt="correct" className="iconCardCheck"/> Adequação da Medição</p>
                            <p className="card-checkbox-item-content">Ajuste físico da Medição</p>
                        </div>
                    }
                    {
                        !props.MedicaoCheck
                        && 
                        <div className="card-checkbox-item" style={{color: "#C4C4C4"}}>
                            <p className="card-checkbox-item-title"> <FontAwesomeIcon icon={faCheck}/> Adequação da Medição</p>
                            <p className="card-checkbox-item-content">Ajuste físico da Medição</p>
                        </div>
                    }
                </div>

                <div className="card-checkbox-item">
                    {
                        props.AprovacaoCheck
                        &&
                        <div className="card-checkbox-item">
                            <p className="card-checkbox-item-title"> <img src={Correct} alt="correct" className="iconCardCheck"/> Aprovação</p>
                            <p className="card-checkbox-item-content">Consumidor Livre</p>
                        </div>
                    }
                    {
                        !props.AprovacaoCheck
                        &&
                        <div className="card-checkbox-item" style={{color: "#C4C4C4"}}>
                            <p className="card-checkbox-item-title"> <FontAwesomeIcon icon={faCheck}/> Aprovação</p>
                            <p className="card-checkbox-item-content">Consumidor Livre</p>
                        </div>
                    }
                </div>
                
            </div>

        </div>
    );
}