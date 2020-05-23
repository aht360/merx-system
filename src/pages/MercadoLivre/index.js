import React from 'react';
import './style.css';
import NavBar from '../../Components/Navbar/index';
import HeaderMercadoLivre from '../../Components/HeaderMercadoLivre/index';
import Modernizacao from '../../Components/Modernizacao/index';
import Schema from '../../Components/Schema/index';
import Team from '../../Components/Team/index';
import Footer from '../../Components/Footer/index';

export default function Main(){

    return(
        <div className="container-mercadoLivre">
            <NavBar changeColor="false"/>
            <HeaderMercadoLivre />
            <Schema />
            <Modernizacao />
            <Team />
            <Footer />
            
        </div>
    )
}


