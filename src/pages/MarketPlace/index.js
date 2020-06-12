import React from 'react';
import './style.css';
import NavBar from '../../Components/Navbar/index';
import MarketImg from '../../Assets/market.jpeg'
import Footer from '../../Components/Footer/index';

export default function Main(){
    return(
        <div className="master-container" style={{textAlign: "center"}}>
            <NavBar changeColor="true"/>
            <h1 className="cvt-title">MARKETPLACE</h1>
            <div className="cvt">
                <p className="cvt-item active-item">
                    Todos
                </p>
                <p className="cvt-item">
                    Compra
                </p>
                <p className="cvt-item">
                    Venda
                </p>      
            </div>
            <img src={MarketImg} alt="market"/>
            <Footer />
        </div>
    )
}


