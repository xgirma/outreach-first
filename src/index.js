import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Outreach from './Outreach';
import registerServiceWorker from './registerServiceWorker';

// eslint-disable-next-line
ReactDOM.render(<Outreach />, document.getElementById('root'));

registerServiceWorker();
