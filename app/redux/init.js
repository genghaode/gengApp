import { compose, applyMiddleware, createStore, combineReducers } from 'redux'
import { AsyncStorage } from 'react-native'
import { persistStore, autoRehydrate } from 'redux-persist'
import thunk from 'redux-thunk'


import { nav } from 'redux/reducers/nav'

export const init = async() => {

  const reducer = combineReducers({
    nav
  })
  const store = compose(
    autoRehydrate(),
    applyMiddleware(thunk)
  )(createStore)(reducer)
  return new Promise((resolve, reject) => {
    const blacklist = []
    const storage = AsyncStorage
    persistStore(store, { blacklist, storage }, () => {
      resolve(store)
    })
  })
}