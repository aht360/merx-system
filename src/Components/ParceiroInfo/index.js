import React from 'react';

import Avatar from '../../Assets/blackLogo.png';
import DownIcon from '../../Assets/DownIcon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

export default function ClientInfo(props){

    const Nome = props.Nome;
    const companyCNPJ = props.companyCNPJ;
    const Sigla = props.Sigla;
    const InicioACL = props.InicioACL;
    const Submercado = props.Submercado;
    const Classe = props.Classe;
    const Categoria = props.Categoria;
    const AgCC = props.AgCC;
    const ContEnerg = props.ContEnerg;
    const GarantCont = props.GarantCont;

    return(

        <div className="clientInfo-container">

            <h1 className="clientInfo-title">Área do Parceiro</h1>

            <div className="clientInfo-display-row" style={{paddingTop: "45px"}}>

                <div className="clientInfo-avatar-container">
                    <img className="imgSizeAvatar" src={Avatar} alt="pc"/>
                    <button className="editAvatar">
                        <FontAwesomeIcon icon={faEdit} className="iconClientInfo"/>
                    </button>
                </div>

                <div className="clientInfo-display-column cel-modifier">
                    
                    <div className="clientInfo-display-row" style={{justifyContent: "space-between"}}>

                        <div className="clientInfo-box-content">
                            <p className="clientInfo-box-content-title">Nome</p>
                            <p className="clientInfo-box-content-subtitle">{Nome}</p>
                        </div>

                        <div className="clientInfo-box-content">
                            <p className="clientInfo-box-content-title">CNPJ</p>
                            <p className="clientInfo-box-content-subtitle">{companyCNPJ}</p>
                        </div>

                        <div className="clientInfo-box-content">
                            <p className="clientInfo-box-content-title" style={{width: "100px"}}>Sigla</p>
                            <p className="clientInfo-box-content-subtitle">{Sigla}</p>
                        </div>
                        <div className="clientInfo-box-content" style={{width: "150px"}}>
                            <p className="clientInfo-box-content-title">Início ACL</p>
                            <p className="clientInfo-box-content-subtitle">{InicioACL}</p>
                        </div>

                    </div>

                    <div className="clientInfo-display-row" style={{justifyContent: "space-between"}}>

                        <div className="clientInfo-box-content">
                            <p className="clientInfo-box-content-title">Submercado</p>
                            <p className="clientInfo-box-content-subtitle">{Submercado}</p>
                        </div>
                        <div className="clientInfo-box-content">
                            <p className="clientInfo-box-content-title">Classe</p>
                            <p className="clientInfo-box-content-subtitle">{Classe}</p>
                        </div>
                        <div className="clientInfo-box-content">
                            <p className="clientInfo-box-content-title" style={{width: "100px"}}>Categoria</p>
                            <p className="clientInfo-box-content-subtitle">{Categoria}</p>
                        </div>
                        <div className="clientInfo-box-content" style={{width: "150px"}}>
                            <p className="clientInfo-box-content-title">AG/CC Bradesco</p>
                            <p className="clientInfo-box-content-subtitle">{AgCC}</p>
                        </div>
                    </div>

                    <div className="clientInfo-display-row" style={{justifyContent: "flex-start"}}>
                        <div className="clientInfo-box-content">
                            <p className="clientInfo-box-content-title">Contrato Energia</p>

                            <div className="clientInfo-display-row down-box">
                                <p className="clientInfo-box-content-subtitle" style={{color: "#0067CC"}}>{ContEnerg}</p>
                                <a href="#d" className="clientInfo-box-content-subtitle">
                                    <img src={DownIcon} alt="download"/>
                                </a>
                            </div>
                            
                        </div>
                        <div className="clientInfo-box-content">
                            <p className="clientInfo-box-content-title">Garantia Contrato</p>
                            
                            <div className="clientInfo-display-row down-box">
                                <p className="clientInfo-box-content-subtitle" style={{color: "#0067CC"}}>{GarantCont}</p>
                                <a href="#d" className="clientInfo-box-content-subtitle">
                                    <img src={DownIcon} alt="download"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    );
}