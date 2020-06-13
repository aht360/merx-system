import React from 'react';
import CoustCardItemModal from '../CoustCard-itemModal/index';


export default function CoustCardRow(props){

    return(
        <div className="container-CoustCard">
            <div className="container-CoustCardRow">
                <CoustCardItemModal title="Custo cativo" content="" value={props.CustoCativo} percent="" type="2" bigger={props.bigger} format={props.format}/>
                <CoustCardItemModal title="Custo livre" content="" value={props.CustoLivre} percent="" type="2" bigger={props.bigger} format={props.format}/>
                <CoustCardItemModal title="Economia acumulada" content="" value={props.Economia} percent="" type="2" bigger={props.bigger} format={props.format}/>
            </div>
        </div>
    );
}