import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="background">
      header with inherit bg color and hamburger menu on mobile going here
    </div>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

export default Header;
