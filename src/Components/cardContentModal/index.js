import React from 'react';
import { Modal } from 'react-bootstrap';

import CardContent from '../CardContent/index';
import CoustCardRow from '../CoustCardRow/index';
import AnaliseLine from '../AnaliseLine/index';
import DownFiles from '../DownFiles/index';

import './style.css';


class cardContentModal extends React.Component {

  constructor(props, context){
      
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
        show: false
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
                        <CardContent date="Abril/2020" content="Certidão Negativa de Falências, Concordância, Recuperação Judicial ou Extrajudicial" status="2" fullWidth="true"/>
                        <CoustCardRow />
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

