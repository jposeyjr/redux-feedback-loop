import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const feedbackReducer = (state = [], action) => {
  if (action.type === 'FEELING') {
    console.log(action.payload);
    return [...state, { feeling: action.payload }];
  } else if (action.type === 'SUPPORT') {
    console.log(action.payload);
    return [...state, { support: action.payload }];
  } else if (action.type === 'UNDERSTAND') {
    console.log(action.payload);
    return [...state, { understand: action.payload }];
  } else if (action.type === 'COMMENT') {
    console.log(state);
    return [...state, { comment: action.payload }];
  } else {
    return state;
  }
};

const store = createStore(feedbackReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
