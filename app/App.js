import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { addNavigationHelpers, TabNavigator, StackNavigator} from 'react-navigation'

import { Home, Category, Me, Detail} from 'page'

import { COLOR_PRIMARY } from 'util'

const Tabs = TabNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			title: '首页',
			tabBarLabel: '首页',
			tabBarIcon: ({tintColor, focused})=> {
				const icon = focused ? require('assets/tabbar/home_active.png') : require('assets/tabbar/home.png')
				return <Text style={styles.icon}>&#xe62a;</Text>
			}
		}
	},
	Category: {
		screen: Category,
		navigationOptions: {
			title: '分类',
			tabBarLabel: '分类',
			tabBarIcon: ({tintColor, focused})=> {
				return <Text style={styles.icon}>&#xe614;</Text>
			}
		}
	},
	Me: {
		screen: Me,
		navigationOptions: {
			title: '我的',
			tabBarLabel: '我的',
			tabBarIcon: ({tintColor, focused})=> {
				return <Text style={styles.icon}>&#xe602;</Text>
			}
		}
	}
}, {
	initialRouteName: 'Home',
	tabBarPosition: 'bottom',
	animationEnabled: false,
	swipeEnabled: false,
	tabBarOptions: {
    activeTintColor: COLOR_PRIMARY,
  }
})

export const App = StackNavigator({
	Tabs: {
		screen: Tabs
	},
	Detail: {
		screen: Detail,
		navigationOptions: {
			title: '详情'
		}
	}
})

const _AppState = ({ dispatch, nav }) => (
  <App navigation={addNavigationHelpers({ dispatch, state: nav })} />
)

export const AppState = connect(state => ({
  nav: state.nav,
}))(_AppState)

const styles = StyleSheet.create({
	icon: {
		fontFamily: 'iconfont',
		fontSize: 26
	}
})