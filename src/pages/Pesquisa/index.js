import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';

import BlackLogo from "../../Assets/blackLogo.png"
import NavBar from '../../Components/Navbar/index';
import Footer from '../../Components/Footer/index';

import SearchBox from '../../Components/SearchBox';
import Scroll from '../../Components/Scroll';

import DadosCCEE from '../../Components/DadosCCEE/index';
import GraficoConsumo from '../../Components/GraficoConsumo/index';

import './style.css';


import api from '../../Services/apiSimulation'




class App extends Component {

    constructor() {
        super();

        this.state = {
            searchfield: '',
            data: [],
            show: false
        };
    }

    async componentDidMount() {
        try {
            const response = await api.get('/ShowDadosCadastrais');
            let dataName = response.data.map( item => item.NomeAgente );
            let filtData = dataName.filter((este, i) => dataName.indexOf(este) === i);
            this.setState({ data: filtData })
            
        } catch (err) {
            alert('erro ao se comunicar com o bd')
        }
    }

    onSearchChange = (event) => {
        
        this.setState({ searchfield: event.target.value });
    }

    newSearch = (event) => {
        event.preventDefault();
        this.setState({ show: false })
        this.setState({ searchfield: '' })
    }

    handleClickopt = (data) =>{

        this.setState({ searchfield: data })
        this.setState({ show: true })
    }

    render() {

        const { data, searchfield, show } = this.state;

        const filteredData = data.filter( dado => {
            return dado.toLowerCase().includes(searchfield.toLowerCase());
        })

        return !data.length ?
            (
                <div>
                    <NavBar changeColor="false" />
                    <div className="container-pesquisa-master" style={{ textAlign: "center" }}>
                        <h1 style={{ marginTop: "100px"}}>Carregando dados...</h1>
                        <div style={{ marginTop: "100px", height: '20vh' }}>
                            <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        </div>
                    </div>
                    <Footer />
                </div>
            )
            
            :

            (
                <div style={{ textAlign: "center" }}>
                    <NavBar changeColor="false" />
                    <div className="container-pesquisa-master">
                        { show === false &&
                            <div>  
                                <img alt="logo" src={BlackLogo} className="logo-login"></img>
                                <h1 style={{color: 'black', margin: '20px 0px', fontSize: '32px'}}>PESQUISA MERCADO LIVRE</h1>
                                <SearchBox searchChange={this.onSearchChange} />
                                {
                                    this.state.searchfield !== '' &&
                                    <Scroll>
                                        {
                                            filteredData.map( data => 
                                                <p className="search-item" onClick={ () => this.handleClickopt(data) }>{data}</p>
                                            )
                                        }
                                    </Scroll>}
                            </div>
                        }
                        { show === true && 
                            <div>
                                <img alt="logo" src={BlackLogo} className="logo-login"></img>
                                <h1 style={{color: 'black', margin: '20px 0px', fontSize: '32px'}}>PESQUISA MERCADO LIVRE</h1>
                                <h1 style={{color: 'black', margin: '20px 0px', fontSize: '26px'}}>{searchfield}</h1>
                                <DadosCCEE  nome={searchfield}/>
                                <GraficoConsumo nome={searchfield}/>
                                <button style={{marginTop: '30px'}} onClick={this.newSearch} className="styled-btn-pesquisa" >Nova pesquisa</button>
                            </div>

                        }
                    </div>

                    <Footer />
                </div>
                
            )
    }
}


export default App;
