import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';

document.addEventListener('DOMContentLodaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>In React</h1>, root);
});
