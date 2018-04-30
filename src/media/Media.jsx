import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends Component {
  static propTypes = {};

  static defaultProps = {};

  displayName = 'media';

  state = {};

  render() {
    return (
      <div className="media-container">
        {'Hello world: media'}
      </div>
    );
  }
}

export default Media;
