import React from 'react';
import './style.css';
import MlSchema from '../../Assets/ml-schema.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import Modal from "react-bootstrap/Modal";
import ReactPlayer from "react-player";

export default function Main(){
    const [isOpen, setIsOpen] = React.useState(false);
    const [title, setTitle] = React.useState("Transitioning...");

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
        setTitle("Carregando...");
    };

    const modalLoaded = () => {
        setTitle("Entenda o que é o Mercado Livre de Energia Elétrica");
    };
    

    return(
        <div className="container-video">
            <div className="video-box">
                
                <h1 className="video-button" onClick={showModal} onEntered={modalLoaded}><FontAwesomeIcon icon={faPlayCircle} /></h1>

                
                <Modal 
                    show={isOpen} 
                    onHide={hideModal} 
                    onEntered={modalLoaded}
                    dialogClassName={"primaryModal"}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {title}
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div className="center-div-box">
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=8wwyuiYq3Gg"
                                width='100%'
                            />
                        </div>

                    </Modal.Body>

                </Modal>

                <img className="imgVideo" src={MlSchema} alt="Data"/>
            </div>
        </div>
    )
}