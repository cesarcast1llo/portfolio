import React from 'react';
import { Link, graphql } from 'gatsby';
import { Navbar } from 'reactstrap';
import Img from 'gatsby-image';
import Hamburg from './Hamburg';
import useScrollPosition from '../../utils/scrollPosition.js';
import { useStaticQuery } from 'gatsby';

const Header = props => {
  const data = useStaticQuery(graphql`
    {
      file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "cc.png" }
      ) {
        childImageSharp {
          fixed(width: 45) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  if (typeof window === 'undefined') {
    global.window = {};
  }
  // TODO find a way to stop scrolling if its above 60, peep console.log

  const scrollPos = useScrollPosition();

  let headerBgColor = '';
  let displayHeader = 'none';

  if (scrollPos > 60) {
    headerBgColor = 'rgba(61, 62, 61, 0.50)';
    displayHeader = 'block';
  }

  return (
    <header style={{ display: props.headerHide }}>
      <div
        className={`header-container fixed-top`}
        style={{ display: displayHeader, backgroundColor: headerBgColor }}
      >
        <Navbar className={`nav-bar fixed-top`}>
          <div className={`image-wrapper`}>
            <Link to="/">
              <Img
                fixed={data.file.childImageSharp.fixed}
                alt="CC"
                className="logo-img"
              />
            </Link>
          </div>
          <div className={`nav-wrapper`}>
            <Hamburg />
          </div>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
