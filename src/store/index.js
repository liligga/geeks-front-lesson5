// import { composeWithDevTools } from '@redux-devtools/extension';
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { todosReducer } from './todoReducer'
import { usersReducer } from './usersReducer'


const rootReducer = combineReducers({
  todos: todosReducer,
  users: usersReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

// npm install --save @redux-devtools/extension
