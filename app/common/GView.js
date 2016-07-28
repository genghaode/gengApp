import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import {bgColor_Wrap, W,H} from 'common'

// Wrap盒子
export const GView_Wrap = (props) => {
  return(
    <View
      style={[styles.container, styles.flexV]}
      {...props}
    />
  )
}

// 水平垂直居中盒子
export const GView_MD = (props) => {
  return(
    <View
      style={[styles.flexV, styles.vCenter, styles.hCenter]}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: bgColor_Wrap,
  },
  flexV: {
    flex: 1,
    flexDirection: 'row',
  },
  vCenter: {
    justifyContent: 'center',
  },
  hCenter: {
    alignItems: 'center',
  }
})
