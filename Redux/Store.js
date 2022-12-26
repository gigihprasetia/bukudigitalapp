import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {compose, applyMiddleware} from '@reduxjs/toolkit';
import reducer from './Reducer/index';
const Store = configureStore(reducer, compose(applyMiddleware(thunk)));

export default Store;
