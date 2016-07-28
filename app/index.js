import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import {GNavigator, GLoadingView, GView_Wrap, sbStyle} from 'common'
import {configureStore, getStore} from 'stores/configureStore'
import {Provider} from 'react-redux'

class GApp extends Component {
  constructor(props){
    super(props)
    this.state = {
      store: null
    }
  }
  componentDidMount(){
    configureStore(() => {
      this.setState({
        store: getStore()
      })
    })
  }
  render(){
    const store = this.state.store
    if(!store){
      return (
        <GLoadingView />
      )
    }
    return (
      <Provider store={store}>
        <GView_Wrap>
          <StatusBar
            backgroundColor='rgba(0,0,0,0)'
            barStyle={sbStyle}
          />
          <GNavigator />
        </GView_Wrap>
      </Provider>
    )
  }
}

export default GApp
