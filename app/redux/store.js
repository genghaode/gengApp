import { compose, applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { nav } from 'redux/reducers/nav'
import { auth } from 'redux/reducers/auth'

const reducers = combineReducers({
  nav,
  auth
})
 
const reducer = persistCombineReducers({
  key: 'root',
  storage
}, reducers)

const _store = compose(
  applyMiddleware(thunk, logger)
)(createStore)(reducer)

global.store = persistStore(_store)

export const store = persistStore(_store)