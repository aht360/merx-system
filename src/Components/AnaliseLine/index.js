import React from 'react';
import AnaliseTable from '../AnaliseTable/index';
import ContBalance from '../ContBalance/index';


export default function ConsumeLine(){
    return(
        <div className="consumeLine-container-master" style={{padding: "15px"}}>
            <div className="consumeLine-container">
                <AnaliseTable />
                <ContBalance />
            </div>
        </div>
    );
}