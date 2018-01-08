import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'
import { TabNavigator, StackNavigator} from 'react-navigation'

import { Home, Category, Me, Detail} from 'page'

import { COLOR_PRIMARY } from 'util'

const Tabs = TabNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			title: '首页',
			tabBarLabel: '首页',
			tabBarIcon: ({tintColor, focused})=> {
				const icon = focused ? require('images/tabbar/home_active.png') : require('images/tabbar/home.png')
				return <Image style={styles.icon} source={icon}/>
			}
		}
	},
	Category: {
		screen: Category,
		navigationOptions: {
			title: '分类',
			tabBarLabel: '分类',
			tabBarIcon: ({tintColor, focused})=> {
				const icon = focused ? require('images/tabbar/category_active.png') : require('images/tabbar/category.png')
				return <Image style={styles.icon} source={icon}/>
			}
		}
	},
	Me: {
		screen: Me,
		navigationOptions: {
			title: '我的',
			tabBarLabel: '我的',
			tabBarIcon: ({tintColor, focused})=> {
				const icon = focused ? require('images/tabbar/me_active.png') : require('images/tabbar/me.png')
				return <Image style={styles.icon} source={icon}/>
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

const styles = StyleSheet.create({
	icon: {
		width: 25,
		height: 25,
	}
})