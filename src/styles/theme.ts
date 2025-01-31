import { css, keyframes } from 'styled-components'
import { Theme } from 'styled-system'

// Need to set value since styled-system no longer provides this in v5+
const remify = (n: number) => `${n / 10}rem`
const pixify = (n: number) => `${n}px`

// ===== This section assigns properties to an array, which is terrible,
// but it's how it was initially built and lots of spots on the
// website utilize that so it's too much work to change

const spaceValues = [0, 4, 8, 16, 32, 64, 128, 256, 512] as const
const spaceArray = spaceValues.map(remify) as string[]

const spaceObject = {
  /** @deprecated Use {0} instead */
  none: spaceArray[0],

  /** @deprecated Use {1} instead */
  quarter: spaceArray[1],

  /** @deprecated Use {2} instead */
  half: spaceArray[2],

  /** @deprecated Use {3} instead */
  regular: spaceArray[3],

  /** @deprecated Use {4} instead */
  big: spaceArray[4],

  /** @deprecated Use {5} instead */
  bigger: spaceArray[5],

  /** @deprecated Use {6} instead */
  biggest: spaceArray[6],
} as const

const space = Object.assign([...spaceArray], spaceObject) as typeof spaceArray &
  typeof spaceObject

// ========

const sizes = {
  containers: {
    sm: '580px',
    md: '880px',
    lg: '1100px',
    xl: '1280px',
    xxl: '1400px',
  },
  text: {
    body: '400px',
    title: '500px',
  },
  full: '100%',
  half: '50%',
  quarter: '25%',
  third: '33%',
}

// COLORS

