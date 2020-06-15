import React, { Component }  from 'react';



class App extends Component{

    constructor(props){
        super();
        
        this.state = {
            data: props.qsa
        }
    }

    render(){        

        const { data } = this.state;

        return(
            <div>
                {   this.state.data !== undefined &&
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", color: "black"}}>
                    <div style={{display: "flex", flexDirection: "column", marginTop: "50px", backgroundColor: "white", width: "1200px", padding: "30px", borderRadius: "10px", boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.06)"}}>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            <p style={{fontSize: "30px", fontWeight: "bold"}}>Quadro Societário:</p>
                        </div>

                        {
                            data.map( item => 
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start", borderBottom: "solid", borderWidth: '1px', fontSize: "12px"}}>
                                    <div style={{display: "flex", flexDirection: "row", alignItems: "baseline"}}>
                                        <p style={{fontWeight: "bold", fontSize: "16px"}}>Nome: </p>
                                        <p style={{fontSize: "14px", marginLeft: "10px"}}>{item.nome}</p>
                                        <p style={{fontSize: "14px", marginLeft: "10px"}}>{item.nome_rep_legal}</p>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
                }
            </div>
        );

    }
}


export default App;
