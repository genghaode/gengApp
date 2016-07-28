import React, {Component} from 'react'
import {ActivityIndicator} from 'react-native'
import {GText, GView_MD} from 'common'

export class GLoadingView extends Component {
  render() {
		return (
      <GView_MD>
        <ActivityIndicator />
        <GText>加载中...</GText>
      </GView_MD>
		)
	}
}
