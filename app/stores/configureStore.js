import React, {Component} from 'react'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import track from 'stores/track'
import promise from 'stores/promise'

import {tab} from 'reducers/tab'

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent

const createStoreWithMiddleWare = applyMiddleware(
  thunk,
  track,
  promise
)(createStore)

const reducer = combineReducers({
  tab
})

let store = null

export const configureStore = (onComplete) => {
  store = createStoreWithMiddleWare(reducer)
  onComplete()
  if(isDebuggingInChrome){
    window.store = store
  }
  return store
}

export const getStore = () => {
  return store
}
