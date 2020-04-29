import React, { Component } from 'react';
import { Link } from 'gatsby';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

class Hamburg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility = () => {
    if (this.state.visibility === false) {
      disableBodyScroll(this.targetElement);
      this.setState({
        visibility: true,
      });
    }
    if (this.state.visibility === true) {
      enableBodyScroll(this.targetElement);
      this.setState({
        visibility: false,
      });
    }
  };

  render() {
    return (
      <div>
        <div
          id="flyoutMenu"
          className={this.state.visibility ? 'fadeIn' : 'fadeOut'}
        >
          <Link to="/" className="bm-li" onClick={this.toggleVisibility}>
            Home
          </Link>
          <Link to="/blog/" className="bm-li" onClick={this.toggleVisibility}>
            Blog
          </Link>
          {/* <Link to="/about" className="bm-li" onClick={this.toggleVisibility}>
            About
          </Link> */}
          {/* <Link to="/2020" className="bm-li" onClick={this.toggleVisibility}>
            2020
          </Link> */}
        </div>
        <div
          role="button"
          id="nav-icon4"
          className={this.state.visibility ? 'open' : null}
          onClick={this.toggleVisibility}
          onKeyDown={this.handleKeyDown}
          tabIndex={0}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }
}

export default Hamburg;
