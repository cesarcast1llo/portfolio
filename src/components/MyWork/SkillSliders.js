import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
// shorten
import github from '../../assets/images/logos/github.png';
import heroku from '../../assets/images/logos/heroku.png';
import aws from '../../assets/images/logos/aws.png';
import sf from '../../assets/images/logos/salesforce.png';
import psd from '../../assets/images/logos/photoshop.png';
import inD from '../../assets/images/logos/indesign.png';
import xd from '../../assets/images/logos/xd.png';
import sketch from '../../assets/images/logos/sketch.svg';

import html from '../../assets/images/logos/html.png';
import css from '../../assets/images/logos/css3.png';
import javascript from '../../assets/images/logos/javascript.png';
import react from '../../assets/images/logos/react.png';
import emails from '../../assets/images/logos/htmlemail.png';
import next from '../../assets/images/logos/nextjs.png';
import node from '../../assets/images/logos/nodejs.png';
import gatsby from '../../assets/images/logos/gatsby.png';
import wordpress from '../../assets/images/logos/wordpress.png';

// find a way to shorten this down ^^^

export default class SkillSliders extends Component {
  constructor() {
    super();

    this.state = {
      skills: [
        { name: 'HTML', img: html },
        { name: '(S)CSS', img: css },
        { name: 'Javascript', img: javascript },
        { name: 'React.js', img: react },
        { name: 'Emails', img: emails },
        { name: 'Next.js', img: next },
        { name: 'Node.js', img: node },
        { name: 'Gatsby', img: gatsby },
        { name: 'Wordpress', img: wordpress }
      ],
      tools: [
        { name: 'Github', src: github },
        { name: 'Heroku', src: heroku },
        { name: 'AWS', src: aws },
        { name: 'Salesforce', src: sf },
        { name: 'Photoshop', src: psd },
        { name: 'InDesign', src: inD },
        { name: 'XD', src: xd },
        { name: 'Sketch', src: sketch }
      ],
      itemsToShow: 4,
      expanded: false
    };

    this.showMore = this.showMore.bind(this);
  }

  showMore() {
    this.state.itemsToShow === 4
      ? this.setState({ itemsToShow: this.state.skills.length, expanded: true })
      : this.setState({ itemsToShow: 4, expanded: false });
  }

  render() {
    return (
      <Row>
        <Col className="skill-sliders">
          <div className="format">
            <ScrollAnimation
              animateIn="fadeIn"
              duration={2}
              delay={250}
              animateOnce={true}
            >
              <div className="intro">
                What I <br className="em_hide_mobile" />
                Work&nbsp;With.
              </div>
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="fadeIn"
              duration={2}
              delay={250}
              animateOnce={true}
            >
              <Row className="justify-content-center">
                {this.state.skills
                  .slice(0, this.state.itemsToShow)
                  .map((skill, i) => (
                    <Col xs="6" sm="3" md="3" className="skillName" key={i}>
                      <>
                        <p>{skill.name}</p>
                        <img
                          alt={skill.name}
                          className={skill.name}
                          src={skill.img}
                        />
                      </>
                    </Col>
                  ))}

                <Col md="12" className="show-more">
                  <button className="btn btn-primary" onClick={this.showMore}>
                    {this.state.expanded ? (
                      <span>Show Less</span>
                    ) : (
                      <span>Show More</span>
                    )}
                  </button>
                </Col>
              </Row>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="flipInX"
              duration={1}
              delay={750}
              animateOnce={true}
            >
              <Row>
                <Col md="5" className="other-tools">
                  Other Development&nbsp;Tools:
                </Col>
                <Col md="7" className="other-tools-icon">
                  {this.state.tools.map((tool, i) => {
                    return i === 3 ? (
                      <div key={i} style={{ display: 'inline' }}>
                        <img
                          alt={tool.name}
                          className={tool.name}
                          src={tool.src}
                        />
                        <br className="em_hide_mobile" />
                      </div>
                    ) : (
                      <img
                        key={i}
                        alt={tool.name}
                        className={tool.name}
                        src={tool.src}
                      />
                    );
                  })}
                </Col>
              </Row>
            </ScrollAnimation>
          </div>
        </Col>
      </Row>
    );
  }
}
// {tags.map(function(tag, index) {
//   return index % 2 === 0 ? (
//     <Link key={tag} to={`/tags/${slugify(tag)}`}>
//       <Button color="primary" className="tag-button">
//         {tag} <div className="number">{tagPostCounts[tag]}</div>
//       </Button>
//     </Link>
//   ) : (
//     <Link key={tag} to={`/tags/${slugify(tag)}`}>
//       <Button color="primary" className="odd">
//         {tag} <div className="number">{tagPostCounts[tag]}</div>
//       </Button>
//     </Link>
//   );
// })}
