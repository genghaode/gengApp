import { compose, applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { nav } from 'redux/reducers/nav'

const reducer = combineReducers({
  nav
})

const _store = compose(
  applyMiddleware(thunk, logger)
)(createStore)(reducer)

global.store = _store

export const store = _store