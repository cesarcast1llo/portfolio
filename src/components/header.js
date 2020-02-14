import React from 'react';
import { Link } from 'gatsby';
import { Navbar, NavbarBrand } from 'reactstrap';
import HamBurg from './HamBurg';
import useScrollPosition from '../utils/scrollPosition.js';

const Header = props => {
  if (typeof window === 'undefined') {
    global.window = {};
  }

  const scrollPos = useScrollPosition();

  let headerBgColor = '';

  if (scrollPos > 45) {
    headerBgColor = '';
  } else {
    headerBgColor = 'white';
  }
  return (
    <header style={{ display: props.headerHide }}>
      <div
        className={`header-container fixed-top`}
        style={{ backgroundColor: headerBgColor }}
      >
        <Navbar className={`nav-bar fixed-top`}>
          <NavbarBrand className={`image-wrapper animated bounceInleft`}>
            <Link href="/">
              <img
                className="logo-img"
                src="../assets/images/c.png"
                alt="JCC"
              />
            </Link>
          </NavbarBrand>
          <div className={`nav-wrapper`}>
            <HamBurg />
          </div>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
