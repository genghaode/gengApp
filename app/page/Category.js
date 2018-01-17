import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { GButton } from 'component'
import { http_get } from 'util'


export class Category extends Component {
	state = {
		loading: false
	}
	render(){
		const {loading} = this.state
		return (
			<View>
				<Text>Category</Text>
				<GButton onPress={this.check} title="检测登录状态" loading={loading} type='primary' />
			</View>
		)
	}
	check = async ()=> {
		this.setState({
			loading: true
		})
		try {
			const ret = await http_get('check')
			this.setState({
				loading: false
			})
		}catch(err){
			console.log(1111,err)
			this.setState({
				loading: false
			})
		}
	}
}