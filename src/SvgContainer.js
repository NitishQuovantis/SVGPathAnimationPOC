import React, {Component} from 'react';
import {
  Animated,
  Text,
  View,
  Alert,
  Dimensions,
  PanResponder,
} from 'react-native';
import * as d3 from 'd3-shape';
import SVG, {Path, G, Polygon, Line, Svg} from 'react-native-svg';
import {svgPathProperties} from 'svg-path-properties';
import FullScreen from './FullScreen';

export default class SvgContainer extends Component {
  constructor(props) {
    super(props);

    this.points = [];
    this.xValues = [];
    this.yValues = [];
    this.currentProgress = 50;
    this.totalDays = 84;

    this.animation = new Animated.Value(0);
    const {height, width} = Dimensions.get('window');
    this.viewHeight = height;
    this.viewWidth = width;

    this.path =
      'M43.0954558,258 C51.2435537,288.204622 67.0768871,304.204622 90.5954558,306 C125.873309,308.693066 247.269632,306.238593 278.095456,306 C308.921279,305.761407 331.800536,327.258834 330.595456,360 C329.390376,392.741166 298.030722,404.430477 290.57138,410.405262 C283.112037,416.380046 134.14621,406.525216 95.0954558,412.5 C56.0447019,418.474784 46.6635211,443.078477 45.5954558,468 C44.5273905,492.921523 72.8457726,515.879307 90.5954558,517.5 C108.345139,519.120693 256.844051,513.538547 286.700601,520.442874 C316.557151,527.347201 331.225712,546.403196 330.595456,573 C329.9652,599.596804 302.915858,622.03459 275.595456,624 C248.275054,625.96541 118.8693,616.860806 90.5954558,624 C62.3216119,631.139194 45.1103284,658.902073 43.0954558,682.706649 C41.7522074,698.576366 54.5855407,714.450779 81.5954558,730.329889';

    //39 - 25, 62 - 28
    this.path =
      'M11.095 34c8.149 30.205 23.982 46.205 47.5 48 35.278 2.693 156.675.239 187.5 0 30.826-.239 53.706 21.259 52.5 54-1.205 32.741-32.564 44.43-40.024 50.405-7.459 5.975-156.425-3.88-195.476 2.095-39.05 5.975-48.431 30.578-49.5 55.5-1.068 24.922 27.25 47.88 45 49.5 17.75 1.62 166.25-3.961 196.106 2.943 29.856 6.904 44.525 25.96 43.894 52.557-.63 26.597-27.68 49.035-55 51-27.32 1.965-156.726-7.14-185 0-28.273 7.14-45.485 34.902-47.5 58.707-1.343 15.87 11.49 31.744 38.5 47.623';

    this.extractPathProperties();
    this.extractPathValues();
    this.addAnimationListener();
    this.startAnimation();
    this.setTouchResponder();
  }

  extractPathProperties = () => {
    this.properties = new svgPathProperties(this.path);
    this.totalPathLength = this.properties.getTotalLength();
    const {x, y} = this.properties.getPointAtLength(0);

    this.initialX = this.interpolateX(x) + 23; //
    this.initialY = this.interpolateY(y) - 2.7;
    const parts = this.properties.getParts();
  };

  extractPathValues = () => {
    var orgY = [];
    var orgX = [];

    for (let i = 0; i < this.totalDays + 1; ++i) {
      let value = i / this.totalDays;
      const pathLength = this.totalPathLength * value;
      const {x, y} = this.properties.getPointAtLength(pathLength);
      const coordX = this.interpolateX(x) + this.initialX - 5;
      const coordY = this.interpolateY(y) + this.initialY - 10;

      this.points.push(value);
      this.xValues.push(coordX);
      this.yValues.push(coordY);
      orgY.push(coordY);
      orgX.push(coordX);
    }

    // Making closing path.... by reversing array..
    let reverseXArray = [...orgX];
    let reverseYArray = [...orgY];

    reverseXArray.reverse();
    reverseYArray.reverse();

    for (let i = 0; i < this.totalDays + 1; ++i) {
      this.xValues.push(reverseXArray[i]);
      this.yValues.push(reverseYArray[i]);
    }

    let areaObject = [];
    for (let i = 0; i < 2 * this.totalDays + 1; ++i) {
      areaObject.push({x: this.xValues[i], y: this.yValues[i]});
    }

    var area = d3
      .area()
      .curve(d3.curveBasis) // will smoothen the curve
      .x(d => d.x)
      .y(d => d.y)

      .y1(628);
    this.areaPath = area(areaObject);
  };

  addAnimationListener = () => {
    this.animation.addListener(({value}) => {
      const pathLength =
        this.totalPathLength * (this.currentProgress / 84) * value;
      const {x, y} = this.properties.getPointAtLength(pathLength);

      const coordX = this.interpolateX(x) + this.initialX - 5;
      const coordY = this.interpolateY(y) + this.initialY - 10;

      if (!this.ref) {
        return;
      }

      this.ref.setNativeProps({
        style: {
          transform: [{translateX: coordX}, {translateY: coordY}],
        },
      });
    });
  };

  startAnimation = () => {
    Animated.timing(this.animation, {
      toValue: 1,
      duration: 50000,
    }).start(() => {});
  };

  setTouchResponder = () => {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (event, gestureState) => true,
      onStartShouldSetPanResponderCapture: (event, gestureState) => true,
      onMoveShouldSetPanResponder: (event, gestureState) => false,
      onMoveShouldSetPanResponderCapture: (event, gestureState) => false,
      onPanResponderGrant: (event, gestureState) => false,
      onPanResponderStart: (event, gestureState) => {},
      onPanResponderMove: (event, gestureState) => false,
      onPanResponderRelease: (event, gestureState) => {},
    });
  };

  interpolateX = x => {
    return (x / 375) * this.viewWidth;
  };

  interpolateY = y => {
    return (y / 618) * this.viewHeight;
  };

  render() {
    console.log(
      'interpolateX and Y are',
      this.interpolateX(21),
      this.interpolateY(4),
    );

    return (
      <View
        style={{
          width: this.viewWidth,
          height: this.viewHeight,
        }}>
        <FullScreen
          style={{
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
            position: 'absolute',
          }}
        />

        <SVG
          style={{flex: 1}}
          {...this.panResponder.panHandlers}
          preserveAspectRatio="none"
          viewBox="0 0 375 618">
          <View
            style={{backgroundColor: 'red', width: 10, height: 10}}
            ref={ref => {
              this.ref = ref;
            }}
          />
          <G transform="translate(32 30)">
            <Path d={this.path} fillRule="evenodd" fill="none" stroke="red" />
          </G>
        </SVG>
      </View>
    );
  }
}

// {/* <Svg
//   style={{position: 'absolute', left: 0, right: 0, bottom: 0, top: 0}}
//   preserveAspectRatio="none"
//   viewBox={'0 0 ' + this.viewWidth + ' ' + this.viewHeight}>
//   <G
//     transform={
//       'translate(' +
//       (this.initialX - 28) +
//       ' ' +
//       (this.initialY - 45) +
//       ' )'
//     }>
//     <Path d={this.areaPath} fillRule="evenodd" stroke="black" />
//   </G>
// </Svg> */}

// {/* areaPath */}
