import React, {Component} from 'react';
import {
  StyleSheet,
  Animated,
  Dimensions,
  Easing,
  View,
  PanResponder,
  Alert,
} from 'react-native';
import Svg, {
  Path,
  G,
  Defs,
  LinearGradient,
  Stop,
  RadialGradient,
} from 'react-native-svg';
import {svgPathProperties} from 'svg-path-properties';
import * as d3 from 'd3';
import BadgeComponent from './BadgeComponent';

const AnimatedPath = Animated.createAnimatedComponent(Path);

export default class SvgPathFillAnimation extends Component {
  constructor(props) {
    super(props);

    // Outer contour line is not useable, as it is traversing according to multiple
    // smaller part which made the whole line
    this.outerContourLine =
      'M81.7023054,477.304964l1.35,-0.011m0,28.141c-30.047,0,-54.405,25.199,-54.405,56.282c0,30.774,23.873,55.778,53.505,56.275l0.9,0.008m237.946,-253.485l-0.9,-0.008m0,-28.141c45.07,0,81.606,37.798,81.606,84.424c0,46.159,-35.809,83.667,-80.256,84.412l-1.35,0.011m-235.751,-281.634c-30.047,0,-54.404,25.199,-54.404,56.283c0,30.773,23.873,55.778,53.504,56.275l0.9,0.007m-1.35,-140.695l1.35,-0.011m237.946,-112.779l-0.9,-0.008m0,-28.141c45.07,0,81.607,37.798,81.607,84.424c0,46.159,-35.81,83.667,-80.257,84.412l-1.35,0.012m-260.085,-172.893l0.095,0.042c6.199,2.612,12.982,4.103,20.1,4.219l0.901,0.007m-21.096,-4.268l-0.677,-0.29c-18.963,-8.34,-32.273,-27.24,-32.624,-49.28l-0.007,-0.895m292.098,505.213l-238.342,0m0,-168.847l238.342,0m1.295,-113.008l-238.341,0m-1.296,-168.848l239.637,0';

    this.leaderLine =
      'M15.124 13C25.747 52.52 46.39 73.454 77.051 75.804c45.992 3.523 204.257.312 244.445 0 40.188-.313 70.016 27.815 68.445 70.654-1.571 42.838-42.455 58.133-52.18 65.95-9.725 7.818-203.933-5.076-254.844 2.741-50.91 7.817-63.14 40.01-64.533 72.617-1.393 32.607 35.526 62.645 58.667 64.766 23.14 2.12 216.74-5.183 255.664 3.85 38.924 9.034 58.047 33.967 57.226 68.766-.822 34.8-36.086 64.158-71.704 66.73-35.618 2.57-204.326-9.342-241.186 0-36.861 9.34-61.53 31.278-63.184 63.171-1.655 31.894 11.74 55.689 72.123 70.938';

    // Inner contour line is reverse.....
    this.innerContourLine =
      'M81.706,65.342L81.959,65.344V65.136M322.945,226.619L321.59499999999997,226.629M84.54899999999998,226.629V226.84199999999998M83.64899999999997,334.49699999999996L84.54899999999998,334.50399999999996V334.715M321.65,496.2L320.29999999999995,496.21M83.25399999999996,496.21V496.423M82.35399999999996,604.078L83.25399999999996,604.0849999999999M83.25399999999996,631.001C38.18399999999996,631.001,1.6479999999999677,594.8489999999999,1.6479999999999677,550.254C1.6479999999999677,506.10400000000004,37.456999999999965,470.231,81.90399999999997,469.51800000000003H81.95899999999997V469.50800000000004H320.3V469.295C350.346,469.295,374.704,445.195,374.704,415.464C374.704,386.031,350.831,362.115,321.199,361.64L320.29900000000004,361.633V361.421H81.96V361.381C38.08899999999999,360.027,2.9439999999999884,324.41099999999994,2.9439999999999884,280.674C2.9439999999999884,236.52399999999997,38.75399999999999,200.65099999999998,83.201,199.938H83.255V199.927H321.597V199.715C351.643,199.715,376.001,175.614,376.001,145.88400000000001C376.001,116.45100000000002,352.128,92.53500000000003,322.49699999999996,92.06000000000002L321.597,92.05200000000002V91.84100000000002H81.959V91.83500000000002L81.271,91.83000000000003C37.294000000000004,91.14800000000002,1.7249999999999943,56.84400000000003,1.0109999999999957,14.306000000000026L1,13';

    this.pathAnimation = new Animated.Value(0);

    this.declareClassVariable();
    this.extractPathData();
    this.setTouchResponder();
    this.areaPath = this.calculateProgressArea(this.currentProgress);
    this.addAnimationListener();
    this.startAnimation();
  }

