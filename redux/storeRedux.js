import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/reducer';
const Stores = createStore(reducers, compose(applyMiddleware(thunk)));

export default Stores;
