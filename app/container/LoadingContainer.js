import React, { Component } from 'react'
import { View, ActivityIndicator, Text, Button } from 'react-native'
import { FlexCenter } from 'util'

class _LoadingContainer extends Component {
  constructor() {
    super()
    this.state = {
      // 数据
      data: null,
      // 是否有错误
      error: false
    }
  }

  componentWillMount() {
    // 请求数据
    this.req()
  }
  
  // 请求数据
  req = async() => {
    try {
      // 请求到数据，将数据更新到state内
      const data = await this.props.request()
      this.setState({ 
        data, 
        error: false 
      })
    } catch (ex) {
      // 出现错误时，更新state内的错误状态
      this.setState({
        error: true
      })
    }
  }

  render() {
    const { data, error } = this.state
    // 错误时
    if (error) {
      return <View style={{flex : 1, ...FlexCenter}}>
        <Text>网络错误， 请重试...</Text>
        <Button title="重试" onPress={this.req} />
      </View>
    }
    // 数据为空时
    if (!data) {
      return <View style={{flex : 1, ...FlexCenter}}>
        <ActivityIndicator />
      </View>
    }
    return (
      <View style={{flex : 1}}>
        {React.cloneElement(this.props.children, {data : this.state.data})}
      </View>
    )

  }
}

export const LoadingContainer = _LoadingContainer