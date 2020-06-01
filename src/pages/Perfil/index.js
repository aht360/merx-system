import React, { useState }  from 'react';
import NavBar from '../../Components/Navbar/index';
import Footer from '../../Components/Footer/index';
import './style.css';


import api from '../../Services/apiSimulation'

import { getToken } from '../../Services/auth';



export default function Main(){

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ tel, setTel ] = useState('');
    const [ cpf, setCpf ] = useState('');
    const [ cnpj, setCnpj ] = useState('');

    
    async function getName(){
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

            setName(response.data.user.nome);
            setEmail(response.data.user.email);
            setTel(response.data.user.tel);
            setCpf(response.data.user.cpf);
            setCnpj(response.data.user.cnpj)

        } catch (err) {
            console.log(err);
            alert("Erro ao pegar os dados do usuario");
        }


    }
    
    getName();

    return(
        <div className="container-data-master">
            <NavBar changeColor="false"/>

            <div className="container-data-external">

                <h1>Seu perfil</h1>
                
                <div className="container-data">
                    <div className="linha-data">
                        <p className="title-data">Nome: </p>
                        <p className="item-data">{name}</p>
                    </div>
                    <div className="linha-data">
                        <p className="title-data">Email: </p>
                        <p className="item-data">{email}</p>
                    </div>
                    <div className="linha-data">
                        <p className="title-data">Telefone: </p>
                        <p className="item-data">{tel}</p>
                    </div>
                    <div className="linha-data">
                        <p className="title-data">CPF: </p>
                        <p className="item-data">{cpf}</p>
                    </div>
                    <div className="linha-data">
                        <p className="title-data">CNPJ: </p>
                        <p className="item-data">{cnpj}</p>
                    </div>
                </div>

            </div>
            
            <Footer />
        </div>
    )
}


