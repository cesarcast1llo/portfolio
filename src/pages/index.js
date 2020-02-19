import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
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
      cookies: cookies.get('activate') || '',
      className: 'cookies-animation',
      showIndexPage: false,
      animationText: '',
      headerHide: ''
    };
  }

  componentDidMount() {
    if (this.state.cookies === cookies.get('activate')) {
      this.setState({
        className: '',
        showIndexPage: true,
        headerHide: 'block'
      });
      enableBodyScroll(this.targetElement);
    } else {
      this.targetElement = document.querySelector('body');
      disableBodyScroll(this.targetElement);
      this.setState({
        headerHide: 'none'
      });
      setTimeout(() => {
        this.setState(prevState => ({
          className: 'heroBg',
          showIndexPage: true,
          animationText: 'hide-name',
          cookies: cookies.get('activate'),
          headerHide: 'block'
        }));
        enableBodyScroll(this.targetElement);
      }, 1000);
    }
  }

  // componentDidUpdate() {
  //   cookies.set('activate', 'true', {
  //     path: '/',
  //     expires: new Date(Date.now() + 24 * 60 * 60 * 1000)
  //   });
  // }

  // ^disable if you want to test animation and clear cookies^

  render() {
    return (
      <PageWrapper
        pageTitle="Home"
        pageKeywords={[`gatsby`, `application`, `react`]}
        cookies={!this.state.cookies}
        className={this.state.className}
        animationText={this.state.animationText}
        headerHide={this.state.headerHide}
      >
        {this.state.showIndexPage ? (
          <>
            <Container className="index-page">
              <Row>
                <Me />
              </Row>
            </Container>
            <Container className="project-wrapper">
              <Row>
                <Projects />
              </Row>
            </Container>
          </>
        ) : null}
      </PageWrapper>
    );
  }
}

export default Index;
