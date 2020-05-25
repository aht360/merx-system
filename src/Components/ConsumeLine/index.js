import React from 'react';
import ConsumeGraph from '../ConsumeGraph/index';
import ConsumeTable from '../ConsumeTable/index';
import './style.css';


export default function ConsumeLine(){
    return(
        <div className="consumeLine-container-master">
            <div className="consumeLine-container">
                <ConsumeGraph />
                <ConsumeTable />
            </div>
        </div>
    );
}