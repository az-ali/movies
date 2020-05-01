import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import AppRouter from './routers/AppRouter';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk))
ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>, document.querySelector('#root')
);