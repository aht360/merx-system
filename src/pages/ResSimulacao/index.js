import React from 'react';

import Navbar from '../../Components/Navbar/index';

import Footer from '../../Components/Footer/index';

import './style.css';


export default function Simulacao(){
    return(
        <div className="container-simulacao-master">
            <Navbar changeColor="false"/>
            <h1>Resultado simulacao</h1>
            <Footer />
        </div>
    );
}