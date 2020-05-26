import React from 'react';
import CoustCardItem from '../CoustCard-item/index';
import './style.css';

export default function CoustCardRow(props){
    return(
        <div className="container-CoustCard">
            <div className="container-CoustCardRow">
                <CoustCardItem title="Custo cativo" content="12 meses" value="1.330.386.06" percent="" type="1" bigger={props.bigger}/>
                <CoustCardItem title="Custo livre" content="Histórico" value="937.263,96" percent="" type="2" bigger={props.bigger}/>
                <CoustCardItem title="Economia acumulada" content="12 meses" value="393.122,10" percent="30%" type="3" bigger={props.bigger}/>
            </div>
        </div>
    );
}