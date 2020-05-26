import React from 'react';
import './style.css';

export default function CoustCardItem(props){
    return(
        <div className="container-CoustCardItem">
            <p className="coustCardItem-title">{props.title}</p>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <p className="coustCardItem-content">{props.content}</p>
                <p className="coustCardItem-content">{props.percent}</p>
            </div>
            <p className="coustCardItem-content">
                R$ 
                <p className="coutCardItem-value">
                    {props.value}
                </p>
            </p>
        </div>
    );
}