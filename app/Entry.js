import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'
import { StatusBar, View } from 'react-native'
import { store } from './redux/store'
import { App } from './App'


@connect(state => ({
  nav: state.nav,
}))
class AppState extends Component{
  render(){
    const { dispatch, nav } = this.props
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0.2)" translucent={true} />
        <App navigation={addNavigationHelpers({ dispatch, state: nav })} />
      </View>
    )
  }
}


export class Entry extends Component {
	state = {
    store: store
  }
	render(){
		return (
			<Provider store={store}>
        <AppState />
      </Provider>
		)
	}
}