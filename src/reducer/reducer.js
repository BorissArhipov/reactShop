import { combineReducers } from 'redux';
import updateItemsList from './items-list-reducer';

const reducer = combineReducers({
    itemsList: updateItemsList
});
  
export default reducer;