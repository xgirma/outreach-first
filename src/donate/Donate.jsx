import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './donate.css';

class Donate extends Component {
  static propTypes = {};

  static defaultProps = {};

  displayName = 'donate';

  state = {};

  render() {
    return (
      <div className="donate-container">
        {'Blog: Hello Donate'}
      </div>
    );
  }
}

export default Donate;
