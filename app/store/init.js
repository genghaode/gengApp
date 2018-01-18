import { compose, applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { nav } from 'store/reducers/nav'
import { auth } from 'store/reducers/auth'



const reducer = persistCombineReducers({
  key: 'root',
  storage,
  blacklist: ['nav']
}, {
  auth,
  nav
})


const _store = createStore(
   reducer,
   undefined,
   compose(
     applyMiddleware(thunk, logger)
   )
 )

persistStore(_store)

global.store = _store

export const store = _store