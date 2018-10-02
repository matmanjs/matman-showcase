import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';

import createStore from './store';

import RootComponent from './RootComponent';

const store = createStore(window.__initialState);

const Root = connect((state) => {
    return state;
})(RootComponent);

ReactDOM.render((
    <Provider store={store}>
        <Root />
    </Provider>
), document.getElementById('root'));

