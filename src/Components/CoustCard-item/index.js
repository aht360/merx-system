import React from 'react';
import './style.css';

export default function CoustCardItem(props){
    return(
        <div className="container-CoustCardItem">
            <p className="coustCardItem-title">{props.title}</p>

            <p className="coustCardItem-content">{props.content}</p>

            <p className="coustCardItem-content">
                R$ 
                <p className="coutCardItem-value">
                    {props.value}
                </p>
            </p>
        </div>
    );
}