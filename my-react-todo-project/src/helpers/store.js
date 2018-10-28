import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reduser/index';

export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))

store.subscribe(()=>console.log(store.getState()));

export default store;