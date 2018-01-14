import React, { Component } from 'react'
import { TouchableOpacity, Text, View, ActivityIndicator } from 'react-native'
import { BUTTON_PRIMARY, BUTTON_DEFAULT } from 'util'

export class GButton extends Component {
  static defaultProps = {
    title: '按钮',
    type: 'default',
    loading: false,
    disabled: false
  }
  render() {
    const { title, loading, type, disabled } = this.props
    let style = ''
    if(type == 'primary'){
      style = BUTTON_PRIMARY
    }else {
      style = BUTTON_DEFAULT
    }

    if(disabled){
      style.wrap.opacity = .4
    }

    if (loading) {
      return (
        <View style={style.wrap}>
    			<ActivityIndicator color={style.txt.color} />
          <Text style={style.txt}>{title}</Text>
    		</View>
      )
    }
    return (
      <TouchableOpacity disabled={disabled} style={{...style.wrap, ...this.props.style}} onPress={()=>this._onPress()} activeOpacity={.5}>
    		<Text style={style.txt}>{title}</Text>
    	</TouchableOpacity>
    )
  }
  _onPress() {
    this.props.onPress && this.props.onPress()
  }
}