import React, { Component } from 'react';
//import { Spinner } from 'react-bootstrap';

import BlackLogo from "../../Assets/blackLogo.png"
import NavBar from '../../Components/Navbar/index';
import Footer from '../../Components/Footer/index';

import SearchBox from '../../Components/SearchBox';
import Scroll from '../../Components/Scroll';

import DadosReceita from '../../Components/DadosReceita/index';
import QuadroSocietario from '../../Components/QuadroSocietario/index';
import DadosCCEE from '../../Components/DadosCCEE/index';
import Medias from '../../Components/Medias/index';
import Lastro from '../../Components/Lastro/index';
import GraficoConsumo from '../../Components/GraficoConsumo/index';
import GraficoTotal from '../../Components/GraficoTotal/index';

import './style.css';


import api from '../../Services/apiSimulation'

import apiReceita from '../../Services/apiReceita';



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
            

            var dataName = {
                NomeAgente: '',
                CnpjAgente: '',
                dataReceita: {}
            }
            
            dataName.NomeAgente = response.data.map( item => item.NomeAgente );
             
            let filtData = dataName.NomeAgente.filter((este, i) => dataName.NomeAgente.indexOf(este) === i);

            this.setState({ data: filtData })
            
        } catch (err) {
            alert('erro ao se comunicar com o bds')
        }


    }

    onSearchChange = (event) => { 
        this.setState({ searchfield: event.target.value });
    }

    newSearch = (event) => {
        event.preventDefault();
        this.setState({ show: false })
        this.setState({ searchfield: '' })
        window.location.reload();
    }

    handleClickopt = async (data) =>{

        this.setState({ searchfield: data })

        var my_cnpj;

        const NomeAgente  = data
        
        var response = await api.post("/DadosCadastrais", { NomeAgente });
        
        my_cnpj = response.data[0].CnpjAgente;

        if(my_cnpj.length < 14) my_cnpj = '0' + my_cnpj;
        response = await apiReceita.get(`/${my_cnpj}`);

        const dataReceita = response.data

        this.setState({ dataReceita })

        this.setState({ show: true })


    }

    render() {

        const { data, searchfield, show, dataReceita } = this.state;

        const filteredData = data.filter( dado => {
            return dado.toLowerCase().includes(searchfield.toLowerCase());
        })

        return (
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
                                    </Scroll>
                                }
                            </div>
                        }
                        { show === true && 
                            <div>
                                <img alt="logo" src={BlackLogo} className="logo-login"></img>
                                <h1 style={{color: 'black', margin: '20px 0px', fontSize: '26px'}}>{searchfield}</h1>
                                <DadosReceita nome={dataReceita.nome}  uf={dataReceita.uf} bairro={dataReceita.bairro} cep={dataReceita.cep} municipio={dataReceita.municipio} abertura={dataReceita.abertura} tipo={dataReceita.tipo} cnpj={dataReceita.cnpj} />
                                <QuadroSocietario qsa={dataReceita.qsa} />
                                <DadosCCEE  nome={searchfield} />
                                <Medias nome={searchfield} uf={dataReceita.uf}/>
                                <GraficoTotal nome={searchfield} />
                                <GraficoConsumo nome={searchfield}/>
                                <Lastro nome={searchfield} />

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
