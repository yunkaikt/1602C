import {createStore,applyMiddleware} from 'redux';
export {default as actions} from './actions';
export * from './type';
import reducer from './reducer';
import thunkMiddleware from "redux-thunk"



export default createStore(reducer,applyMiddleware(thunkMiddleware));
