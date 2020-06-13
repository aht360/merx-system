import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortUp } from '@fortawesome/free-solid-svg-icons'
import './style.css';


export default function ProgressBar(props){


    return(
        <div className="container-progressBar">
            <div className="progressBar-out">
                <div className="progressBar-content" style={{width: props.value + "%"}}>

                    <div className="progressBar-value-space">
                        <div className="progressBar-value-box-begin">
                            <b><FontAwesomeIcon icon={faSortUp}/></b>
                            <b style={{marginTop: "-10px"}}>0%</b>
                        </div>

                        <div className="progressBar-value-box">
                            <b><FontAwesomeIcon icon={faSortUp}/></b>
                            <b style={{marginTop: "-10px"}}>{props.value + "%"}</b>
                        </div>

                        <div className="progressBar-value-box-end">
                            <b><FontAwesomeIcon icon={faSortUp}/></b>
                            <b style={{marginTop: "-10px"}}>100%</b>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
