import React, { useState } from 'react';
import './style.css';
import Avatar from '../../Assets/avatar-empty.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

import api from '../../Services/apiSimulation'

import { getToken } from '../../Services/auth';


export default function ClientInfo(){

    const [ companyCNPJ, setCompCNPJ ] = useState('');
    const [ Nome, setNome ] = useState('');
    const [ Sigla, setSigla ] = useState('');
    const [ InicioACL, setInicioACL ] = useState('');
    const [ Submercado, setSubmercado ] = useState('');
    const [ Classe, setClasse ] = useState('');
    const [ Categoria, setCategoria ] = useState('');
    const [ AgCC, setAgCC ] = useState('');
    const [ ContEnerg, setContEnerg ] = useState('');
    const [ GarantCont, setGarantCont ] = useState('');

    async function getData(){

        const my_token = getToken();
        
        try {

            var response = await api.get('/user', {
                headers: { authorization: 'Bearer ' + my_token }
            })
            

        } catch (err) {
            console.log(err);
            alert("Erro ao pegar o id do usuario");
        }
        
        const _id = response.data.user_id;
        
        
        try {
            
            response = await api.post('/user', {_id},{
                headers: { authorization: 'Bearer ' + my_token }
            })

            setCompCNPJ(response.data.user.companyCNPJ);

        } catch (err) {
            console.log(err);
            alert("Erro ao pegar os dados do usuario");
        }
            
        response = await api.post('/getCompany', { companyCNPJ });

        console.log(response.data.company)
        setNome(response.data.company.Nome);
        setSigla(response.data.company.Sigla);
        setInicioACL(response.data.company.InicioACL);
        setSubmercado(response.data.company.Submercado);
        setClasse(response.data.company.Classe);
        setCategoria(response.data.company.Categoria);
        setAgCC(response.data.company.AgCC);
        setContEnerg(response.data.company.ContEnerg);
        setGarantCont(response.data.company.GarantCont);
        
    }

    getData();

    return(
        <div className="clientInfo-container">

            <h1 className="clientInfo-title">Área do cliente</h1>

            <div className="clientInfo-display-row" style={{alignItems: "center", justifyContent: "space-around", paddingTop: "45px"}}>

                <div className="clientInfo-avatar-container">
                    <img className="imgSizeAvatar" src={Avatar} alt="pc"/>
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
                            <p className="clientInfo-box-content-title">Sigla</p>
                            <p className="clientInfo-box-content-subtitle">{Sigla}</p>
                        </div>
                        <div className="clientInfo-box-content">
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
                            <p className="clientInfo-box-content-title">Categoria</p>
                            <p className="clientInfo-box-content-subtitle">{Categoria}</p>
                        </div>
                        <div className="clientInfo-box-content">
                            <p className="clientInfo-box-content-title">AG/CC Bradesco</p>
                            <p className="clientInfo-box-content-subtitle">{AgCC}</p>
                        </div>
                    </div>

                    <div className="clientInfo-display-row" style={{justifyContent: "flex-start"}}>
                        <div className="clientInfo-box-content">
                            <p className="clientInfo-box-content-title">Contrato Energia</p>

                            <div className="clientInfo-display-row down-box">
                                <p className="clientInfo-box-content-subtitle">{ContEnerg}</p>
                                <a href="#d" className="clientInfo-box-content-subtitle">
                                    <FontAwesomeIcon icon={faDownload} className="iconClientInfo"/>
                                </a>
                            </div>
                            
                        </div>
                        <div className="clientInfo-box-content">
                            <p className="clientInfo-box-content-title">Garantia Contrato</p>
                            
                            <div className="clientInfo-display-row down-box">
                                <p className="clientInfo-box-content-subtitle">{GarantCont}</p>
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