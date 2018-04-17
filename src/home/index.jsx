import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/index.css';

class index extends Component {
  static propTypes = {};

  static defaultProps = {};

  displayName = 'index';

  state = {};

  render() {
    return (
      <div className="container-index">
        {'Hello world'}
      </div>
    );
  }
}

export default index;
