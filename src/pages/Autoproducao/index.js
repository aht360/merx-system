import React from 'react';
import NavBar from '../../Components/Navbar/index';
import HeaderDefault from '../../Components/HeaderDefault/index';
import Schema from '../../Components/Schema/index';
import Vantagens from '../../Components/Vantagens/index';
import Team from '../../Components/Team/index';
import Footer from '../../Components/Footer/index';
import './style.css';

export default function Main(){

    return(
        <div className="container-autoproducao">
            <NavBar changeColor="false"/>
            <HeaderDefault screen="autoproducao" />
            <Schema />
            <Vantagens />
            <Team />
            <Footer />
        </div>
    )
}


