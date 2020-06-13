import React, { useState } from 'react';
import NavBar from '../../Components/Navbar/index';

import ParceiroInfo from '../../Components/ClientInfo/index';
import Footer from '../../Components/Footer/index';

import './style.css';

import api from '../../Services/apiSimulation'

import { getToken } from '../../Services/auth';


export default function Main(){

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
        <div className="master-container-client">
            <NavBar changeColor="true" />
            <ParceiroInfo Nome={Nome} companyCNPJ={companyCNPJ} Sigla={Sigla} InicioACL={InicioACL} Submercado={Submercado} Classe={Classe} Categoria={Categoria} AgCC={AgCC} ContEnerg={ContEnerg} GarantCont={GarantCont} />
            
            <Footer />
        </div>
    )
}


