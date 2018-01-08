import { compose, applyMiddleware, createStore, combineReducers } from 'redux'
import { AsyncStorage } from 'react-native'
import { persistStore, autoRehydrate } from 'redux-persist'
import thunk from 'redux-thunk'


import { user } from 'domain/redux/reducers/user'

export const init = async() => {

  const reducer = combineReducers({
    user
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