/**
 * Created by naube on 2017-09-28.
 */

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';

import mainReducer from '../reducers/mainReducer';
import carsReducer from '../reducers/carsReducer';
import logInReducer from '../reducers/logInReducer';


export default createStore(
    combineReducers({
        mainReducer,
        carsReducer,
        logInReducer
    }),
    applyMiddleware(/*createLogger()*/)
);
