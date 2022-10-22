import { createStore, combineReducers, applyMiddleware } from 'redux'
import productReducer from './reducers/productReducer'
import thunk from 'redux-thunk'

const reducers = combineReducers({ productArray: productReducer });
//store'dan bilgi alınırken counter ile alınacak
const store = createStore(reducers, applyMiddleware(thunk));
//reducer'lar store'a createStore ile bağlanır. 

export default store;