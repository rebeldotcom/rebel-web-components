import { css } from 'styled-components'
/* eslint-disable prefer-destructuring */
// Need to set value since styled-system no longer provides this in v5+
const remify = n => `${n / 10}rem`
const pixify = n => `${n}px`

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512].map(remify)

const [none, quarter, half, regular, big, bigger, biggest] = space

space.none = none
space.quarter = quarter
space.half = half
space.regular = regular
space.big = big
space.bigger = bigger
space.biggest = biggest

const sizes = {
  containers: {
    sm: '580px',
    md: '880px',
    lg: '1100px',
    xl: '1280px',
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
  greyLight: '#d7d7d7',
  grey: '#B2B2B2',
  greyDark: '#999999',
  greyDarker: '#666',
  blackLighter: '#333',
  blackLight: '#222328',
  black: '#000',

  greenLightest: '#f3f5e6',
  greenLighter: '#D3DCA3',
  greenLight: '#A5C20F',
  green: '#697e00',
  greenDark: '#6B8000',

  redLighter: '#F9BEAE',
  redLight: '#E37054',
  red: '#F04A22',
  redDark: '#CC3E1C',
  redNew: '#d82a29',

  blueDark: '#0011b1',
  blue: '#0018ff',
  blueLight: '#4255ff',
  blueLighter: '#7a88ff',
  blueLightest: '#d4d7f7',

  orange: '#ff9600',

  clear: 'transparent',

  focus: '#406198',

  overlay: 'rgba(0,0,0,.6)',
  overlayDark: 'rgba(0,0,0,.8)',

  success: '#859f00',
  successLight: '#e4eeaa',

  warning: '#d49e03',
  warningLight: '#f7eac9',

  error: '#f04822',
  errorLight: '#ffd1c7',

  facebook: '#3b5998',

  primary1: [
    '#0010A3',
    '#0013D1',
    '#0018FF',
    '#2E42FF',
    '#5C6CFF',
    '#8B96FF',
    '#A2ABFF',
    '#B9C0FF',
    '#D4D7F7',
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
    '#00D66F',
    '#00E677',
    '#05F07E',
    '#43FF90',
    '#7CFFAA',
    '#9CFFBE',
    '#AFFFC9',
    '#CAFFDB',
    '#E4FFED',
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
}

// TYPOGRAPHY

const fonts = {
  title: `'Montserrat', sans-serif`,
  body: `'Montserrat', sans-serif`,
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
}

const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 96].map(remify)

const fontWeights = {
  light: 300,
  regular: 400,
  semi: 600,
  bold: 800,
}

const breakpoints = [600, 900, 1200].map(pixify)

const borders = [
  'none',
  `1px solid ${colors.greyDark}`,
  `1px solid ${colors.greyLight}`,
  `1px solid ${colors.white}`,
  `1px solid ${colors.red}`,
  `1px solid ${colors.blackLighter}`,
]

borders.none = borders[0]
borders.light = borders[2]
borders.dark = borders[5]
borders.input = borders[2]
borders.error = borders[4]

// Example for shadows
const shadows = [`0 1rem 3rem rgba(${colors.black},.5)`]

const radii = {
  none: 0,
  small: '1px',
  large: '2px',
}

const textStyles = {
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
    backgroundColor: colors.orangeLight,
    border: `1px solid ${colors.black}`,
    color: colors.black,
  },
  whiteOnDark: {
    backgroundColor: 'transparent',
    border: `1px solid ${colors.white}`,
    color: colors.white,
  },
}

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

// 1366x768
// 1920x1080
// 360x640
// 1440x900
// 1536x864
// 1600x900

const media = {
  smallLaptop: (...args) => css`
    @media only screen and (max-width: 700px) and (max-height: 400px) and (orientation: portrait) {
      ${css(...args)};
    }
  `,
  smallAndDown: (...args) => css`
    @media only screen and (max-width: ${screen.small}) {
      ${css(...args)};
    }
  `,
  mediumOnly: (...args) => css`
    @media only screen and (min-width: ${screen.smallUp}) and (max-width: ${screen.medium}) {
      ${css(...args)};
    }
  `,
  mediumAndDown: (...args) => css`
    @media only screen and (max-width: ${screen.medium}) {
      ${css(...args)};
    }
  `,
  mediumAndUp: (...args) => css`
    @media only screen and (min-width: ${screen.smallUp}) {
      ${css(...args)};
    }
  `,
  largeAndDown: (...args) => css`
    @media only screen and (max-width: ${screen.large}) {
      ${css(...args)};
    }
  `,
  largeAndUp: (...args) => css`
    @media only screen and (min-width: ${screen.mediumUp}) {
      ${css(...args)};
    }
  `,
  veryLarge: (...args) => css`
    @media only screen and (min-width: ${screen.largeUp}) {
      ${css(...args)};
    }
  `,
  rotated: (...args) => css`
    @media only screen and (orientation: landscape) {
      ${css(...args)};
    }
  `,
  touch: (...args) => css`
    @media (hover: none) {
      ${css(...args)};
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
  zIndices,
}
