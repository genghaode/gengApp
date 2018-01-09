import React, { Component } from 'react'
import { Provider } from 'react-redux'

import { init } from 'redux/init'
import { AppState } from './App'

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