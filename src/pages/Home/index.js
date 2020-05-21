import React from 'react';
import {Body} from './styles.js';
import NavBar from '../../Components/Navbar/index';
import Header from '../../Components/Header/index';
import HeaderFooter from '../../Components/HeaderFooter/index';
import Compare from '../../Components/Compare/index';
import About from '../../Components/About/index';
import Revolution from '../../Components/Revolution/index';
import Team from '../../Components/Team/index';
import Footer from '../../Components/Footer/index';

export default function Main(){

    return(
        <Body>
            <NavBar />
            <Header />
            <HeaderFooter />
            <Compare />
            <About />
            <Revolution />
            <Team />
            <Footer/>
        </Body>
    )
}


