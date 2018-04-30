import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './blog.css';

class Blog extends Component {
  static propTypes = {};

  static defaultProps = {};

  displayName = 'blog';

  state = {};

  render() {
    return (
      <div className="blog-container">
        {'Blog: Hello world'}
      </div>
    );
  }
}

export default Blog;