const colors = {
  white: '#fff',
  whiteDark: '#f7f7f7',
  greyLightest: '#e7e7e7',
  greyLighter: '#EFEFEF',
  greyLight: '#d7d7d7',
  grey: '#B2B2B2',
  greyDark: '#999999',
  greyDarker: '#666666',
  blackLighter: '#333444',
  blackLight: '#222328',
  black: '#000000',

  greenLightest: '#f3f5e6',
  greenLighter: '#D3DCA3',
  greenLight: '#A5C20F',
  green: '#697e00',
  greenDark: '#6B8000',

  mintGreenLightest: '#EEF7EE',
  // greenLighter is our primary green
  mintGreenLighter: '#CDE7CB',
  mintGreenLight: '#ABD7A8',
  mintGreen: '#8AC785',
  mintGreenDark: '#3D7A38',

  redLighter: '#F9BEAE',
  redLight: '#E37054',
  red: '#F04A22',
  redDark: '#CC3E1C',
  redNew: '#d82a29',

  blueDark: '#003680',
  // blue is our primary blue
  blue: '#0052C3',
  blueLight: '#80B5FF',
  blueLighter: '#B4D4FD',
  blueLightest: '#E6F0FF',

  purple: '#B32B85',
  purpleLight: '#E6E4F4',
  purpleDark: '#46283F',

  pinkLightest: '#FDE7EC',
  // pinkLighter is our primary pink
  pinkLighter: '#F9AEBD',
  pinkLight: '#F6889E',
  pink: '#EF2951',
  pinkDark: '#77091F',
  orangeLighter: '#ff9900',
  orange: '#C4470E',
  clear: 'transparent',
  focus: '#406198',
  overlay: 'rgba(0,0,0,.6)',
  overlayDark: 'rgba(0,0,0,.8)',
  success: '#859f00',
  successLight: '#e4eeaa',
  warning: '#d49e03',
  warningLight: '#f7eac9',
  alert: '#e5c282',
  error: '#f04822',
  errorLight: '#ffd1c7',
  facebook: '#3b5998',
  primary1: [
    '#e6f0ff',
    '#B4D4FD',
    '#80B5FF',
    '#4D98FF',
    '#1A7AFF',
    '#0061E6',
    '#0052C3',
    '#003680',
    '#00204D',
    '#000B1A',
  ],
  primary2: [
    '#F58F00',
    '#FF9600',
    '#FFA130',
    '#FFAB4E',
    '#FFB666',
    '#FFCC94',
    '#FFD6A9',
    '#FFEAD3',
    '#FFF3E6',
  ],
  greens: [
    '#EEF7EE',
    '#CDE7CB',
    '#ABD7A8',
    '#8AC785',
    '#68B762',
    '#4F9D48',
    '#3D7A38',
    '#2C5728',
    '#1A3418',
    '#091108',
  ],
  reds: [
    '#E70076',
    '#EB0079',
    '#FF0082',
    '#FF4D9B',
    '#FF7EB4',
    '#FF94C1',
    '#FFA9CE',
    '#FFBFDA',
    '#FFE5F1',
    '#B20101',
  ],

  pinks: [
    '#FDE7EC',
    '#F9AEBD',
    '#F6889E',
    '#F35978',
    '#EF2951',
    '#D61037',
    '#A60C2B',
    '#77091F',
    '#470512',
    '#180206',
  ],

  yellows: [
    '#F5D800',
    '#FADD00',
    '#FFE417',
    '#FFEA5B',
    '#FEED72',
    '#FFEF88',
    '#FFF29E',
    '#FFF7C9',
    '#FFFADD',
  ],

  purples: [
    '#370090',
    '#4700BC',
    '#6100FF',
    '#6D14FF',
    '#853DFC',
    '#A26BFA',
    '#C099FF',
    '#C39EFF',
    '#EFE5FF',
  ],

  greys: [
    '#101428',
    '#222328',
    '#38393D',
    '#4E4F53',
    '#919191',
    '#B2B2B4',
    '#D3D3D4',
    '#EBEBEB',
    '#F7F7F7',
  ],

  'primary-50': '#F7F6F9',
  'primary-100': '#E6E4EE',
  'primary-200': '#CDC9DD',
  'primary-300': '#B4AFCD',
  'primary-400': '#9B94BC',
  'primary-500': '#453E63',
  'primary-600': '#3F395B',
  'primary-700': '#37314E',
  'primary-800': '#2E2942',
  'primary-900': '#201C2D',

  'secondary-50': '#FFE6EE',
  'secondary-100': '#FFABCA',
  'secondary-200': '#FF82B4',
  'secondary-300': '#F7579C',
  'secondary-400': '#EB2D85',
  'secondary-500': '#DF0772',
  'secondary-600': '#B80062',
  'secondary-700': '#910052',
  'secondary-800': '#6B0040',
  'secondary-900': '#45002C',

  'neutral-50': '#F9FAFB',
  'neutral-100': '#F3F4F6',
  'neutral-200': '#E5E7EB',
  'neutral-300': '#D1D5DB',
  'neutral-400': '#9CA3AF',
  'neutral-500': '#6B7280',
  'neutral-600': '#4B5563',
  'neutral-700': '#374151',
  'neutral-800': '#1F2937',
  'neutral-900': '#111827',

  'success-50': '#F0FDF4',
  'success-100': '#DCFCE7',
  'success-200': '#BBF7D0',
  'success-300': '#86EFAC',
  'success-400': '#4ADE80',
  'success-500': '#22C55E',
  'success-600': '#16A34A',
  'success-700': '#15803D',
  'success-800': '#166534',
  'success-900': '#14532D',

  'destructive-50': '#FEF2F2',
  'destructive-100': '#FEE2E2',
  'destructive-200': '#FECACA',
  'destructive-300': '#FCA5A5',
  'destructive-400': '#F87171',
  'destructive-500': '#EF4444',
  'destructive-600': '#DC2626',
  'destructive-700': '#B91C1C',
  'destructive-800': '#991B1B',
  'destructive-900': '#7F1D1D',

  'warning-50': '#FFFBEB',
  'warning-100': '#FEF3C7',
  'warning-200': '#FDE68A',
  'warning-300': '#FCD34D',
  'warning-400': '#FBBF24',
  'warning-500': '#F59E0B',
  'warning-600': '#D97706',
  'warning-700': '#B45309',
  'warning-800': '#92400E',
  'warning-900': '#78350F',

  'supporting-aqua': '#0BFFE6',
  'supporting-grapefruit': '#FE546F',
  'supporting-sunflower': '#FFD080',
  'supporting-strongCyan': '#36BFC6',
  'supporting-orangePeel': '#FF9D00',
  'supporting-haciendaBlue': '#00819E',

  'shades-white': '#FFFFFF',
  'shades-black': '#000000',
}

// TYPOGRAPHY

const fonts = {
  title: `'montserrat', sans-serif`,
  body: `'montserrat', sans-serif`,
  trustpilot: '"Segoe UI","Helvetica Neue","Helvetica","Arial","sans-serif"',
}

const letterSpacings = {
  normal: 0,
  wide: 2,
}

const lineHeights = {
  normal: 'normal',
  none: 1,
  title: 1.2,
  body: 1.7,
  tall: 2,
  long: 3,
}

const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 96].map(remify)

const fontWeights = {
  extraLight: 200,
  light: 300,
  regular: 400,
  semi: 600,
  bold: 700,
}

const breakpoints = [600, 900, 1200].map(pixify)
const bordersArray = [
  'none',
  `1px solid ${colors.greyDark}`,
  `1px solid ${colors.greyLight}`,
  `1px solid ${colors.white}`,
  `1px solid ${colors.red}`,
  `1px solid ${colors.blackLighter}`,
] as const

const bordersObject = {
  none: bordersArray[0],
  light: bordersArray[2],
  dark: bordersArray[5],
  input: bordersArray[2],
  error: bordersArray[4],
  blackLighter: bordersArray[5],
} as const

