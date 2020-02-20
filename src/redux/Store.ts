import { createStore, combineReducers } from 'redux';

/**
 * Reducers
 */
import RootReducer from './reducers/RootReducer';

export default createStore(RootReducer);