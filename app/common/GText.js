import React, {Component} from 'react'
import {Text, StyleSheet} from 'react-native'
import {tColor66, tSize12, tSize16, tColorFF} from 'common'

// 普通文本
export const GText = (props) => {
  return(
    <Text
      style={styles.text}
      {...props}
    />
  )
}

// 标题文本
export const GText_h1 = (props) => {
  return (
    <Text
      style={styles.h1}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: tSize12,
    color: tColor66,
    lineHeight: tSize12*1.5,
  },
  h1: {
    fontSize: tSize16,
    color: tColorFF,
  }
})
