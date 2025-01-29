import { theme as baseTheme } from './theme.ts'

const redesignColors = {
  ...baseTheme.colors,
  blueLight: '#EEF0FB',
  blue: '#3440B3',
  blueDark: '#292E42',
  greenLight: '#DBEDD6',
  green: '#33CC99',
  greenDark: '#467963',
  redLight: '#FFEEEE',
  red: '#E62E31',
  redDark: '#6B393F',
  orangeLighter: '#ff9900',
  orangeLight: '#FFEBE6',
  orange: '#FF6600',
  orangeDark: '#C4470E',
  purple: '#B32B85',
  purpleLight: '#E6E4F4',
  purpleDark: '#453E61',
  greyLighter: '#EFEFEF',
  greyLight: '#D8D8D8',
  greyLightish: '#D2D2D2',
  deepKoamaru: '#453E63',
  grapefruit: '#FE546F',
  strongCyan: '#01CBCF',
  sunflower: '#FFD080',
  haciendaBlue: '#0188A5',
  haciendaDarkBlue: '#015B6F',
  magenta: '#DF0772',
  aqua: '#0BFFE6',
  orangePeel: '#FF9D00',
  alert: '#FFD081',
}

const redesignBorders = [`1px solid ${redesignColors.green}`]
// eslint-disable-next-line prefer-destructuring
redesignBorders.green = redesignBorders[0]

const theme = {
  ...baseTheme,
  fonts: {
    ...baseTheme.fonts,
    title: `'DM Sans', Inter, ivyjournal, sans-serif;`,
    body: `Inter, Montserrat, 'work-sans', sans-serif;`,
  },
  colors: {
    ...redesignColors,
  },
  borders: {
    ...baseTheme.borders,
    ...redesignBorders,
  },
}

export { theme }
