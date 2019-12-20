import React from 'react';
import Svg, {
  Defs,
  Path,
  RadialGradient,
  Stop,
  G,
  Ellipse,
  Use,
  Mask,
  Circle,
} from 'react-native-svg';

import React, {Component} from 'react';
import {Text, View} from 'react-native';

const BadgeComponent = props => (
  <Svg width={55} height={91} {...props}>
    <Defs>
      <Path id="prefix__c" d="M30 56h1v22h-1z" />
      <Path
        d="M33 1.443l21.414 12.364a5 5 0 012.5 4.33v24.726a5 5 0 01-2.5 4.33L33 59.557a5 5 0 01-5 0L6.586 47.193a5 5 0 01-2.5-4.33V18.137a5 5 0 012.5-4.33L28 1.443a5 5 0 015 0z"
        id="prefix__d"
      />
      <Path
        d="M0 0h10l.03 9.922a1 1 0 01-1.621.787l-2.79-2.214a1 1 0 00-1.25.005l-2.71 2.19A1 1 0 01.03 9.915L0 0z"
        id="prefix__g"
      />
      <Path
        d="M5.294 4.884l-2.905.425-.051.01a.455.455 0 00-.2.765l2.1 2.047-.495 2.891-.006.05a.455.455 0 00.666.43L7 10.135 9.597 11.5l.046.021a.455.455 0 00.614-.5L9.76 8.131l2.101-2.047.036-.038a.455.455 0 00-.287-.737l-2.905-.425-1.298-2.63a.455.455 0 00-.816 0l-1.298 2.63z"
        id="prefix__j"
      />
      <RadialGradient
        cx="50%"
        cy="0%"
        fx="50%"
        fy="0%"
        r="100%"
        gradientTransform="matrix(0 1 -.28571 0 .5 -.5)"
        id="prefix__a">
        <Stop stopColor="#FFF" offset="0%" />
        <Stop stopColor="#EFF5F9" offset="100%" />
      </RadialGradient>
      <RadialGradient
        cx="50%"
        cy="50%"
        fx="50%"
        fy="50%"
        r="47.364%"
        gradientTransform="matrix(1 0 0 1.00355 0 -.002)"
        id="prefix__e">
        <Stop stopColor="#7C7C7C" offset="0%" />
        <Stop stopColor="#FFF" stopOpacity={0} offset="100%" />
      </RadialGradient>
    </Defs>
    <G transform="translate(-3)" fill="none" fillRule="evenodd">
      <Ellipse fill="url(#prefix__a)" cx={30.5} cy={79} rx={3.5} ry={1} />
      <Use fill="#000" filter="url(#prefix__b)" xlinkHref="#prefix__c" />
      <Use fill="#FFF" xlinkHref="#prefix__c" />
      <Mask id="prefix__f" fill="#fff">
        <Use xlinkHref="#prefix__d" />
      </Mask>
      <Use stroke="#F4F7FB" fill="#D9E5ED" xlinkHref="#prefix__d" />
      <Path
        d="M34.994 33.326l23.04 11.235A30.57 30.57 0 0061 31.378H35.433a4.514 4.514 0 00-.439-1.948l23.04-11.236a30.421 30.421 0 00-8.33-10.567L33.764 27.87a4.382 4.382 0 00-1.777-.867l5.69-25.247a29.866 29.866 0 00-13.353 0l5.69 25.247c-.65.149-1.257.445-1.777.867L12.295 7.627a30.421 30.421 0 00-8.33 10.567l23.04 11.236a4.514 4.514 0 00-.438 1.948H1A30.57 30.57 0 003.965 44.56l23.04-11.235a4.5 4.5 0 001.231 1.56L12.295 55.13A29.723 29.723 0 0024.323 61l5.69-25.247c.65.151 1.324.151 1.973 0L37.676 61a29.723 29.723 0 0012.029-5.871L33.763 34.886a4.5 4.5 0 001.231-1.56z"
        fillOpacity={0.25}
        fill="url(#prefix__e)"
        fillRule="nonzero"
        mask="url(#prefix__f)"
      />
      <G transform="translate(26 34)">
        <Mask id="prefix__h" fill="#fff">
          <Use xlinkHref="#prefix__g" />
        </Mask>
        <Use fill="#FFF" xlinkHref="#prefix__g" />
        <Path
          fill="#DBE2E6"
          mask="url(#prefix__h)"
          d="M7 1h1v10H7zM2 1h1v10H2z"
        />
      </G>
      <Circle fill="#D1D8DD" cx={31} cy={26} r={10} />
      <G fillRule="nonzero">
        <G transform="rotate(-33 51.071 -24.234)">
          <Use fill="#000" filter="url(#prefix__i)" xlinkHref="#prefix__j" />
          <Use fill="#FFF" xlinkHref="#prefix__j" />
        </G>
      </G>
    </G>
  </Svg>
);

export default SvgComponent;
