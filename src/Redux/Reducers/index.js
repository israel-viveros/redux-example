import {combineReducers} from 'redux';
import ItemReducers from './items';

export default combineReducers({
    ...ItemReducers
});