import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { http_get } from 'util'

export class Home extends Component {
	state = {
		data: 'hello'
	}
	async componentDidMount(){
		try {
			let data = await http_get('/test')
			console.log(data)
		}catch(err){
			console.log(err)
		}
	}
	render(){
		return (
			<View>
				<Text>Home {this.state.data}</Text>
			</View>
		)
	}
}