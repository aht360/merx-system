import React, { Component }  from 'react';
import api from '../../Services/apiSimulation'


class App extends Component{

    constructor(props){
        super();
        
        this.state = {
            NomeAgente: props.nome,
            mysUF: props.uf,
            VolumeMedio: '14.29',
            FlexMax: '0.1421',
            FlexMin: '0.1259',
            usina: '',
            data: [],
            erro: false
        }
    }

    async componentDidMount() {
        const { NomeAgente } = this.state;
        try {
            var response = await api.post("/DadosConsumo", { NomeAgente });

            const consumo_total = {

                Jan19: (Number(response.data[0].Jan19) + Number(response.data[1].Jan19) + Number(response.data[2].Jan19)),
                Fev19: (Number(response.data[0].Fev19) + Number(response.data[1].Fev19) + Number(response.data[2].Fev19)),
                Mar19: (Number(response.data[0].Mar19) + Number(response.data[1].Mar19) + Number(response.data[2].Mar19)),
                Abr19: (Number(response.data[0].Abr19) + Number(response.data[1].Abr19) + Number(response.data[2].Abr19)),
                Mai19: (Number(response.data[0].Mai19) + Number(response.data[1].Mai19) + Number(response.data[2].Mai19)),
                Jun19: (Number(response.data[0].Jun19) + Number(response.data[1].Jun19) + Number(response.data[2].Jun19)),
                Jul19: (Number(response.data[0].Jul19) + Number(response.data[1].Jul19) + Number(response.data[2].Jul19)),
                Ago19: (Number(response.data[0].Ago19) + Number(response.data[1].Ago19) + Number(response.data[2].Ago19)),
                Set19: (Number(response.data[0].Set19) + Number(response.data[1].Set19) + Number(response.data[2].Set19)),
                Out19: (Number(response.data[0].Out19) + Number(response.data[1].Out19) + Number(response.data[2].Out19)),
                Nov19: (Number(response.data[0].Nov19) + Number(response.data[1].Nov19) + Number(response.data[2].Nov19)),
                Dez19: (Number(response.data[0].Dez19) + Number(response.data[1].Dez19) + Number(response.data[2].Dez19)),
            }

            
            const consumo_total_medio = {

                Jan19: (Number(response.data[0].Jan19) + Number(response.data[1].Jan19) + Number(response.data[2].Jan19))/744,
                Fev19: (Number(response.data[0].Fev19) + Number(response.data[1].Fev19) + Number(response.data[2].Fev19))/672,
                Mar19: (Number(response.data[0].Mar19) + Number(response.data[1].Mar19) + Number(response.data[2].Mar19))/720,
                Abr19: (Number(response.data[0].Abr19) + Number(response.data[1].Abr19) + Number(response.data[2].Abr19))/744,
                Mai19: (Number(response.data[0].Mai19) + Number(response.data[1].Mai19) + Number(response.data[2].Mai19))/744,
                Jun19: (Number(response.data[0].Jun19) + Number(response.data[1].Jun19) + Number(response.data[2].Jun19))/720,
                Jul19: (Number(response.data[0].Jul19) + Number(response.data[1].Jul19) + Number(response.data[2].Jul19))/744,
                Ago19: (Number(response.data[0].Ago19) + Number(response.data[1].Ago19) + Number(response.data[2].Ago19))/744,
                Set19: (Number(response.data[0].Set19) + Number(response.data[1].Set19) + Number(response.data[2].Set19))/720,
                Out19: (Number(response.data[0].Out19) + Number(response.data[1].Out19) + Number(response.data[2].Out19))/744,
                Nov19: (Number(response.data[0].Nov19) + Number(response.data[1].Nov19) + Number(response.data[2].Nov19))/720,
                Dez19: (Number(response.data[0].Dez19) + Number(response.data[1].Dez19) + Number(response.data[2].Dez19))/744,
            }

            const volume_medio = parseFloat(( Number(consumo_total_medio.Jan19) + Number(consumo_total_medio.Fev19) + Number(consumo_total_medio.Mar19) + Number(consumo_total_medio.Abr19) + Number(consumo_total_medio.Mai19) + Number(consumo_total_medio.Jun19) + Number(consumo_total_medio.Jul19) + Number(consumo_total_medio.Ago19) + Number(consumo_total_medio.Set19) + Number(consumo_total_medio.Out19) + Number(consumo_total_medio.Nov19) + Number(consumo_total_medio.Dez19))/12).toFixed(3)
            
            this.setState({ VolumeMedio: volume_medio })

            this.setState({data: response.data});
            
            
            var arr_cons_tot = Object.values(consumo_total);

            arr_cons_tot = arr_cons_tot.sort(this.compare)

            var media = 0

            for (let index = 0; index < arr_cons_tot.length; index++) {
                media = media + arr_cons_tot[index]
            }

            media = media / arr_cons_tot.length;

            const Flex_Max = parseFloat((arr_cons_tot[9]/media) - 1).toFixed(4)
            const Flex_Min = parseFloat(1 - (arr_cons_tot[2]/media)).toFixed(4)
            
            
            this.setState({ FlexMax:  Flex_Max})
            this.setState({ FlexMin:  Flex_Min})
            

            if(response.data.length !== 0){
                this.setState({erro: true});

            }

        } catch (err) {
            alert('erro ao se comunicar com o bd')
            this.setState({erro: true});
        }

        var my_uf = this.state.mysUF
        var US = Number(this.state.VolumeMedio) / 0.165;
        switch(my_uf){
            case 'AC':
                US = Number(this.state.VolumeMedio) / 0.165;
                break;
            case 'AL':
                US = Number(this.state.VolumeMedio) / 0.18;
                break;
            case 'AP':
                US = Number(this.state.VolumeMedio) / 0.15;
                break;
            case 'AM':
                US = Number(this.state.VolumeMedio) / 0.15;
                break;
            case 'BA':
                US = Number(this.state.VolumeMedio) / 0.18;
                break;
            case 'CE':
                US = Number(this.state.VolumeMedio) / 0.185;
                break;
            case 'DF':
                US = Number(this.state.VolumeMedio) / 0.165;
                break;
            case 'ES':
                US = Number(this.state.VolumeMedio) / 0.165;
                break;
            case 'GO':
                US = Number(this.state.VolumeMedio) / 0.165;
                break;
            case 'MA':
                US = Number(this.state.VolumeMedio) / 0.15;
                break;
            case 'MT':
                US = Number(this.state.VolumeMedio) / 0.17;
                break;
            case 'MS':
                US = Number(this.state.VolumeMedio) / 0.165;
                break;
            case 'MG':
                US = Number(this.state.VolumeMedio) / 0.175;
                break;
            case 'PA':
                US = Number(this.state.VolumeMedio) / 0.15;
                break;
            case 'PB':
                US = Number(this.state.VolumeMedio) / 0.18;
                break;
            case 'PR':
                US = Number(this.state.VolumeMedio) / 0.165;
                break;
            case 'PE':
                US = Number(this.state.VolumeMedio) / 0.18;
                break;
            case 'PI':
                US = Number(this.state.VolumeMedio) / 0.17;
                break;
            case 'RJ':
                US = Number(this.state.VolumeMedio) / 0.18;
                break;
            case 'RN':
                US = Number(this.state.VolumeMedio) / 0.175;
                break;
            case 'RS':
                US = Number(this.state.VolumeMedio) / 0.165;
                break;
            case 'RO':
                US = Number(this.state.VolumeMedio) / 0.155;
                break;
            case 'RR':
                US = Number(this.state.VolumeMedio) / 0.15;
                break;
            case 'SC':
                US = Number(this.state.VolumeMedio) / 0.16;
                break;
            case 'SP':
                US = Number(this.state.VolumeMedio) / 0.165;
                break;
            case 'SE':
                US = Number(this.state.VolumeMedio) / 0.18;
                break;
            case 'TO':
                US = Number(this.state.VolumeMedio) / 0.156;
                break;
            default:
                US = Number(this.state.VolumeMedio) / 0.165;
                break;
        }
        console.log(my_uf)
        US = parseFloat(US.toFixed(3))

        this.setState({  usina: US })

    }

