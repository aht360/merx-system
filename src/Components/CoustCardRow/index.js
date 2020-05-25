import React from 'react';
import CoustCardItem from '../CoustCard-item/index';
import './style.css';

export default function CoustCardRow(){
    return(
        <div className="container-CoustCard">
            <div className="container-CoustCardRow">
                <CoustCardItem title="Custo cativo" content="12 meses" value="1.330.386.06"/>
                <CoustCardItem title="Custo livre" content="12 meses" value="937.263,96"/>
                <CoustCardItem title="Economia acumulada" content="12 meses" value="393.122,10"/>
            </div>
        </div>
    );
}