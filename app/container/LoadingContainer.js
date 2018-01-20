import React, { Component } from 'react'
import { View, ActivityIndicator, Text, Button } from 'react-native'
import { FullFlexCenter, IconFont } from 'util'
import { GButton } from 'component'

export const LoadingContainer = arg => WrapComponent => class extends Component {
  state = {
    data: null,
    error: false,
    loading: false
  }
  componentWillMount() {
    this.req()
  }
  req = async() => {
    this.setState({
      loading: true
    })
    try {
      const data = await arg.request()
      console.log(data)
      this.setState({ 
        data, 
        error: false,
        loading: false
      })
    } catch (err) {
      this.setState({
        error: true,
        loading: false
      })
    }
  }
  componentWillUnmount(){
    console.log(11111)
  }
  render() {
    const { data, error, loading } = this.state
    if (error) {
      return (
        <View style={FullFlexCenter}>
          <Text style={{...IconFont, fontSize: 100}}>&#xe62c;</Text>
          <Text>网络错误， 请重试...</Text>
          <GButton onPress={this.req} title="重试" loading={loading} type='primary' />
        </View>
      )
    }
    if (!data) {
      return <View style={FullFlexCenter}>
        <ActivityIndicator />
        <Text>数据加载中...</Text>
      </View>
    }
    return (
      <WrapComponent style={{flex : 1}} data={this.state.data} {...this.props} />
    )
  }
}
