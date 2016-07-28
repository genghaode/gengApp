import React, {Component} from 'react'
import {View, TouchableOpacity, StyleSheet, Image, Text} from 'react-native'
import {connect} from 'react-redux'

class GTabBar extends Component {
  static propTypes = {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array,
    tabNames: React.PropTypes.array
  }
  render(){
    return (
      <View style={styles.tabWrap}>
        {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
      </View>
    )
  }
  renderTabOption(tab, i){
    let flag = this.props.tab == i ? true : false
    let icon = flag ? this.props.tabNames[i].activeIcon : this.props.tabNames[i].icon
    let color = flag ? 'active' : 'defaults'
    return (
      <TouchableOpacity
        style={styles.tabbarWrap}
        key={i}
        onPress={() => this.props.goToPage(i)}
      >
        <View style={styles.tabbar}>
          <Image
            source={icon}
            style={styles.image}
          />
        <Text style={[styles.text, styles[color]]}>{this.props.tabNames[i].title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  tabWrap: {
    height: 44,
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
  tabbarWrap: {
    flex: 1
  },
  tabbar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 20,
    height: 20,
  },
  text: {
    fontSize: 12,
    marginTop: 2,
  },
  active: {
    color: '#ff0000'
  },
  defaults: {
    color: '#666'
  }
})

const mapStateToProps = (state) => {
  return {
    tab: state.tab
  }
}

const __module = connect(mapStateToProps)(GTabBar)

export default __module
