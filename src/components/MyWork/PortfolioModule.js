import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Carousel from './Carousel';

const PortfolioImages = props => {
  return (
    <div className="portfolio-modal">
      <ScrollAnimation animateIn={props.animate} animateOnce={true}>
        <div className="card" data-toggle="modal" data-target={props.modalID}>
          <img
            className="card-img-top"
            src={props.mainImg}
            alt={props.imgsAlt}
          />
          <div className="card-body">
            <p
              className="card-text"
              dangerouslySetInnerHTML={{ __html: props.jobDescription }}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target={props.modalID}
            dangerouslySetInnerHTML={{ __html: props.buttonName }}
          />
        </div>
      </ScrollAnimation>
      <div
        className="modal fade modal"
        id={props.PopupID}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <Carousel />
              <div className="container">
                <div className="row">
                  <div className="col-12 gallery-description">
                    <h2
                      className="modal-title"
                      id="exampleModalLongTitle"
                      dangerouslySetInnerHTML={{ __html: props.jobTitle }}
                    />
                    <p
                      className="job-img-description"
                      dangerouslySetInnerHTML={{ __html: props.jobSubTitle }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioImages;
