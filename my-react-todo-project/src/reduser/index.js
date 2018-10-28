import { combineReducers } from 'redux';
import {registration} from './registration'
import {authentication} from './login'
import {HasErrored, isLoading, items} from './item'
import {tests} from "./test";


const rootReducer = combineReducers({
    registration,
    authentication,
    items,
    HasErrored,
    isLoading,
    tests
});

export default rootReducer;