import React from 'react';
import './style.css';
import NavBar from '../../Components/Navbar/index';
import HeaderMercadoLivre from '../../Components/HeaderMercadoLivre/index';
import Modernizacao from '../../Components/Modernizacao/index';
import Video from '../../Components/Video/index';
import Table from '../../Components/Table/index';
import Team from '../../Components/Team/index';
import Footer from '../../Components/Footer/index';

export default function Main(){

    return(
        <div className="container-mercadoLivre">
            <NavBar changeColor="false"/>
            <HeaderMercadoLivre />
            <Video />
            <Table />
            <Modernizacao />
            <Team />
            <Footer />
            
        </div>
    )
}


