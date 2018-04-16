import React, { Component } from 'react';
import Translate from './locale/';
import './outreach.css';

const translateDefault = new Translate('EN').translate;

class Outreach extends Component {
  state = {
    translate: translateDefault,
  };

  setLanguageToEnglish = () => {
    this.setState(() => ({ locale: 'EN' }));
    this.setState(() => ({ translate: new Translate('EN').translate }));
  };

  setLanguageToAmharic = () => {
    this.setState(() => ({ locale: 'AM' }));
    this.setState(() => ({ translate: new Translate('AM').translate }));
  };

  render() {
    return (
      <div className="App">
        <button role="link" onClick={this.setLanguageToAmharic}>አማርኛ</button>
        <button role="link" onClick={this.setLanguageToEnglish}>English</button>
        <p>{this.state.translate('TITLE')}</p>
      </div>
    );
  }
}

export default Outreach;
