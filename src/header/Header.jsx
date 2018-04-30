import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './header.css';

class Header extends Component {
  static propTypes = {};

  static defaultProps = {};

  displayName = 'header';

  state = {};

  render() {
    return (
      <div className="header-container">
        {'Hello world: header'}
      </div>
    );
  }
}

export default Header;
