import React, { Component } from 'react';
import { Container } from 'reactstrap';
import PageWrapper from '../components/PageWrapper.js';
import Me from '../components/Me.js';
import Projects from '../components/Projects';
import { Cookies } from 'react-cookie';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const cookies = new Cookies();

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // animation: cookies.get('activate') || '',
      animation: '',
      className: 'pre-animation',
      containerMargin: '150rem auto',
      slideUp: false
    };
  }

  // componentWillMount() {
  //   if (this.state.animation === cookies.get('activate')) {
  //     this.setState({
  //       className: '',
  //       slideUp: true,
  //       containerMargin: '-20rem auto 0'
  //     });
  //     enableBodyScroll(this.targetElement);
  //   } else {
  //     // this.setState({
  //     //   slideUp: false
  //     // });
  //   }
  // }

  //figure out states willmpount vs didmount
  // make sure animations are functioning

  // componentDidMount() {
  //   if (this.state.animation === cookies.get('activate')) {
  //     enableBodyScroll(this.targetElement);
  //   } else {
  //     this.targetElement = document.querySelector('body');
  //     disableBodyScroll(this.targetElement);
  //   }

  //   setTimeout(() => {
  //     this.setState(prevState => ({
  //       animation: cookies.get('activate'),
  //       className: 'animation',
  //       slideUp: true
  //     }));
  //     enableBodyScroll(this.targetElement);
  //   }, 2000);

  //   setTimeout(() => {
  //     this.setState(prevState => ({
  //       containerMargin: '-20rem auto 0'
  //     }));
  //   }, 3000);
  // }

  // componentDidUpdate() {
  //   cookies.set('activate', 'true', {
  //     path: '/',
  //     expires: new Date(Date.now() + 24 * 60 * 60 * 1000)
  //   });
  // }

  render() {
    return (
      <PageWrapper
        pageTitle="Home"
        pageKeywords={[`gatsby`, `application`, `react`]}
        animation={!this.state.animation}
        className={this.state.className}
      >
        {this.state.slideUp ? (
          <Container
            className="index-page"
            style={{ margin: this.state.containerMargin }}
          >
            <Me />
            <Projects />
          </Container>
        ) : null}
      </PageWrapper>
    );
  }
}

export default Index;
