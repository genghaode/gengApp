import React, { Component } from 'react'
import { View, ActivityIndicator, Text, Button } from 'react-native'
import { FlexCenter } from 'util'

export const LoadingContainer = arg => WrapComponent => class extends Component {
  state = {
    data: null,
    error: false
  }
  componentWillMount() {
    this.req()
  }
  req = async() => {
    try {
      const data = await arg.request()
      this.setState({ 
        data, 
        error: false 
      })
    } catch (err) {
      this.setState({
        error: true
      })
    }
  }

  render() {
    const { data, error } = this.state
    if (error) {
      return <View style={{flex : 1, ...FlexCenter}}>
        <Text>网络错误， 请重试...</Text>
        <Button title="重试" onPress={this.req} />
      </View>
    }
    if (!data) {
      return <View style={{flex : 1, ...FlexCenter}}>
        <ActivityIndicator />
        <Text>数据加载中...</Text>
      </View>
    }
    return (
      <WrapComponent style={{flex : 1}} data={this.state.data} {...this.props} />
    )
  }
}
