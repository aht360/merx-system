import React from 'react';
import ConsumeGraphContent from '../ConsumeGraphContent/index';
import './style.css';


export default function ConsumeGraph(){
    return(
        <div className="consumeGraph-container">
            <div className="consume-header">
                <p className="consume-title">Análise de consumo</p>
                <p className="consume-subtitle">Anual MWh</p>
            </div>
            <div className="consume-content">
                <div>
                    <ConsumeGraphContent />
                </div>
            </div>
        </div>
    );
}