    compare = (a, b) => {
        return a - b;
    }

    render(){        
        return(
            <div>
                { this.state.data[0] !== undefined && 
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", color: "black"}}>
                    <div style={{display: "flex", flexDirection: "column", marginTop: "50px", backgroundColor: "white", width: "1200px", padding: "30px", borderRadius: "10px", boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.06)"}}>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", borderBottom: "solid", borderWidth: '1px'}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "baseline", width: "300px", textAlign: "center"}}>
                                <p style={{fontWeight: "bold", fontSize: "22px"}}>Volume Médio: </p>
                                <p style={{fontSize: "18px", marginLeft: "10px"}}>{this.state.VolumeMedio} MWm</p>
                            </div>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "baseline", width: "300px", textAlign: "center"}}>
                                <p style={{fontWeight: "bold", fontSize: "22px"}}>Flex Max: </p>
                                <p style={{fontSize: "18px", marginLeft: "10px"}}> { parseFloat(((this.state.FlexMax)*100)).toLocaleString('pt-BR', { style: 'decimal'}) } % </p> 
                            </div> 
                            <div style={{display: "flex", flexDirection: "column", alignItems: "baseline", width: "300px", textAlign: "center"}}>
                                <p style={{fontWeight: "bold", fontSize: "22px"}}>Flex Min: </p>
                                <p style={{fontSize: "18px", marginLeft: "10px"}}> { parseFloat(((this.state.FlexMin)*100)).toLocaleString('pt-BR', { style: 'decimal'}) } % </p>
                            </div>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "baseline", width: "300px", textAlign: "center"}}>
                                <p style={{fontWeight: "bold", fontSize: "22px"}}>Usina Solar: </p>
                                <p style={{fontSize: "18px", marginLeft: "10px"}}>{parseFloat(this.state.usina).toFixed(2)} MWp</p>
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