const borders = Object.assign(
  bordersArray,
  bordersObject
) as typeof bordersArray & typeof bordersObject

// Example for shadows
const shadows = [`0.5rem 0.5rem 1rem ${colors.black}44`]

const radii = {
  none: 0,
  small: '1px',
  large: '2px',
  larger: '6px',
  rounded: '999px',
  circle: '50%',
}

const textStyles: Theme['textStyles'] = {
  caps: {
    textTransform: 'uppercase',
  },
  navHeading: {
    textTransform: 'uppercase',
    fontWeight: 600,
    letterSpacing: '2px',
  },
}

const messageStyles = {
  error: {
    background: colors.errorLight,
    color: colors.error,
  },
  success: {
    backgroundColor: colors.successLight,
    color: colors.success,
  },
  warning: {
    backgroundColor: colors.warningLight,
    color: colors.warning,
  },
  info: {
    backgroundColor: colors.blueLighter,
    border: `1px solid ${colors.white}`,
    color: colors.blue,
  },
  whiteOnDark: {
    backgroundColor: 'transparent',
    border: `1px solid ${colors.white}`,
    color: colors.white,
  },
}

// DEPRECATED
const headingStyles = [
  {
    fontSize: '4.5rem',
    lineHeight: lineHeights.title,
    fontWeight: fontWeights.light,
  },
  {
    fontSize: '3.2rem',
    lineHeight: lineHeights.title,
    fontWeight: fontWeights.light,
  },
  {
    fontSize: '2.4rem',
    lineHeight: lineHeights.title,
    fontWeight: fontWeights.light,
  },
  {
    fontSize: '1.8rem',
    lineHeight: lineHeights.title,
    fontWeight: fontWeights.regular,
  },
  {
    fontSize: '1.6rem',
    lineHeight: lineHeights.title,
    fontWeight: fontWeights.semi,
  },
  {
    fontSize: '1.4rem',
    lineHeight: lineHeights.title,
    fontWeight: fontWeights.semi,
    letterSpacing: letterSpacings.wide,
  },
]

const textVariants = {
  // nina = three sizes larger than h1
  nina: {
    fontSize: '9.2rem',
    fontWeight: fontWeights.regular,
  },
  ninaBold: {
    fontSize: '9.2rem',
    fontWeight: fontWeights.regular,
  },
  // yotta = two sizes larger than h1
  yotta: {
    fontSize: '7.4rem',
    fontWeight: fontWeights.regular,
  },
  yottaBold: {
    fontSize: '7.4rem',
    fontWeight: fontWeights.bold,
  },
  // zetta = one size larger than h1
  zetta: {
    fontSize: '5.6rem',
    fontWeight: fontWeights.regular,
  },
  zettaBold: {
    fontSize: '5.6rem',
    fontWeight: fontWeights.bold,
  },
  // exa = h1
  exa: {
    fontSize: '4.8rem',
    fontWeight: fontWeights.regular,
  },
  exaBold: {
    fontSize: '4.8rem',
    fontWeight: fontWeights.bold,
  },
  // peta = h2
  peta: {
    fontSize: '3.2rem',
    fontWeight: fontWeights.regular,
  },
  petaBold: {
    fontSize: '3.2rem',
    fontWeight: fontWeights.bold,
  },
  // tera = three sizes larger than body
  tera: {
    fontSize: '2.4rem',
    fontWeight: fontWeights.regular,
  },
  teraBold: {
    fontSize: '2.4rem',
    fontWeight: fontWeights.bold,
  },
  // giga = two sizes larger than body
  giga: {
    fontSize: '1.8rem',
    fontWeight: fontWeights.regular,
  },
  gigaBold: {
    fontSize: '1.8rem',
    fontWeight: fontWeights.bold,
  },
  // mega = one size larger than body
  mega: {
    fontSize: '1.6rem',
    fontWeight: fontWeights.regular,
  },
  megaBold: {
    fontSize: '1.6rem',
    fontWeight: fontWeights.bold,
  },
  // kilo = body size but used for subheaders & is uppercase
  kilo: {
    fontSize: '1.4rem',
    fontWeight: fontWeights.regular,
  },
  kiloBold: {
    fontSize: '1.4rem',
    fontWeight: fontWeights.bold,
  },
  // pound = body
  pound: {
    fontSize: '1.4rem',
    fontWeight: fontWeights.regular,
  },
  poundBold: {
    fontSize: '1.4rem',
    fontWeight: fontWeights.bold,
  },
  // milli = one size smaller than body
  milli: {
    fontSize: '1.2rem',
    fontWeight: fontWeights.regular,
  },
  milliBold: {
    fontSize: '1.2rem',
    fontWeight: fontWeights.semi,
  },
  // micro = two sizes smaller than body
  micro: {
    fontSize: '1.0rem',
    fontWeight: fontWeights.regular,
  },
  microBold: {
    fontSize: '1.0rem',
    fontWeight: fontWeights.semi,
  },
  // nano = three sizes smaller than body
  nano: {
    fontSize: '0.8rem',
    fontWeight: fontWeights.regular,
  },
  nanoBold: {
    fontSize: '0.8rem',
    fontWeight: fontWeights.semi,
  },
}

