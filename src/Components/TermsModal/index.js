import React from 'react';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './style.css';


class LoginModal extends React.Component {
  constructor(props, context){
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
        show: false
    }
}

handleShow() {
    console.log(this.state)
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
                dialogClassName='custom-termos'
            >
                <Modal.Body className="modal-body">
                    <div className="container-modal-terms">
                        <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={this.handleClose}/>
                        <h1>Termos de uso</h1>
                        <b className="terms-title">Última atualização: 18 de Agosto de 2018</b>
                        <ol style={{textAlign: "center"}}>
                            <li className="text-terms">
                                Os presentes termos de uso (doravante denominados “termos de uso”) governam o acesso e utilização dos sites, plataformas, aplicativos e serviços oferecidos pela Energy Company, bem como qualquer outro serviço vinculado diretamente a ela de qualquer forma (todos são doravante designados como Energy Company, assim como todo o empreendimento Energy Company também é designado pelo termo Energy Company). Os presentes termos de uso estabelecem condições essenciais e necessárias para a utilização da Energy Company. A utilização de qualquer serviço da Energy Company implica imediata aceitação dos presentes termos de uso, bem como dos termos de uso específicos aplicáveis. Os presentes termos de uso, além de regularem contratualmente a relação entre as partes, devem ser entendidos também como licença de uso dos serviços, aplicativos e plataformas da Energy Company. A Energy Company é detentora de vários bens intelectuais. Para a utilização de qualquer forma dos seus serviços, é obrigatório aceitar os presentes termos de uso. Sua não aceitação ou infração constitui não apenas violação dos presentes termos de uso, como também violação da propriedade intelectual da Energy Company.
                            </li>
                            <li className="text-terms">
                                A versão válida e eficaz dos presentes termos de uso é aquela publicada atualmente pelo site. Esta versão governa todas as relações passadas e presentes entre os usuários do site, respeitados direitos adquiridos, atos jurídicos perfeitos e coisas julgadas. O usuário deverá sempre ler atentamente os presentes termos de uso, e não poderá escusar-se deles alegando ignorância sobre seus termos, inclusive quanto a eventuais modificações.
                            </li>
                            <li className="text-terms">
                                Vários serviços e conteúdos oferecidos pelo site são objeto de termos de uso específicos. Esses termos de uso podem substituir, complementar ou modificar os presentes termos de uso. No caso de conflito entre os presentes termos de uso e a política de uso específicas aplicáveis a outras plataformas ou serviços específicos, o especial deverá prevalecer sobre o geral. As condições especiais também deverão sempre ser lidas pelos usuários, nos termos do item (2) acima. Outros avisos e comunicados poderão estar presentes ao longo do site, regulando sua forma de utilização. Esses avisos deverão ser interpretados em harmonia com os presentes termos de uso.
                            </li>
                        </ol>
                    </div>

                </Modal.Body>
            </Modal>

        </div>
    )
  }
}
export default LoginModal