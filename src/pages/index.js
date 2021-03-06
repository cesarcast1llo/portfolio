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
      cookies: cookies.get('hasBeenHere') || '',
      className: 'cookies-animation',
      showIndexPage: false,
      animationText: '',
    };
  }

  componentDidMount() {
    if (this.state.cookies === cookies.get('hasBeenHere')) {
      this.setState({
        className: '',
        showIndexPage: true,
      });
      enableBodyScroll(this.targetElement);
    } else {
      this.targetElement = document.querySelector('body');
      disableBodyScroll(this.targetElement);
      setTimeout(() => {
        this.setState((prevState) => ({
          showIndexPage: true,
          animationText: 'hide-name',
          className: 'openUp',
        }));
        enableBodyScroll(this.targetElement);
      }, 4500);
    }
  }

  componentDidUpdate() {
    cookies.set('hasBeenHere', 'true', {
      path: '/',
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    });
  }

  // ^disable if you want to test animation and clear cookies^
  // cookies last 24 hours

  render() {
    return (
      <PageWrapper
        pageTitle="Cesar Castillo"
        pageKeywords={[
          `Cesar Castillo Portfolio`,
          `gatsby`,
          `application`,
          `react`,
        ]}
        cookies={!this.state.cookies}
        className={this.state.className}
        animationText={this.state.animationText}
        background="background"
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
