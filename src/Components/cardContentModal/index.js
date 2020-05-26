import React from 'react';
import { Modal } from 'react-bootstrap';

import CardContent from '../CardContent/index';
import CoustCardRow from '../CoustCardRow/index';
import AnaliseLine from '../AnaliseLine/index';
import DownFiles from '../DownFiles/index';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './style.css';


class cardContentModal extends React.Component {

  constructor(props, context){
    super(props, context);

    var myDate = props.date;
    var myContent = props.content;
    var myStatus = props.status;


    
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
        show: false,
        myDate,
        myContent,
        myStatus
    }


    
}

handleShow() {
    this.setState({ show: true })
}
handleClose(){
    this.setState({ show: false })
}


render() {
    return (
       <div>

          <Modal 
                show={this.state.show} 
                onHide={this.handleClose}
                dialogClassName='custom-dialog-Info'
                centered

                size="lg"
            >
                <Modal.Body>
                    <div className="container-modal-Info">
                        <FontAwesomeIcon icon={faTimes} className="close-icon-card" onClick={this.handleClose}/>
                        <CardContent date={this.state.myDate} content={this.state.myContent} status={this.state.myStatus} fullWidth="true"/>
                        <CoustCardRow bigger="false"/>
                        <AnaliseLine />
                        <DownFiles />
                    </div>

                </Modal.Body>
            </Modal>

        </div>
    )
  }
}
export default cardContentModal

