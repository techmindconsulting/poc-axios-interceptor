import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import App from './App';

axios.interceptors.request.use((req) => {
  console.log(`${req.method} ${req.url}`);
  req.headers['X-API-Key'] = '2cadb030';
  return req;
});

ReactDOM.render(<App />, document.getElementById('root'));
