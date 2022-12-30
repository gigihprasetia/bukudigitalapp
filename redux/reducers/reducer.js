import {combineReducers} from 'redux';
import authRedux from './auth';
import {QueryState} from './query';
const reducers = combineReducers({authRedux, QueryState});

export default reducers;