const zIndices = {
  modal: 9999,
  coverPage: 100,
  aboveNavbar: 95,
  navbar: 90,
  belowNavbar: 85,
  bgImage: -1,
}

const focus = {
  color: '#406198',
  style: 'box-shadow: 0 0 0 2px #406198;',
}

const screen = {
  small: '600px',
  smallUp: '601px',
  medium: '992px',
  mediumUp: '993px',
  large: '1200px',
  largeUp: '1201px',
}

const media = {
  smallLaptop: (...args: [TemplateStringsArray, ...string[]]) => css`
    @media only screen and (max-width: 700px) and (max-height: 400px) and (orientation: portrait) {
      ${css(...args)};
    }
  `,
  smallAndDown: (...args: [TemplateStringsArray, ...string[]]) => css`
    @media only screen and (max-width: ${screen.small}) {
      ${css(...args)};
    }
  `,
  mediumOnly: (...args: [TemplateStringsArray, ...string[]]) => css`
    @media only screen and (min-width: ${screen.smallUp}) and (max-width: ${screen.medium}) {
      ${css(...args)};
    }
  `,
  mediumAndDown: (...args: [TemplateStringsArray, ...string[]]) => css`
    @media only screen and (max-width: ${screen.medium}) {
      ${css(...args)};
    }
  `,
  mediumAndUp: (...args: [TemplateStringsArray, ...string[]]) => css`
    @media only screen and (min-width: ${screen.smallUp}) {
      ${css(...args)};
    }
  `,
  largeAndDown: (...args: [TemplateStringsArray, ...string[]]) => css`
    @media only screen and (max-width: ${screen.large}) {
      ${css(...args)};
    }
  `,
  largeAndUp: (...args: [TemplateStringsArray, ...string[]]) => css`
    @media only screen and (min-width: ${screen.mediumUp}) {
      ${css(...args)};
    }
  `,
  veryLarge: (...args: [TemplateStringsArray, ...string[]]) => css`
    @media only screen and (min-width: ${screen.largeUp}) {
      ${css(...args)};
    }
  `,
  rotated: (...args: [TemplateStringsArray, ...string[]]) => css`
    @media only screen and (orientation: landscape) {
      ${css(...args)};
    }
  `,
  touch: (...args: [TemplateStringsArray, ...string[]]) => css`
    @media (hover: none) {
      ${css(...args)};
    }
  `,
}

export const animations = {
  scaleout: keyframes`
    from {
      transform: scale(0);
    }

    to {
      transform: scale(1.0);
      opacity: 0;
    }
  `,
  slideUp: keyframes`
    from {
      transform: translate3d(0, 2rem, 0);
      opacity: 0;
    }

    to {
      transform: translate3d(0, 0, 0);
      opacity: 1
    }
  `,
  bounceTop: keyframes`
    0% {
      transform: translateY(-35px);
      animation-timing-function: ease-in;
      opacity: 1;
    }
    24% {
      opacity: 1;
    }
    40% {
      transform: translateY(-24px);
      animation-timing-function: ease-in;
    }
    65% {
      transform: translateY(-12px);
      animation-timing-function: ease-in;
    }
    82% {
      transform: translateY(-6px);
      animation-timing-function: ease-in;
    }
    93% {
      transform: translateY(-4px);
      animation-timing-function: ease-in;
    }
    25%,
    55%,
    75%,
    87% {
      transform: translateY(0px);
      animation-timing-function: ease-out;
    }
    100% {
      transform: translateY(0px);
      animation-timing-function: ease-out;
      opacity: 1;
    }
  `,
  lightSpeedIn: keyframes`
    from {
      transform: translate3d(100%, 0, 0) skewX(-30deg);
      opacity: 0;
    }

    60% {
      transform: skewX(20deg);
      opacity: 1;
    }

    80% {
      transform: skewX(-5deg);
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  `,
  shine: keyframes`
    to {
      background-position: 200% center;
    }
  `,
}

export const theme = {
  borders,
  breakpoints,
  colors,
  focus,
  fonts,
  fontSizes,
  fontWeights,
  headingStyles,
  letterSpacings,
  lineHeights,
  media,
  messageStyles,
  radii,
  shadows,
  sizes,
  space,
  textStyles,
  textVariants,
  zIndices,
  animations,
}
