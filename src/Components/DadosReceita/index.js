import React, { Component }  from 'react';


import './style.css';


class App extends Component{

    constructor(props){
        super();
        this.state = {
            nome: props.nome,
            uf: props.uf,
            bairro: props.bairro,
            cep: props.cep,
            municipio: props.municipio,
            abertura: props.abertura,
            tipo: props.tipo,
            cnpj: props.cnpj
        }
    }

    render(){        

        const { nome, uf, bairro, cep, municipio, abertura, tipo, cnpj } = this.state;

        return(
            <div>
                { nome !== undefined && 
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", color: "black"}}>
                    <div style={{display: "flex", flexDirection: "column", marginTop: "50px", backgroundColor: "white", width: "1200px", padding: "30px", borderRadius: "10px", boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.06)"}}>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            <p style={{fontSize: "30px", fontWeight: "bold"}}>Dados da empresa:</p>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", borderBottom: "solid", borderWidth: '1px'}}>
                            <div style={{display: "flex", flexDirection: "row", alignItems: "baseline", width: '600px', justifyContent: "center"}}>
                                <p style={{fontWeight: "bold", fontSize: "22px"}}>Nome: </p>
                                <p style={{fontSize: "18px", marginLeft: "10px"}}>{nome}</p>
                            </div>
                            <div style={{display: "flex", flexDirection: "row", alignItems: "baseline", width: '600px',  justifyContent: "center"}}>
                                <p style={{fontWeight: "bold", fontSize: "22px"}}>UF: </p>
                                <p style={{fontSize: "18px", marginLeft: "10px"}}>{uf}</p>
                            </div>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", borderBottom: "solid", borderWidth: '1px'}}>
                            <div style={{display: "flex", flexDirection: "row", alignItems: "baseline", width: '300px'}}>
                                <p style={{fontWeight: "bold", fontSize: "22px"}}>Bairro: </p>
                                <p style={{fontSize: "18px", marginLeft: "10px"}}>{bairro}</p>
                            </div>
                            <div style={{display: "flex", flexDirection: "row", alignItems: "baseline", width: '300px'}}>
                                <p style={{fontWeight: "bold", fontSize: "22px"}}>CEP: </p>
                                <p style={{fontSize: "18px", marginLeft: "10px"}}>{cep}</p>
                            </div>
                            <div style={{display: "flex", flexDirection: "row", alignItems: "baseline", width: '300px'}}>
                                <p style={{fontWeight: "bold", fontSize: "22px"}}>Municipio: </p>
                                <p style={{fontSize: "18px", marginLeft: "10px"}}>{municipio}</p>
                            </div>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", borderBottom: "solid", borderWidth: '1px'}}>
                            <div style={{display: "flex", flexDirection: "row", alignItems: "baseline", width: '300px'}}>
                                <p style={{fontWeight: "bold", fontSize: "22px"}}>Abertura: </p>
                                <p style={{fontSize: "18px", marginLeft: "10px"}}>{abertura}</p>
                            </div>
                            <div style={{display: "flex", flexDirection: "row", alignItems: "baseline", width: '300px'}}>
                                <p style={{fontWeight: "bold", fontSize: "22px"}}>Tipo: </p>
                                <p style={{fontSize: "18px", marginLeft: "10px"}}>{tipo}</p>
                            </div>
                            <div style={{display: "flex", flexDirection: "row", alignItems: "baseline", width: '300px'}}>
                                <p style={{fontWeight: "bold", fontSize: "22px"}}>CNPJ: </p>
                                <p style={{fontSize: "18px", marginLeft: "10px"}}>{cnpj}</p>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>
        );

    }
}


export default App;
