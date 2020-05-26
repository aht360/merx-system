import React from 'react';

import Navbar from '../../Components/Navbar/index';

import HeaderDefault from '../../Components/HeaderDefault/index';
import FormSimulacao from '../../Components/FormSimulacao/index';

import Footer from '../../Components/Footer/index';

import './style.css';


export default function Simulacao(){
    return(
        <div className="container-simulacao-master">
            <Navbar changeColor="false"/>
            <HeaderDefault screen="simulacao" />
            <FormSimulacao />
            <Footer />
        </div>
    );
}