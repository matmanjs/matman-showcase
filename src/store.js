import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import api from './middlewares/api';

import { reducer as bannerInfo } from './pages/mock-xhr/data/banner';
import { reducer as moneyInfo } from './pages/mock-xhr/data/money';

const configureStore = preloadedState => createStore(
    combineReducers({
        bannerInfo,
        moneyInfo
    }),
    preloadedState,
    applyMiddleware(thunk, api)
);

export default configureStore;
