import React from 'react';
import NavBar from '../../Components/Navbar/index';

import ClientInfo from '../../Components/ClientInfo/index';
import CheckCard from '../../Components/CheckCard/index';
import CoustCardRow from '../../Components/CoustCardRow/index';
import ProgressBar from '../../Components/ProgressBar/index';

import Footer from '../../Components/Footer/index';

import './style.css';

export default function Main(){
    return(
        <div className="master-container-client">
            <NavBar changeColor="true" />
            <ClientInfo />
            <CheckCard />
            <ProgressBar value="50"/>
            <CoustCardRow />
            <Footer />
        </div>
    )
}


