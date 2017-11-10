/**
 * Created by naube on 2017-09-28.
 */

//To create store
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

//Importing reducers
import mainReducer from '../reducers/mainReducer';
import plantsReducer from '../reducers/plantsReducer';
import authenticatedReducer from '../reducers/authenticatedReducer';

export default createStore(
    combineReducers({
        mainReducer,
        plantsReducer,
        authenticatedReducer
    }),
    applyMiddleware(createLogger(), thunk)
);
