import React, { Component } from 'react';
import './style.css';

import CardContentModal from '../../Components/cardContentModal/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

class CardContent extends Component {
    constructor(props){
        super();
        var date = props.date;
        var text = props.content;
        var fullWidth = props.fullWidth;
        var status = props.status;
        var widthContent;
        var borderColor;

        switch(fullWidth){
            case 'true':
                widthContent = "100%"
                break;
            case 'false':
                widthContent = "300px"
                break;
            default:
                console.log('lixo');
        }

        if (props.status === "1") {
            borderColor = "green";
        }
        else if (props.status === "2") {
            borderColor = "#FF9C27";
        }
        else if (props.status === "3") {
            borderColor = "red";
        }
        else {
            console.log("n pegou")
        }

        this.state = {
            date,
            text,
            borderColor,
            widthContent,
            status
        }

    }

    loginModalRef = (obj) => { 
        this.showModal = obj && obj.handleShow 
    }

    onLoginClick = () => {
        this.showModal();
    }
    
    render(){

        const divStyle = {
            borderLeftColor: this.state.borderColor,
            width: this.state.widthContent
        };

        const chooseRender = () => {
            if(this.state.borderColor === "green"){
                return (
                    <div>
                        <FontAwesomeIcon icon={faCheck} className="verticalIcon" style={{color: "green"}}/>
                        <p style={{fontSize: "10px"}}>Aprovado</p>
                    </div>
                );
            }
            else if(this.state.borderColor === "#FF9C27"){
                return(
                    <div>
                        <FontAwesomeIcon icon={faExclamation} className="verticalIcon" style={{color: "#FF9C27"}}/>
                        <p style={{fontSize: "10px"}}>Possui pendência</p>
                    </div>
                );
            }
            else if(this.state.borderColor === "red"){
                return(
                    <div>
                        <FontAwesomeIcon icon={faTimes} className="verticalIcon" style={{color: "red"}}/>
                        <p style={{fontSize: "10px"}}>Erro</p>
                    </div>
                );
            }
            else{
                alert('erro - cardContent module')
            }
        }

        return (
            <div>
                <CardContentModal date={this.state.date} content={this.state.text} status={this.state.status} fullWidth="true" ref={this.loginModalRef} ></CardContentModal>

                <div className="cardContent-container" style={divStyle} onClick={this.onLoginClick}>

                
                    <div className="cardContent-header">
                        <p className="cardContent-title">
                            {this.state.date}
                        </p>

                        <div className="icon-box-card">
                            {chooseRender()}
                        </div>
                        
                    </div>
        
                    <div className="cardContent-textBox">

                        <p className="cardContent-text">
                            {this.state.text}
                        </p>

                    </div>
        
                </div>
            </div>
        );

    }
}


export default CardContent;