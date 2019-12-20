import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import SvgContainer from './src/SvgContainer';
import FullScreen from './src/FullScreen';
import SvgPathAnimation from './src/SvgPathAnimation';
import SvgPathFillAnimation from './src/SvgPathFillAnimation';

console.disableYellowBox = true;
export default class App extends Component {
  render() {
    return (
      <View style={[styles.containerStyle]}>
        <SvgPathFillAnimation />
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
