import React, { Component } from 'react';
import './style.css';


class CoustCardItem extends Component{
    constructor(props){
        super();
        
        var widthDimension;
        var borderColor;

        if(props.bigger === "true"){ // Client Section
            
            widthDimension = "380px";
        }
        else{ // Modal Card
            widthDimension = "235px"; 
        }

        if(props.type === "1"){ // Custo Cativo
            borderColor = "yellow";
        }
        else if(props.type === "2"){ // Custo Livre
            borderColor = "#0067CC"
        }
        else{ // Economia Acumulada
            borderColor = "green"
        }

        this.state = {
            widthDimension,
            borderColor,
            format: false
        }

        this.setState({ format: props.format })

    }

    removeSimbolReal = (param) => {
        var my_number = '';
        
        for (let index = 0; index < param.length; index++) {
            if(param[index] !== 'R' && param[index] !== '$'){
                my_number = my_number + param[index]
            }
            
        }

        return (my_number)
    }
    


    render(){

        const divStyle = {
            width: this.state.widthDimension,
            borderColor: this.state.borderColor
        };

        const format = this.state.format;
        
        return(
            <div className="container-CoustCardItem" style={divStyle}>
                <p className="coustCardItem-title">{this.props.title}</p>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <p className="coustCardItem-content">{this.props.content}</p>
                    <p className="coustCardItem-content">{this.props.percent}</p>
                </div>
                <p className="coustCardItem-content">
                    R$ 
                    <p className="coutCardItem-value">
                        { format && this.removeSimbolReal(parseFloat(this.props.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))}
                        { !format && this.props.value }
                    </p>
                </p>
            </div>
        );
    }
}


export default CoustCardItem;