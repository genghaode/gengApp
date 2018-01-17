import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { LoadingContainer } from 'container'
import { http_get_noauth } from 'util'

@LoadingContainer({
	request: ()=> http_get_noauth('/test')
})
export class Home extends Component {
	render(){
		return (
			<Text>Home {this.props.data.name}</Text>
		)
	}
}