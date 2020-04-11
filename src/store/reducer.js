import {combineReducers} from 'redux';
import listReducer from '../components/Goodsdetail/listReducer';
import cartReducer from '../components/Cart/cartReducer';

var reducer=combineReducers({
    list:listReducer,
    cart:cartReducer
})
export default reducer;