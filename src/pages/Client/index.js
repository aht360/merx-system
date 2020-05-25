import React from 'react';
import NavBar from '../../Components/Navbar/index';

import ClientInfo from '../../Components/ClientInfo/index';
import CheckCard from '../../Components/CheckCard/index';

import Footer from '../../Components/Footer/index';

import './style.css';

export default function Main(){
    return(
        <div className="master-container-client">
            <NavBar changeColor="true" />
            <ClientInfo />
            <CheckCard />
            <Footer />
        </div>
    )
}


