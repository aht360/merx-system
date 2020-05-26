import React from 'react';
import './style.css';
import MyTable from '../../Components/MyTable/index';

export default function ConsumeTable(){
    return(
        <div className="consumeTable-container">
            <div className="consume-header">
                <p className="consume-title">Histórico</p>
                <p className="consume-subtitle">12 meses</p>
            </div>
            <div className="consume-content-table">
                <MyTable />
            </div>
        </div>
    );
}