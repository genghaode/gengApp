import React, { Component } from 'react'
import { TabNavigator, StackNavigator} from 'react-navigation'

import { Home, Category, Me, Detail} from 'page'

const Tabs = TabNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			title: '首页',
			tabBarLabel: '首页',
			tabBarIcon: ''
		}
	},
	Category: {
		screen: Category,
		navigationOptions: {
			title: '分类',
			tabBarLabel: '分类',
			tabBarIcon: ''
		}
	},
	Me: {
		screen: Me,
		navigationOptions: {
			title: '我的',
			tabBarLabel: '我的',
			tabBarIcon: ''
		}
	}
}, {
	initialRouteName: 'Home',
	tabBarPosition: 'bottom',
	animationEnabled: false,
	swipeEnabled: false
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