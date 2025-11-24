// src/reducers/index.js
import { combineReducers } from 'redux';
import loadingReducer from './loaderSlice';

const rootReducer = combineReducers({
    loader: loadingReducer,
});

export default rootReducer;