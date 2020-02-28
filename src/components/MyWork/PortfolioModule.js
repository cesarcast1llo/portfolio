import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Carousel from './Carousel';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const PortfolioModule = props => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="portfolio-modal">
      <p>{props.jobDescription}</p>
      <Button color="danger" onClick={toggle}>
        {props.jobTitle}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="project-modal">
        <ModalHeader toggle={toggle}>{props.jobTitle}</ModalHeader>
        <ModalBody>
          <Carousel />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default PortfolioModule;
