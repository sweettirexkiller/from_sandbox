import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { updateHistoryOnMove } from './containers/game/middleware';

import createReducer from './reducer';
import { App } from './containers/app';

const DEBUG = true;

const reducer = createReducer();

let composeEnhancers, store;
const middleware = applyMiddleware(thunk, updateHistoryOnMove);

if (DEBUG) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    store = createStore(reducer, undefined, composeEnhancers(middleware));
} else {
    composeEnhancers = compose;
    store = createStore(reducer, undefined, composeEnhancers(middleware));
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
