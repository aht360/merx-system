import React from 'react';
import CoustCardItem from '../CoustCard-item/index';
import './style.css';


export default function CoustCardRow(props){

    return(
        <div className="container-CoustCard">
            <div className="container-CoustCardRow">
                <CoustCardItem title="Custo cativo" content="" value={props.CustoCativo} percent="" type="2" bigger={props.bigger} format={props.format}/>
                <CoustCardItem title="Custo livre" content="" value={props.CustoLivre} percent="" type="2" bigger={props.bigger} format={props.format}/>
                <CoustCardItem title="Economia acumulada" content="" value={props.Economia} percent="" type="2" bigger={props.bigger} format={props.format}/>
            </div>
        </div>
    );
}