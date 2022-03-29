import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './Styles/main.css';
import App from './components/App';
import store from './store/configureStore'
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App /> 
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
