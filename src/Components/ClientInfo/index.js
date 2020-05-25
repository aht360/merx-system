import React from 'react';
import './style.css';
import Avatar from '../../Assets/avatar-empty.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

export default function ClientInfo(){
    return(
        <div className="clientInfo-container">

            <h1 className="clientInfo-title">Área do cliente</h1>

            <div className="clientInfo-display-row" style={{alignItems: "center", justifyContent: "space-evenly", paddingTop: "45px"}}>

                <div className="clientInfo-avatar-container">
                    <img className="imgSizeAvatar" src={Avatar} alt="pc"/>
                </div>

                <div className="clientInfo-display-column cel-modifier">
                    
                    <div className="clientInfo-display-row" style={{justifyContent: "space-between"}}>

                        <div className="clientInfo-box-content">
                            <p className="clientInfo-box-content-title">Nome</p>
                            <p className="clientInfo-box-content-subtitle">Brascolor gráfica e editora</p>
                        </div>

                        <div className="clientInfo-box-content">
                            <p className="clientInfo-box-content-title">CNPJ</p>
                            <p className="clientInfo-box-content-subtitle">01.234.567/0001-23</p>
                        </div>

                        <div className="clientInfo-box-content">
                            <p className="clientInfo-box-content-title">Sigla</p>
                            <p className="clientInfo-box-content-subtitle">BRASCOLOR</p>
                        </div>
                        <div className="clientInfo-box-content">
                            <p className="clientInfo-box-content-title">Início ACL</p>
                            <p className="clientInfo-box-content-subtitle">01/12/2019</p>
                        </div>

                    </div>

                    <div className="clientInfo-display-row" style={{justifyContent: "space-between"}}>

                        <div className="clientInfo-box-content">
                            <p className="clientInfo-box-content-title">Submercado</p>
                            <p className="clientInfo-box-content-subtitle">Nordeste</p>
                        </div>
                        <div className="clientInfo-box-content">
                            <p className="clientInfo-box-content-title">Classe</p>
                            <p className="clientInfo-box-content-subtitle">Consumidor especial</p>
                        </div>
                        <div className="clientInfo-box-content">
                            <p className="clientInfo-box-content-title">Categoria</p>
                            <p className="clientInfo-box-content-subtitle">Comercialização</p>
                        </div>
                        <div className="clientInfo-box-content">
                            <p className="clientInfo-box-content-title">AG/CC Bradesco</p>
                            <p className="clientInfo-box-content-subtitle">012-3 / 12.345-67</p>
                        </div>
                    </div>

                    <div className="clientInfo-display-row" style={{justifyContent: "flex-start"}}>
                        <div className="clientInfo-box-content">
                            <p className="clientInfo-box-content-title">Contrato Energia</p>

                            <div className="clientInfo-display-row down-box">
                                <p className="clientInfo-box-content-subtitle">CPFL</p>
                                <a href="#d" className="clientInfo-box-content-subtitle">
                                    <FontAwesomeIcon icon={faDownload} className="iconClientInfo"/>
                                </a>
                            </div>
                            
                        </div>
                        <div className="clientInfo-box-content">
                            <p className="clientInfo-box-content-title">Garantia Contrato</p>
                            
                            <div className="clientInfo-display-row down-box">
                                <p className="clientInfo-box-content-subtitle">23/05/2020 Seguradora</p>
                                <a href="#d" className="clientInfo-box-content-subtitle">
                                    <FontAwesomeIcon icon={faDownload} className="iconClientInfo"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    );
}