import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import api from '../middlewares/api';

const configureStore = preloadedState => createStore(
    combineReducers({
        // 'default': () => ({
        // })
    }),
    preloadedState,
    applyMiddleware(thunk, api)
);

export default configureStore;
