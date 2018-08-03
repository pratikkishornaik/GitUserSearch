// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {rootReducer} from './reducers/reducer';
import App from './App';
import thunk from 'redux-thunk';
import { combineReducers} from 'redux';

const mainReducer=combineReducers({
    rootReducer:rootReducer,
  });

const createStoreWithMiddleware=applyMiddleware(thunk)(createStore);


ReactDOM.render(<Provider store={createStoreWithMiddleware(mainReducer)}><App /></Provider>,document.getElementById('root'));