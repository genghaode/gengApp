import React, {Component} from 'react'
import {Navigator, View} from 'react-native'
import {PagesConfig, GView_Wrap, OS, bgColor_NavBar, GNavigationBar} from 'common'

export class GNavigator extends Component {
  constructor(props){
    super(props)
    this.state = {
      initialRoute: PagesConfig.initial
    }
  }
  render(){
    const initialRoute = this.state.initialRoute
    return (
      <Navigator
        initialRoute={initialRoute}
        renderScene={this._renderScene}
        configureScene={this._configScene}
        navigationBar={this._navigationBar()}
      />
    )
  }
  _renderScene = (route, navigator) => {
    if(route === null){
      return null
    }

    const {default: Comp} = route.Comp

    return (
      <GView_Wrap>
        <View style={{height: 64}} />
        <Comp navigator={navigator} index={route.name == 'Home' ? this.props.tab : 0} />
      </GView_Wrap>
    )
  }
  _configScene = (route) => {
    if(route === null){
      return null
    }
    if(OS === 'android'){
      return Navigator.SceneConfigs.FadeAndroid
    }
    return Navigator.SceneConfigs.FloatFromRight
  }
  _navigationBar = () => {
    return (
      <Navigator.NavigationBar
        routeMapper={GNavigationBar}
        style={{backgroundColor: bgColor_NavBar}}
      />
    )
  }
}
