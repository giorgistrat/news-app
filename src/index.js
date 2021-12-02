import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom'
import './index.css';


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);