  declareClassVariable = () => {
    const {height, width} = Dimensions.get('window');
    this.outerContourProperty = new svgPathProperties(this.outerContourLine);
    this.leaderLineProperty = new svgPathProperties(this.leaderLine);
    this.innerContourProperty = new svgPathProperties(this.innerContourLine);
    this.data = Array.from({length: 84}, (v, index) => index);

    this.viewBoxWidth = 404;
    this.viewBoxHeight = 632;

    this.precisionMultiplier = 10;
    this.totalDays = this.precisionMultiplier * 84;
    this.currentProgress = this.precisionMultiplier * 83;

    this.width = width - 100;
    this.height = height - 100;

    this.outerContourLength = this.outerContourProperty.getTotalLength();
    this.leaderLineLength = this.leaderLineProperty.getTotalLength();
    this.innerContourLength = this.innerContourProperty.getTotalLength();
  };

  extractPathData = () => {
    this.pathSegmentArray = [];

    for (let i = 0; i <= this.totalDays; ++i) {
      let segment = (i / this.totalDays) * this.leaderLineLength;
      let reverseSegment =
        this.innerContourLength -
        (i / this.totalDays) * this.innerContourLength;

      let {x: lx, y: ly} = this.leaderLineProperty.getPropertiesAtLength(
        segment,
      );

      let {x: ix, y: iy} = this.innerContourProperty.getPropertiesAtLength(
        reverseSegment,
      );

      let interpolatedLX = this.interpolateX(lx);
      let interpolatedLY = this.interpolateY(ly);
      let interpolatedIX = this.interpolateX(ix);
      let interpolatedIY = this.interpolateY(iy);

      const point = {
        leader: {x: interpolatedLX, y: interpolatedLY},
        inner: {
          x: interpolatedIX,
          y: interpolatedIY,
        },
      };

      this.pathSegmentArray.push(point);
    }
  };

  calculateProgressArea = progress => {
    const forwardArray = [];
    const backwardArray = [];

    let point = this.pathSegmentArray[0];
    forwardArray.push(point.leader);
    backwardArray.push(point.inner);

    for (let i = 1; i <= progress; ++i) {
      point = this.pathSegmentArray[i];
      forwardArray.push(point.leader);
      backwardArray.push(point.inner);
    }

    backwardArray.reverse();
    const allPoint = [...forwardArray, ...backwardArray, forwardArray[0]];

    let area = d3
      .area()
      .x1(x => {
        return x.x;
      })
      .y1(y => {
        return y.y;
      })
      .y0(allPoint[0].y)
      .x0(allPoint[0].x);

    let lineGenerator = d3
      .line()
      .x(x => x.x)
      .y(y => y.y);
    this.generatedLine = lineGenerator(allPoint);
    return area(allPoint);
  };

  addAnimationListener = () => {
    this.interpolateString = d3.interpolateString(
      this.emptyArea,
      this.areaPath,
    );

    this.pathAnimation.addListener(({value}) => {
      const portion =
        value * this.leaderLineLength * (this.currentProgress / this.totalDays);

      const {x, y} = this.leaderLineProperty.getPointAtLength(portion);
      const interpolatedX = this.interpolateX(x);
      const interpolatedY = this.interpolateY(y);

      const progress = value * this.currentProgress;
      const path = this.calculateProgressArea(progress);

      if (!this._animatedViewBox) {
        return;
      }

      this._animatedPat.setNativeProps({
        d: path,
      });
      this._animatedViewBox.setNativeProps({
        style: {
          transform: [{translateX: interpolatedX}, {translateY: interpolatedY}],
        },
      });
    });
  };

  interpolateX = x => {
    return (x / this.viewBoxWidth) * this.width;
  };

  interpolateY = y => {
    return (y / this.viewBoxHeight) * this.height;
  };

