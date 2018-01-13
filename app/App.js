import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import { addNavigationHelpers, TabNavigator, StackNavigator} from 'react-navigation'

import { Home, Category, Me, Detail} from 'page'

import { COLOR_PRIMARY, COLOR_PRIMARY_TXT, COLOR_TITLE, IconFont } from 'util'


const iconStyle = {color: COLOR_TITLE, ...IconFont}
const activeIconStyle = {color: COLOR_PRIMARY, ...IconFont}

const Tabs = TabNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			title: '首页',
			tabBarLabel: '首页',
			tabBarIcon: ({tintColor, focused})=> {
				return <Text style={focused ? activeIconStyle : iconStyle}>&#xe62a;</Text>
			}
		}
	},
	Category: {
		screen: Category,
		navigationOptions: {
			title: '分类',
			tabBarLabel: '分类',
			tabBarIcon: ({tintColor, focused})=> {
				return <Text style={focused ? activeIconStyle : iconStyle}>&#xe614;</Text>
			}
		}
	},
	Me: {
		screen: Me,
		navigationOptions: {
			title: '我的',
			tabBarLabel: '我的',
			tabBarIcon: ({tintColor, focused})=> {
				return <Text style={focused ? activeIconStyle : iconStyle}>&#xe602;</Text>
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
    inactiveTintColor: COLOR_TITLE
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
}, {
	navigationOptions: {
		headerStyle: {backgroundColor: COLOR_PRIMARY},
		headerTitleStyle: {color: COLOR_PRIMARY_TXT}
	}
})