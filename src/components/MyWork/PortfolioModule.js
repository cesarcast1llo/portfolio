import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Carousel from './Carousel';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const PortfolioModule = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="portfolio-modal">
      <Button color="danger" onClick={toggle}>
        frndly
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{props.jobTitle}</ModalHeader>
        <ModalBody>
          <Carousel />
          {props.jobDescription}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Prev. Project
          </Button>
          <Button color="secondary" onClick={toggle}>
            Next Project
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PortfolioModule;
