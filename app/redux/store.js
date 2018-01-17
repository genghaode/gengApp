import { compose, applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { nav } from 'redux/reducers/nav'
import { auth } from 'redux/reducers/auth'

const reducer = combineReducers({
  nav,
  auth
})

const _store = compose(
  applyMiddleware(thunk, logger)
)(createStore)(reducer)

global.store = _store

export const store = _store