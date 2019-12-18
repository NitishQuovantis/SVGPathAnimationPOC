import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import SvgContainer from './src/SvgContainer';
import FullScreen from './src/FullScreen';

console.disableYellowBox = true;
export default class App extends Component {
  render() {
    return (
      <View style={[styles.containerStyle]}>
        <SvgContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    // padding: 16,
    // paddingTop: 50,
  },
});
