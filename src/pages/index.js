import React, { Component } from 'react';
import { Container } from 'reactstrap';
import PageWrapper from '../components/PageWrapper.js';
import Me from '../components/Me.js';
import Work from '../components/Work';
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
      animationText: ''
    };
  }

  componentDidMount() {
    if (this.state.cookies === cookies.get('activate')) {
      this.setState({
        className: '',
        showIndexPage: true
      });
      enableBodyScroll(this.targetElement);
    } else {
      this.targetElement = document.querySelector('body');
      disableBodyScroll(this.targetElement);
      setTimeout(() => {
        this.setState(prevState => ({
          className: 'heroBg',
          showIndexPage: true,
          animationText: 'hide-name',
          cookies: cookies.get('activate')
        }));
        enableBodyScroll(this.targetElement);
      }, 3500);
    }
  }

  componentDidUpdate() {
    cookies.set('activate', 'true', {
      path: '/',
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000)
    });
  }

  // ^disable if you want to test animation and clear cookies^

  render() {
    return (
      <PageWrapper
        pageTitle="Cesar Castillo"
        pageKeywords={[`gatsby`, `application`, `react`]}
        cookies={!this.state.cookies}
        className={this.state.className}
        animationText={this.state.animationText}
      >
        {this.state.showIndexPage ? (
          <>
            <Container className="index-page">
              <Me />
            </Container>
            <Work />
          </>
        ) : null}
      </PageWrapper>
    );
  }
}

export default Index;
