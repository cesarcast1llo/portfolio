import React from 'react';
import { Row, Col } from 'reactstrap';
import PortfolioModule from '../MyWork/PortfolioModule';
import ScrollAnimation from 'react-animate-on-scroll';
import Data from '../../pages/data.json';

const Projects = () => {
  return (
    <Row>
      <Col className="projects">
        <div className="format">
          <ScrollAnimation
            animateIn="fadeIn"
            duration={2}
            delay={250}
            animateOnce={true}
          >
            <div className="intro">Projects</div>
            <p>
              Lorem Ipsum log latin language for text fill Lorem Ipsum log latin
              language for text fillLorem Ipsum log latin language for text fill
              Lorem Ipsum log latin language for text fill Lorem Ipsum log latin
              language for text fill Lorem Ipsum log latin language for text
              fillLorem Ipsum log latin language for text fill
            </p>
          </ScrollAnimation>
          <PortfolioModule
            animate="fadeInLeft"
            mainImg={Data.portfolio.jobs[0].mainImg}
            imgsAlt={Data.portfolio.alt}
            jobDescription={Data.portfolio.jobs[0].jobDescription}
            modalID="#one"
            buttonName={Data.portfolio.jobs[0].buttonName}
            PopupID="one"
            jobTitle={Data.portfolio.jobs[0].jobTitle}
            jobSubTitle={Data.portfolio.jobs[0].jobSubTitle}
            firstImg={Data.portfolio.jobs[0].firstImg}
            imgs1Alt={Data.portfolio.alt}
            secondImg={Data.portfolio.jobs[0].secondImg}
            imgs2Alt={Data.portfolio.alt}
            thirdImg={Data.portfolio.jobs[0].thirdImg}
            imgs3Alt={Data.portfolio.alt}
            fourthImg={Data.portfolio.jobs[0].fourthImg}
            imgs4Alt={Data.portfolio.alt}
            fifthImg={Data.portfolio.jobs[0].fourthImg}
            imgs5Alt={Data.portfolio.alt}
          />
          {/* <PortfolioModule
            animate="fadeInRight"
            // mainImg={Data.portfolio.jobs[1].mainImg}
            // imgsAlt={Data.portfolio.alt}
            // jobDescription={Data.portfolio.jobs[1].jobDescription}
            // modalID="#two"
            // buttonName={Data.portfolio.jobs[1].buttonName}
            // PopupID="two"
            // jobTitle={Data.portfolio.jobs[1].jobTitle}
            // jobSubTitle={Data.portfolio.jobs[1].jobSubTitle}
            // firstImg={Data.portfolio.jobs[1].firstImg}
            // imgs1Alt={Data.portfolio.alt}
            // secondImg={Data.portfolio.jobs[1].secondImg}
            // imgs2Alt={Data.portfolio.alt}
            // thirdImg={Data.portfolio.jobs[1].thirdImg}
            // imgs3Alt={Data.portfolio.alt}
            // fourthImg={Data.portfolio.jobs[1].fourthImg}
            // imgs4Alt={Data.portfolio.alt}
            // fifthImg={Data.portfolio.jobs[1].fourthImg}
            // imgs5Alt={Data.portfolio.alt}
          /> */}
        </div>
      </Col>
    </Row>
  );
};

export default Projects;
