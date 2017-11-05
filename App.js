/**
 * IconFontDemo
 * 作者Git：https://github.com/guangqiang-liu
 * 技术交流群：620792950
 * 作者QQ：1126756952
 * Created by guangqiang on 2017/11/5.
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native'

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{flex: 1, marginTop: 100}}>解决在iOS下键盘遮挡问题，Android平台系统已自动处理了，不需要开发者引入其它三方SDK。</Text>
        <TextInput
          style={{height: 40, borderWidth: 1, borderColor: 'red', marginBottom: 20, width: 200}}
          underlineColorAndroid='transparent'
          placeholder={'我是TextInput组件'}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})