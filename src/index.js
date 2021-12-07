import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Counter from './Counter';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <App />
      <Counter/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

