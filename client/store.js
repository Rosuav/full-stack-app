import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; //optional
import reducer from './reducer';

export default createStore(reducer, applyMiddleware(thunk));
