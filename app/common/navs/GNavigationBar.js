import React, {Component} from 'react'
import {Text} from 'react-native'
import {GView_MD, GText_h1} from 'common'

export const GNavigationBar = {
  LeftButton: (route, navigator, index, navState) => {
    // if(index > 0){
    //   return <MNavBackBtn routeStack={navState.routeStack[navState.routeStack.length-2]} index={this.props.tab} navigator={navigator} />
    // }else {
    //   return null
    // }
    return null
  },
  RightButton: (route, navigator, index, navState) => {
    return null
  },
  Title: (route, navigator, index, navState) => {
    // return <MTabBarTitle route={route} index={this.props.tab} />
    return (
      <GView_MD>
        <GText_h1>文本</GText_h1>
      </GView_MD>
    )
  }
}
