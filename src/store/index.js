import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import reducer from './reducer';
import logger from './logger';
import thunk from 'redux-thunk';
import apiMiddleware from "../api/index";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk, logger, apiMiddleware)),
);
export default store;