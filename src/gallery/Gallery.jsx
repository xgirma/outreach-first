import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './gallery.css';

class Gallery extends Component {
  static propTypes = {};

  static defaultProps = {};

  displayName = 'gallery';

  state = {};

  render() {
    return (
      <div className="gallery-container">
        {'Hello world: Gallery'}
      </div>
    );
  }
}

export default Gallery;
