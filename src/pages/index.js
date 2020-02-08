import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import { Container, Row, Col } from 'reactstrap';
// import Img from 'gatsby-image';
import PageWrapper from '../components/PageWrapper.js';
import Projects from '../components/Projects';
import InitialAnimation from '../components/animations/InitialAnimation';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

class Index extends Component {
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
      <PageWrapper
        pageTitle="Home"
        pageKeywords={[`gatsby`, `application`, `react`]}
        bgColor="linear-gradient(135deg,#000000,#9D1BB2)"
        height="100vh"
      >
        <Container className="index-page">
          <Row>
            <Col className="index-page-wrapper">
              <div className="intro">
                <h1>STATE -- {this.state.name}</h1>
                <h1>COOKIES -- {cookies.get('name')}</h1>
                {console.log(this.state.name)}
                {this.state.name === `` ? (
                  <div className="name-intro">
                    <InitialAnimation />
                  </div>
                ) : null}
                {console.log(this.state.name + ' after mpount')}
                <Link to="/blog/">Developing Blog</Link>

                <div className="typed-wrapper">
                  {/* <Typed
                className="info"
                strings={['Hello', 'Hola', 'Bonjour', 'Olá', 'Gluten Tag']}
                typeSpeed={40}
                backSpeed={50}
                attr="placeholder"
                loop
              >
                <input type="text" />
              </Typed> */}
                </div>
                <br />
                {/* <Img
                  alt="Me, Myself, and I"
                  className="me"
                  fixed={data.placeholderImage.childImageSharp.fixed}
                /> */}
                <div className="contact">
                  contact me:&nbsp;
                  <a href="/" target="_blank">
                    <img
                      alt="Email Icon"
                      className="email"
                      src="https://img.Icons8.com/small/90/3d3e3d/filled-message.png"
                    />
                  </a>
                  <a href="/" target="_blank">
                    <img
                      className="github"
                      alt="Github Icon"
                      src="https://img.icons8.com/ios-glyphs/120/3d3e3d/github.png"
                    />
                  </a>
                  <a href="/" target="_blank">
                    <img
                      alt="LinkedIn icon"
                      className="lnkdin"
                      src="https://img.icons8.com/ios-filled/100/3d3e3d/linkedin.png"
                    />
                  </a>
                </div>
                <div className="info">
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
                    Extremes of Good and Evil) by Cicero, written in 45 BC. This
                    book is a treatise on the theory of ethics, very popular
                    during the Renaissance. The first line of Lorem Ipsum,
                    "Lorem ipsum dolor sit amet..", comes from a line in section
                    1.10.32. The standard chunk of Lorem Ipsum used since the
                    1500s is reproduced below for those interested. Sections
                    1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                    Cicero are also reproduced in their exact original form,
                    accompanied by English versions from the 1914 translation by
                    H. Rackham.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Projects />
        </Container>
      </PageWrapper>
    );
  }
}

export default Index;

// const data = useStaticQuery(graphql`
//   query {
//     placeholderImage: file(relativePath: { eq: "code2.jpeg" }) {
//       childImageSharp {
//         fixed(width: 250) {
//           base64
//           width
//           height
//           src
//           srcSet
//         }
//       }
//     }
//   }
// `);
