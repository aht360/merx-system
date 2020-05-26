import React, { Component } from 'react';
import './style.css';
import { render } from '@testing-library/react';


class CoustCardItem extends Component{
    constructor(props){
        super();
        var widthDimension;
        var borderColor;

        if(props.bigger === "true"){ // Client Section
            widthDimension = "32.5%";
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
            borderColor
        }

    }
    render(){

        const divStyle = {
            width: this.state.widthDimension,
            borderColor: this.state.borderColor
        };

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
                        {this.props.value}
                    </p>
                </p>
            </div>
        );
    }
}


export default CoustCardItem;