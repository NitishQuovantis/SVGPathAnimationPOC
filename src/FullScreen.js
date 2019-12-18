import React from 'react';
import Svg, {
  Defs,
  Path,
  RadialGradient,
  Stop,
  LinearGradient,
  Circle,
  G,
  Use,
  Ellipse,
  Mask,
  Text,
  TSpan,
} from 'react-native-svg';

const FullScreen = props => (
  <Svg {...props} preserveAspectRatio="none" viewBox="0 0 375 618">
    <Defs>
      <Path
        d="M0 0h10l.03 9.922a1 1 0 01-1.621.787l-2.79-2.214a1 1 0 00-1.25.005l-2.71 2.19A1 1 0 01.03 9.915L0 0z"
        id="prefix__m"
      />
      <Path
        d="M63.5 380v.167c-23.196 0-42 18.953-42 42.333 0 23.146 18.43 41.954 41.305 42.328l.695.005V486c-34.794 0-63-28.43-63-63.5 0-34.72 27.645-62.93 61.958-63.491l.042-.001V359h184v-.167c23.196 0 42-18.953 42-42.333 0-23.146-18.43-41.954-41.305-42.328l-.695-.005V274h-184v-.031c-33.868-1.065-61-29.073-61-63.469 0-34.72 27.645-62.93 61.958-63.491l.042-.001V147h184v-.167c23.196 0 42-18.953 42-42.333 0-23.146-18.43-41.954-41.305-42.328l-.695-.005V62h-185v-.004l-.53-.004C28.018 61.456.56 34.478.007 1.026L0 0h21c0 22.487 18.408 40.798 41.305 41.162l.195.002V41h185c34.794 0 63 28.43 63 63.5 0 34.72-27.645 62.93-61.958 63.491L247.5 168h-183v.167c-23.196 0-42 18.953-42 42.333 0 23.146 18.43 41.954 41.305 42.328l.695.005V253h182c34.794 0 63 28.43 63 63.5 0 34.72-27.645 62.93-61.958 63.491L246.5 380h-183z"
        id="prefix__a"
      />
      <Path id="prefix__C" d="M268 63h1v22h-1z" />
      <Path id="prefix__r" d="M30 61h1v22h-1z" />
      <Path
        d="M33 1.443l21.414 12.364a5 5 0 012.5 4.33v24.726a5 5 0 01-2.5 4.33L33 59.557a5 5 0 01-5 0L6.586 47.193a5 5 0 01-2.5-4.33V18.137a5 5 0 012.5-4.33L28 1.443a5 5 0 015 0z"
        id="prefix__j"
      />
      <Path id="prefix__t" d="M30 61h1v22h-1z" />
      <Path id="prefix__i" d="M30 56h1v22h-1z" />
      <Path id="prefix__v" d="M30 61h1v22h-1z" />
      <Path
        d="M5.294 4.884l-2.905.425-.051.01a.455.455 0 00-.2.765l2.1 2.047-.495 2.891-.006.05a.455.455 0 00.666.43L7 10.135 9.597 11.5l.046.021a.455.455 0 00.614-.5L9.76 8.131l2.101-2.047.036-.038a.455.455 0 00-.287-.737l-2.905-.425-1.298-2.63a.455.455 0 00-.816 0l-1.298 2.63z"
        id="prefix__p"
      />
      <Path
        d="M275.425 47.563l-10.05 18.618a41.543 41.543 0 00-17.18-4.009l-.695-.005V62h-185v-.004l-.53-.004C28.018 61.456.56 34.478.007 1.026L0 0h21c0 22.487 18.408 40.798 41.305 41.162l.195.002V41h185c10.028 0 19.51 2.362 27.925 6.563z"
        id="prefix__d"
      />
      <Path id="prefix__y" d="M11 14h1v19h-1z" />
      <RadialGradient
        cx="50%"
        cy="0%"
        fx="50%"
        fy="0%"
        r="148.397%"
        gradientTransform="matrix(0 1 -.14286 0 .5 -.5)"
        id="prefix__w">
        <Stop stopColor="#2CAA42" offset="0%" />
        <Stop stopColor="#43D35C" offset="100%" />
      </RadialGradient>
      <RadialGradient
        cx="50%"
        cy="50%"
        fx="50%"
        fy="50%"
        r="47.364%"
        gradientTransform="matrix(1 0 0 1.00355 0 -.002)"
        id="prefix__k">
        <Stop stopColor="#7C7C7C" offset="0%" />
        <Stop stopColor="#FFF" stopOpacity={0} offset="100%" />
      </RadialGradient>
      <RadialGradient
        cx="50%"
        cy="0%"
        fx="50%"
        fy="0%"
        r="100%"
        gradientTransform="matrix(0 1 -.28571 0 .5 -.5)"
        id="prefix__g">
        <Stop stopColor="#FFF" offset="0%" />
        <Stop stopColor="#EFF5F9" offset="100%" />
      </RadialGradient>
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
      <Circle id="prefix__A" cx={11} cy={13} r={5} />
    </Defs>
    <G transform="translate(32 30)" fill="none" fillRule="evenodd">
      <G transform="translate(.5 31)">
        <Use fill="red" filter="url(#prefix__b)" xlinkHref="#prefix__a" />
        <Use fill="#FFF" xlinkHref="#prefix__a" />

        {/* untracked path color */}
        <Use fill="white" filter="url(#prefix__c)" xlinkHref="#prefix__a" />
        <Use stroke="#F4F7FB" strokeWidth={2} xlinkHref="#prefix__a" />
      </G>
      <G transform="translate(.5 31)">
        <Use fill="url(#prefix__e)" xlinkHref="#prefix__d" />
        {/* tracked path */}
        <Use fill="#efefef" />
      </G>
      <G transform="translate(223 107)">
        <Ellipse fill="url(#prefix__g)" cx={30.5} cy={79} rx={3.5} ry={1} />
        <Use fill="#000" filter="url(#prefix__h)" xlinkHref="#prefix__i" />
        <Use fill="#FFF" xlinkHref="#prefix__i" />
        <Mask id="prefix__l" fill="#fff">
          <Use xlinkHref="#prefix__j" />
        </Mask>
        <Use stroke="#F4F7FB" fill="#D9E5ED" xlinkHref="#prefix__j" />
        <Path
          d="M34.994 33.326l23.04 11.235A30.57 30.57 0 0061 31.378H35.433a4.514 4.514 0 00-.439-1.948l23.04-11.236a30.421 30.421 0 00-8.33-10.567L33.764 27.87a4.382 4.382 0 00-1.777-.867l5.69-25.247a29.866 29.866 0 00-13.353 0l5.69 25.247c-.65.149-1.257.445-1.777.867L12.295 7.627a30.421 30.421 0 00-8.33 10.567l23.04 11.236a4.514 4.514 0 00-.438 1.948H1A30.57 30.57 0 003.965 44.56l23.04-11.235a4.5 4.5 0 001.231 1.56L12.295 55.13A29.723 29.723 0 0024.323 61l5.69-25.247c.65.151 1.324.151 1.973 0L37.676 61a29.723 29.723 0 0012.029-5.871L33.763 34.886a4.5 4.5 0 001.231-1.56z"
          fillOpacity={0.25}
          fill="url(#prefix__k)"
          fillRule="nonzero"
          mask="url(#prefix__l)"
        />
        <G transform="translate(26 34)">
          <Mask id="prefix__n" fill="#fff">
            <Use xlinkHref="#prefix__m" />
          </Mask>
          <Use fill="#FFF" xlinkHref="#prefix__m" />
          <Path
            fill="#DBE2E6"
            mask="url(#prefix__n)"
            d="M7 1h1v10H7zM2 1h1v10H2z"
          />
        </G>
        <Circle fill="#D1D8DD" cx={31} cy={26} r={10} />
        <G fillRule="nonzero">
          <G transform="rotate(-33 51.071 -24.234)">
            <Use fill="#000" filter="url(#prefix__o)" xlinkHref="#prefix__p" />
            {/* <Use fill="#FFF" xlinkHref="#prefix__p" /> */}
            <Use fill="red" xlinkHref="#prefix__p" />
          </G>
        </G>
      </G>
      <G transform="translate(32 210)">
        <Ellipse fill="url(#prefix__g)" cx={30.5} cy={84} rx={3.5} ry={1} />
        <Use fill="#000" filter="url(#prefix__q)" xlinkHref="#prefix__r" />
        <Use fill="#FFF" xlinkHref="#prefix__r" />
        <Path
          d="M33 1.443l21.414 12.364a5 5 0 012.5 4.33v24.726a5 5 0 01-2.5 4.33L33 59.557a5 5 0 01-5 0L6.586 47.193a5 5 0 01-2.5-4.33V18.137a5 5 0 012.5-4.33L28 1.443a5 5 0 015 0z"
          stroke="#FFF"
          fill="#D9E5ED"
        />
      </G>
      <Text
        transform="translate(134 130)"
        fill="#8191A2"
        fontSize={12}
        fontWeight="bold">
        <TSpan x={0} y={12}>
          {'FIRST MONTH'}
        </TSpan>
      </Text>

      <G transform="translate(213 314)" preserveAspectRatio="xMinYMin meet">
        <Ellipse fill="url(#prefix__g)" cx={30.5} cy={84} rx={3.5} ry={1} />
        <Use fill="#000" filter="url(#prefix__s)" xlinkHref="#prefix__t" />
        <Use fill="#FFF" xlinkHref="#prefix__t" />
        <Path
          d="M33 1.443l21.414 12.364a5 5 0 012.5 4.33v24.726a5 5 0 01-2.5 4.33L33 59.557a5 5 0 01-5 0L6.586 47.193a5 5 0 01-2.5-4.33V18.137a5 5 0 012.5-4.33L28 1.443a5 5 0 015 0z"
          stroke="#FFF"
          //   fill="#D9E5ED"
          fill="black"
        />
      </G>

      <G fontSize={12}>
        <Text fontWeight="bold" fill="#8191A2" transform="translate(99 214)">
          <TSpan x={0} y={12}>
            {'SECOND MONTH'}
          </TSpan>
        </Text>
        <Text
          // fontFamily="Lato-Semibold, Lato"
          fontWeight={500}
          fill="#A1AAB3"
          transform="translate(99 214)">
          <TSpan x={0} y={30}>
            {'Waist: 78 kg'}
          </TSpan>
        </Text>
        <Text
          // fontFamily="Lato-Regular, Lato"
          fill="#A1AAB3"
          transform="translate(99 214)">
          <TSpan x={0} y={46}>
            {'08/18/2019'}
          </TSpan>
        </Text>
      </G>
      <G
        opacity={0.532}
        transform="translate(28 420)"
        preserveAspectRatio="xMinYMin meet">
        <Ellipse fill="url(#prefix__g)" cx={30.5} cy={84} rx={3.5} ry={1} />
        <Use fill="#000" filter="url(#prefix__u)" xlinkHref="#prefix__v" />
        <Use fill="#FFF" xlinkHref="#prefix__v" />
        <Path
          preserveAspectRatio="xMinYMin"
          d="M33 1.443l21.414 12.364a5 5 0 012.5 4.33v24.726a5 5 0 01-2.5 4.33L33 59.557a5 5 0 01-5 0L6.586 47.193a5 5 0 01-2.5-4.33V18.137a5 5 0 012.5-4.33L28 1.443a5 5 0 015 0z"
          stroke="#FFF"
          //   fill="#D9E5ED"
          fill="blue"
        />
      </G>
      <G fontSize={12}>
        <Text fontWeight="bold" fill="#8191A2" transform="translate(95 426)">
          <TSpan x={0} y={12}>
            {'TARGET WEIGHT'}
          </TSpan>
        </Text>
        <Text
          // // fontFamily="Lato-Semibold, Lato"
          fontWeight={500}
          fill="#A1AAB3"
          transform="translate(95 426)">
          <TSpan x={0} y={28}>
            {'Weight: 67 kg'}
          </TSpan>
        </Text>
        <Text
          // fontFamily="Lato-Regular, Lato"
          fill="#A1AAB3"
          transform="translate(95 426)">
          <TSpan x={0} y={44}>
            {'08/18/2019'}
          </TSpan>
        </Text>
      </G>
      <Text
        // fontFamily="Lato-Semibold, Lato"
        fontSize={12}
        fontWeight={500}
        fill="#024481">
        <TSpan x={30} y={12}>
          {'Start of program'}
        </TSpan>
      </Text>
      <Text fontSize={12} fill="#8191A2">
        <TSpan x={30} y={27}>
          {'08/01/2019'}
        </TSpan>
      </Text>
      <G fontSize={12}>
        <Text fontWeight="bold" fill="#8191A2" transform="translate(70 324)">
          <TSpan x={0} y={12}>
            {'THIRD MONTH'}
          </TSpan>
        </Text>
        <Text
          // fontFamily="Lato-Semibold, Lato"
          fontWeight={500}
          fill="#A1AAB3"
          transform="translate(70 324)">
          <TSpan x={0} y={30}>
            {'2000 ml/day for 1 month'}
          </TSpan>
        </Text>
        <Text
          // fontFamily="Lato-Regular, Lato"
          fill="#A1AAB3"
          transform="translate(70 324)">
          <TSpan x={0} y={46}>
            {'08/12/2019'}
          </TSpan>
        </Text>
      </G>
      <Path
        d="M11.095 34c8.149 30.205 23.982 46.205 47.5 48 35.278 2.693 156.675.239 187.5 0 30.826-.239 53.706 21.259 52.5 54-1.205 32.741-32.564 44.43-40.024 50.405-7.459 5.975-156.425-3.88-195.476 2.095-39.05 5.975-48.431 30.578-49.5 55.5-1.068 24.922 27.25 47.88 45 49.5 17.75 1.62 166.25-3.961 196.106 2.943 29.856 6.904 44.525 25.96 43.894 52.557-.63 26.597-27.68 49.035-55 51-27.32 1.965-156.726-7.14-185 0-28.273 7.14-45.485 34.902-47.5 58.707-1.343 15.87 11.49 31.744 38.5 47.623"
        stroke="#D9E5ED"
        strokeDasharray="3,9"
      />
      <Ellipse
        cx={3.5}
        cy={0.5}
        rx={3.5}
        ry={1}
        transform="translate(265 85)"
        fill="url(#prefix__w)"
      />
      <Ellipse fill="url(#prefix__g)" cx={11.5} cy={34} rx={3.5} ry={1} />
      <Use fill="#000" filter="url(#prefix__x)" xlinkHref="#prefix__y" />
      <Use fill="#FFF" xlinkHref="#prefix__y" />
      <Use fill="#000" filter="url(#prefix__z)" xlinkHref="#prefix__A" />
      <Use stroke="#FFF" fill="#FFC36D" xlinkHref="#prefix__A" />
      <Text fontSize={12} fill="#8191A2">
        <TSpan x={174} y={53}>
          {'Weight: 68kg'}
        </TSpan>
      </Text>
      <G>
        <Use fill="#000" filter="url(#prefix__B)" xlinkHref="#prefix__C" />
        <Use fill="#43D35C" xlinkHref="#prefix__C" />
      </G>
      <G>
        <Path
          d="M271 34.443l8.423 4.864a5 5 0 012.5 4.33v9.726a5 5 0 01-2.5 4.33L271 62.557a5 5 0 01-5 0l-8.423-4.864a5 5 0 01-2.5-4.33v-9.726a5 5 0 012.5-4.33L266 34.443a5 5 0 015 0z"
          stroke="#F4F7FB"
          fill="#43D35C"
        />
        <Text
          // fontFamily="Lato-Semibold, Lato"
          fontSize={10}
          fontWeight={500}
          fill="#FFF"
          transform="translate(253 33)">
          <TSpan x={5} y={19}>
            {'-3kg'}
          </TSpan>
        </Text>
      </G>
    </G>
  </Svg>
);

export default FullScreen;
