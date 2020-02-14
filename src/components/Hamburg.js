import React, { Component } from 'react';
import { Link } from 'gatsby';

class HamBurg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility = () => {
    this.setState({
      visibility: !this.state.visibility
    });
  };

  render() {
    return (
      <div>
        <div
          id="flyoutMenu"
          className={this.state.visibility ? 'fadeIn' : 'fadeOut'}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/portfolio">Porfolio</Link>
          <Link to="/contact">Contact</Link>
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

export default HamBurg;
