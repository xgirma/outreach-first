import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './services.css';

class Services extends Component {
  static propTypes = {};

  static defaultProps = {};

  displayName = 'services';

  state = {};

  render() {
    return (
      <div className="services-container">
        {'Hello world: services'}
      </div>
    );
  }
}

export default Services;
