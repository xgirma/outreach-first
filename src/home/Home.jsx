import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './home.css';

class Home extends Component {
  static propTypes = {};

  static defaultProps = {};

  displayName = 'home';

  state = {};

  render() {
    return (
      <div className="home-container">
        {'Hello world: home'}
      </div>
    );
  }
}

export default Home;
