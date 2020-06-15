import React from 'react';
import './style.css';
import NavBar from '../../Components/Navbar/index';
import MarketImg from '../../Assets/marketplace.jpeg'
import Footer from '../../Components/Footer/index';

export default function Main(){
    return(
        <div className="master-container" style={{textAlign: "center"}}>
            <NavBar changeColor="true"/>
            <div style={{backgroundColor: "#E5E5E5"}}>
                <img src={MarketImg} alt="market" style={{backgroundColor: "#E5E5E5"}}/>

            </div>
            <Footer />
        </div>
    )
}


