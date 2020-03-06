import { combineReducers } from 'redux';
import updateItemsList from './items-list-reducer';
import updateCart from './cart-reducer';

const reducer = combineReducers({
    cartReducer: updateCart,
    itemsListReducer: updateItemsList
});
  
export default reducer;