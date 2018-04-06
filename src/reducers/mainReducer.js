import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer.js'
import itemsReducer from './itemsReducer.js'
import cartReducer from './cartReducer.js'
import searchReducer from './searchReducer.js'

export default combineReducers({
    categoryReducer,
    itemsReducer,
    cartReducer,
    searchReducer
})