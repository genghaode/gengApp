import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'

import GTabBar from 'common/tabs/GTabBar'

import GHome from 'pages/home/GHome'

import GMe from 'pages/me/GMe'
import GMyOrder from 'pages/order/GMyOrder'

import {switchTab} from 'actions/tab'
import {connect} from 'react-redux'

class GTabView extends Component {
  constructor(props){
    super(props)
    this.state = {
      tabNames: [
        {
          title: '首页',
          icon: require('img/tabs/home_1.png'),
          activeIcon: require('img/tabs/home.png')
        },
        {
          title: '我的订单',
          icon: require('img/tabs/orders_1.png'),
          activeIcon: require('img/tabs/orders.png')
        },
        {
          title: '我',
          icon: require('img/tabs/me_1.png'),
          activeIcon: require('img/tabs/me.png')
        },
      ]
    }
  }
  render(){
    const tabNames = this.state.tabNames
    console.dir(GHome)
    return (
        <ScrollableTabView
          renderTabBar={() => <GTabBar tabNames={tabNames} />}
          tabBarPosition='bottom'
          scrollWithoutAnimation={true}
          locked={true}
          onChangeTab={this._onChangeTab}
          initialPage={this.props.tab}
        >
          <View
            tabLabel="key1"
            style={styles.container}
          >
            <GHome />
          </View>
          <View
            tabLabel="key2"
            style={styles.container}
          >
            <GMyOrder />
          </View>
          <View
            tabLabel="key3"
            style={styles.container}
          >
            <GMe />
          </View>
        </ScrollableTabView>

    )
  }
  _onChangeTab = (tabs) => {
    if(this.props.tab !== tabs.i){
      this.props.dispatch(switchTab(tabs.i))
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    flex: 1
  }
})

const mapStateToProps = (state) => {
  return {
    tab: state.tab
  }
}

const __module = connect(mapStateToProps)(GTabView)

export default __module
