import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'

import reducerUser from './ducks/user/reducer'


const createRootReducer = () => combineReducers({
  usuario: reducerUser,
  
})

const store = createStore(createRootReducer(), composeWithDevTools())

export { store }