import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './footer.css';

class Footer extends Component {
  static propTypes = {};

  static defaultProps = {};

  displayName = 'footer';

  state = {};

  render() {
    return (
      <div className="footer-container">
        {'Hello world: footer'}
      </div>
    );
  }
}

export default Footer;
