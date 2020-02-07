import React, { Component } from 'react';
import Header from './header';
import SEO from './seo';
import Footer from './footer';
import InitialAnimation from './animations/InitialAnimation';
import { Cookies } from 'react-cookie';
// import { instanceOf } from 'prop-types';

// const [cookies, setCookie] = useCookies(['name']);

// const { cookies } = props;

const cookies = new Cookies();

class PageWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: cookies.get('name') || ''
    };
  }

  componentDidMount() {
    cookies.set('name', 'visited', {
      path: '/',
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000)
    });

    setTimeout(() => {
      this.setState(prevState => ({
        name: cookies.get('name')
      }));
    }, 5000);
  }

  render() {
    return (
      <>
        <SEO title={this.props.pageTitle} keywords={this.props.pageKeywords} />
        <div
          className="background"
          style={{
            background: this.props.bgColor,
            backgroundImage: this.props.backgroundURL,
            height: this.props.height
          }}
        >
          <h1>STATE -- {this.state.name}</h1>
          <h1>COOKIES -- {cookies.get('name')}</h1>
          {console.log(this.state.name)}
          {this.state.name === `` ? (
            <div className="name-intro">
              <InitialAnimation />
            </div>
          ) : null}
        </div>
        {console.log(this.state.name + ' after mpount')}
        <Header />
        <main>{this.props.children}</main>
        <Footer />
      </>
    );
  }
}

export default PageWrapper;
