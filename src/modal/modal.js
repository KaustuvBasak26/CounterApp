import React from 'react';
import { Modal, ModalHeader, ModalBody} from 'reactstrap';

const GreetingModal = (props) => {
    return (
      <div>
        <Modal isOpen={props.openModal} toggle={props.toggle}>
          <ModalHeader toggle={props.toggle}>{props.modalGreeting === 'Welcome!'?'Welcome Note':'Good Bye Note'}</ModalHeader>
          <ModalBody>
            {props.modalGreeting + ' KAUSTUV BASAK'}
          </ModalBody>
        </Modal>
      </div>
    );
}

export default GreetingModal;