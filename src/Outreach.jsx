import React, { Component } from 'react';
import Translate from './locale/';
import './outreach.css';

const translateDefault = new Translate('EN').translate;

class Outreach extends Component {
  state = {
    translate: translateDefault,
  };

  setLanguageToEnglish = () => {
    // eslint-disable-next-line no-unused-vars
    this.setState(state => ({ locale: 'EN' }));
    // eslint-disable-next-line no-unused-vars
    this.setState(state => ({ translate: new Translate('EN').translate }));
  };

  setLanguageToAmharic = () => {
    // eslint-disable-next-line no-unused-vars
    this.setState(state => ({ locale: 'AM' }));
    // eslint-disable-next-line no-unused-vars
    this.setState(state => ({ translate: new Translate('AM').translate }));
  };

  render() {
    return (
      <div className="App">
        <button role="link" onClick={this.setLanguageToAmharic}>አማርኛ</button>
        <button role="link" onClick={this.setLanguageToEnglish}>English</button>
        <p>{this.state.translate('title')}</p>
      </div>
    );
  }
}

export default Outreach;
