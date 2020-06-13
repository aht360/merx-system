import React from 'react';
import './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

export default function ConsumeTable(){
    return(
        <div className="consumeTable-container">
            <div className="consume-header">
                <p className="consume-title">Histórico</p>
                <p className="consume-subtitle">12 meses</p>
            </div>
            <div className="consume-content-table">
                {/*<MyTable />*/}
                <div className="mytable-row">
                    <p className="mytable-item-title">
                        Mês/Ano
                    </p>
                    <p className="mytable-item-title">
                        Consumo
                    </p>
                    <p className="mytable-item-title">
                        Contrato
                    </p>
                    <p className="mytable-item-title">
                        Lastro
                    </p>
                    <p className="mytable-item-title">
                        %
                    </p>
                </div>
                <div className="mytable-row">
                    <p className="mytable-item">
                        Mai/20
                    </p>
                    <p className="mytable-item">
                        953,87
                    </p>
                    <p className="mytable-item">
                        936,13
                    </p>
                    <p className="mytable-item">
                        -17,74
                    </p>
                    <p className="mytable-item" style={{width: "71px"}}>
                        <FontAwesomeIcon icon={faTimes} className="verticalIcon" style={{color: "red"}}/>
                    </p>
                    <p className="mytable-item" style={{width: "71px"}}>
                        0%
                    </p>
                </div>
                <div className="mytable-row">
                    <p className="mytable-item">
                        Abr/20
                    </p>
                    <p className="mytable-item">
                        953,87
                    </p>
                    <p className="mytable-item">
                        936,13
                    </p>
                    <p className="mytable-item">
                        -17,74
                    </p>
                    <p className="mytable-item" style={{width: "71px"}}>
                        <FontAwesomeIcon icon={faCheck} className="verticalIcon" style={{color: "green"}}/>
                    </p>
                    <p className="mytable-item" style={{width: "71px"}}>
                        0%
                    </p>
                </div>
                <div className="mytable-row">
                    <p className="mytable-item">
                        Mar/20
                    </p>
                    <p className="mytable-item">
                        953,87
                    </p>
                    <p className="mytable-item">
                        936,13
                    </p>
                    <p className="mytable-item">
                        -17,74
                    </p>
                    <p className="mytable-item" style={{width: "71px"}}>
                        <FontAwesomeIcon icon={faExclamation} className="verticalIcon" style={{color: "yellow"}}/>
                    </p>
                    <p className="mytable-item" style={{width: "71px"}}>
                        0%
                    </p>
                </div>
                <div className="mytable-row">
                    <p className="mytable-item">
                        Fev/20
                    </p>
                    <p className="mytable-item">
                        953,87
                    </p>
                    <p className="mytable-item">
                        936,13
                    </p>
                    <p className="mytable-item">
                        -17,74
                    </p>
                    <p className="mytable-item" style={{width: "71px"}}>
                        <FontAwesomeIcon icon={faTimes} className="verticalIcon" style={{color: "red"}}/>
                    </p>
                    <p className="mytable-item" style={{width: "71px"}}>
                        0%
                    </p>
                </div>
                <div className="mytable-row">
                    <p className="mytable-item">
                        Jan/20
                    </p>
                    <p className="mytable-item">
                        953,87
                    </p>
                    <p className="mytable-item">
                        936,13
                    </p>
                    <p className="mytable-item">
                        -17,74
                    </p>
                    <p className="mytable-item" style={{width: "71px"}}>
                        <FontAwesomeIcon icon={faCheck} className="verticalIcon" style={{color: "green"}}/>
                    </p>
                    <p className="mytable-item" style={{width: "71px"}}>
                        0%
                    </p>
                </div>
                <div className="mytable-row">
                    <p className="mytable-item">
                        Dez/20
                    </p>
                    <p className="mytable-item">
                        953,87
                    </p>
                    <p className="mytable-item">
                        936,13
                    </p>
                    <p className="mytable-item">
                        -17,74
                    </p>
                    <p className="mytable-item" style={{width: "71px"}}>
                        <FontAwesomeIcon icon={faCheck} className="verticalIcon" style={{color: "green"}}/>
                    </p>
                    <p className="mytable-item" style={{width: "71px"}}>
                        0%
                    </p>
                </div>
                <div className="mytable-row">
                    <p className="mytable-item">
                        Nov/20
                    </p>
                    <p className="mytable-item">
                        953,87
                    </p>
                    <p className="mytable-item">
                        936,13
                    </p>
                    <p className="mytable-item">
                        -17,74
                    </p>
                    <p className="mytable-item" style={{width: "71px"}}>
                        <FontAwesomeIcon icon={faCheck} className="verticalIcon" style={{color: "green"}}/>
                    </p>
                    <p className="mytable-item" style={{width: "71px"}}>
                        0%
                    </p>
                </div>
                <div className="mytable-row">
                    <p className="mytable-item">
                        Out/20
                    </p>
                    <p className="mytable-item">
                        953,87
                    </p>
                    <p className="mytable-item">
                        936,13
                    </p>
                    <p className="mytable-item">
                        -17,74
                    </p>
                    <p className="mytable-item" style={{width: "71px"}}>
                        <FontAwesomeIcon icon={faCheck} className="verticalIcon" style={{color: "green"}}/>
                    </p>
                    <p className="mytable-item" style={{width: "71px"}}>
                        0%
                    </p>
                </div>
                <div className="mytable-row">
                    <p className="mytable-item">
                        Set/20
                    </p>
                    <p className="mytable-item">
                        953,87
                    </p>
                    <p className="mytable-item">
                        936,13
                    </p>
                    <p className="mytable-item">
                        -17,74
                    </p>
                    <p className="mytable-item" style={{width: "71px"}}>
                        <FontAwesomeIcon icon={faCheck} className="verticalIcon" style={{color: "green"}}/>
                    </p>
                    <p className="mytable-item" style={{width: "71px"}}>
                        0%
                    </p>
                </div>
                <div className="mytable-row">
                    <p className="mytable-item">
                        Ago/20
                    </p>
                    <p className="mytable-item">
                        953,87
                    </p>
                    <p className="mytable-item">
                        936,13
                    </p>
                    <p className="mytable-item">
                        -17,74
                    </p>
                    <p className="mytable-item" style={{width: "71px"}}>
                        <FontAwesomeIcon icon={faCheck} className="verticalIcon" style={{color: "green"}}/>
                    </p>
                    <p className="mytable-item" style={{width: "71px"}}>
                        0%
                    </p>
                </div>
                <div className="mytable-row">
                    <p className="mytable-item">
                        Jul/20
                    </p>
                    <p className="mytable-item">
                        953,87
                    </p>
                    <p className="mytable-item">
                        936,13
                    </p>
                    <p className="mytable-item">
                        -17,74
                    </p>
                    <p className="mytable-item" style={{width: "71px"}}>
                        <FontAwesomeIcon icon={faCheck} className="verticalIcon" style={{color: "green"}}/>
                    </p>
                    <p className="mytable-item" style={{width: "71px"}}>
                        0%
                    </p>
                </div>
                <div className="mytable-row">
                    <p className="mytable-item">
                        Jun/20
                    </p>
                    <p className="mytable-item">
                        953,87
                    </p>
                    <p className="mytable-item">
                        936,13
                    </p>
                    <p className="mytable-item">
                        -17,74
                    </p>
                    <p className="mytable-item" style={{width: "71px"}}>
                        <FontAwesomeIcon icon={faCheck} className="verticalIcon" style={{color: "green"}}/>
                    </p>
                    <p className="mytable-item" style={{width: "71px"}}>
                        0%
                    </p>
                </div>
            </div>
            
        </div>
    );
}