  startAnimation = () => {
    Animated.timing(this.pathAnimation, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
    }).start();
  };

  // There was an issue in pan responder in Android. therefore I have to
  // find workaround for getting the scrolling position.
  // Issue link: https://github.com/facebook/react-native/issues/15290
  setTouchResponder = () => {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (event, gestureState) => true,
      onStartShouldSetPanResponderCapture: (event, gestureState) => true,
      onMoveShouldSetPanResponder: (event, gestureState) => false,
      onMoveShouldSetPanResponderCapture: (event, gestureState) => false,
      onPanResponderGrant: (event, gestureState) => false,
      onPanResponderStart: (evt, gestureState) => {
        this.locationXPageOffset =
          evt.nativeEvent.pageX - evt.nativeEvent.locationX;
        this.locationYPageOffset =
          evt.nativeEvent.pageY - evt.nativeEvent.locationY;
        const {locationX, locationY} = evt.nativeEvent;
        this.getTouchStartingPosition(locationX, locationY);
      },
      onPanResponderMove: (evt, gestureState) => {
        const locationX = evt.nativeEvent.pageX - this.locationXPageOffset;
        const locationY = evt.nativeEvent.pageY - this.locationYPageOffset;
        this.getTouchStartingPosition(locationX, locationY);
      },
      onPanResponderRelease: (event, gestureState) => {},
    });
  };

  getTouchStartingPosition = (locationX, locationY) => {
    for (let i = 0; i < this.totalDays - 1; ++i) {
      const {
        inner: {x: ix, y: iy},
      } = this.pathSegmentArray[i];
      const {
        leader: {x: ox, y: oy},
      } = this.pathSegmentArray[i + 1];

      const point = {x: locationX, y: locationY};
      const rect = {ix, iy, ox, oy};

      const isViewInRect = this.checkPointInRect(point, rect);

      if (isViewInRect) {
        if (i < 100) {
          console.log('wrong');
        }

        this.movePointertoLocation(point, i);
        return;
      }
    }
  };

  movePointertoLocation = (point, position) => {
    // user is scrolling outside his current date.
    if (position > this.currentProgress) {
      return;
    }

    const pointerStyle = {
      left: point.x - 25,
      top: point.y - 80,
    };

    this.userPointer.setNativeProps({
      style: [style.userPointerView, {...pointerStyle}],
    });

    const path = this.calculateProgressArea(position);
    this._animatedPat.setNativeProps({
      d: path,
    });
  };

  checkPointInRect(point, rect) {
    const {x, y} = point;
    const {ix, iy, ox, oy} = rect;
    var isPointInRect = true;

    // checking if point.x is in range of inner and outer x
    if (!((x <= ix && x >= ox) || (x <= ox && x >= ix))) {
      isPointInRect = false;
    }

    if (!((y <= iy && y >= oy) || (y <= oy && y >= iy))) {
      isPointInRect = false;
    }

    return isPointInRect;
  }

  render() {
    return (
      <View style={[style.containerStyle]}>
        <View style={{width: this.width, height: this.height}}>
          <View
            style={[style.animatedViewStyle]}
            ref={ref => (this._animatedViewBox = ref)}
          />
          <Svg
            style={[style.svgBoxStyle]}
            viewBox="0 0 404 632"
            preserveAspectRatio="none">
            <G fill="none" fillRule="evenodd" transform="translate(0 0)">
              {/* <Path d={this.outerContourLine} stroke="red" strokeWidth={2} /> */}
              <Path
                d={this.leaderLine}
                stroke="green"
                strokeWidth={2}
                strokeDasharray="3,5"
              />
              <Path d={this.innerContourLine} stroke="blue" />
            </G>
          </Svg>

          <Svg
            style={[style.svgBoxStyle]}
            viewBox={'0 0 ' + this.width + ' ' + this.height}
            preserveAspectRatio="none">
            <Defs>
              <LinearGradient
                x1="105.109%"
                y1="45.482%"
                x2="-28.254%"
                y2="52.592%"
                id="prefix__e">
                <Stop stopColor="#73D2E3" offset="0%" />
                <Stop stopColor="#48AFE1" offset="11.878%" />
                <Stop stopColor="#71AAE5" offset="100%" />
              </LinearGradient>
            </Defs>
            <Path
              {...this.panResponder.panHandlers}
              ref={ref => (this._animatedPat = ref)}
              stroke="black"
              fill="url(#prefix__e)"
              fillRule="evenodd"
            />
            {/* <AnimatedPath d={path} fill="red" /> */}
          </Svg>

          <View
            style={[style.userPointerView]}
            ref={ref => (this.userPointer = ref)}>
            <BadgeComponent />
          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#D9E5ED',
    alignItems: 'center',
    alignContent: 'center',
    marginVertical: 50,
    marginHorizontal: 50,
  },
  animatedViewStyle: {
    width: 5,
    height: 5,
    backgroundColor: 'red',
  },

  userPointerView: {
    height: 91,
    width: 55,
    position: 'absolute',
  },

  svgBoxStyle: {
    ...StyleSheet.absoluteFill,
  },
});
