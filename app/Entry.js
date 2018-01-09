import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import { init } from 'redux/init'
import { App } from './App'

const _AppState = ({ dispatch, nav }) => (
  <App navigation={addNavigationHelpers({ dispatch, state: nav })} />
)

const AppState = connect(state => ({
  nav: state.nav,
}))(_AppState)

export class Entry extends Component {
	constructor() {
    super()
    this.state = {
      store: null
    }
  }
  componentDidMount() {
    init().then(__store => {
      global.store = __store
      setTimeout(() => {
        this.setState({ store: __store })
      })
    }).catch((e) => {
      console.log(e)
    })
  }
	render(){
		const { store } = this.state
    if (!store) {
      return null
    }
		return (
			<Provider store={store}>
        <AppState />
      </Provider>
		)
	}
}