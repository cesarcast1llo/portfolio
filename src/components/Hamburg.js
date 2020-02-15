import React, { Component } from 'react';
import { Link } from 'gatsby';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

class Hamburg extends Component {
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

  componentDidMount() {
    if (this.state.visibility === true) {
      console.log('visitbily true');
      disableBodyScroll(this.targetElement);
    } else {
      enableBodyScroll(this.targetElement);
    }
  }

  render() {
    return (
      <div>
        <div
          id="flyoutMenu"
          className={this.state.visibility ? 'fadeIn' : 'fadeOut'}
        >
          <Link to="/" className="bm-li">
            Home
          </Link>
          <Link to="/blog/" className="bm-li">
            Blog
          </Link>
          <Link to="/blog/" className="bm-li">
            Contact
          </Link>
          <Link to="/blog/" className="bm-li">
            Portfolio
          </Link>
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
