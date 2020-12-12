import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const initState = {};

const feedbackReducer = (state = initState, action) => {
  if (action.type === 'FEELING') {
    return { ...state, feeling: action.payload };
  } else if (action.type === 'SUPPORT') {
    return { ...state, support: action.payload };
  } else if (action.type === 'UNDERSTAND') {
    return { ...state, understand: action.payload };
  } else if (action.type === 'COMMENT') {
    return { ...state, comment: action.payload };
  } else {
    return state;
  }
};

const store = createStore(feedbackReducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
