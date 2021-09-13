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
  greyLight: '#D8D8D8',
  greyLightish: '#D2D2D2',
}

const redesignBorders = [`1px solid ${redesignColors.green}`]
// eslint-disable-next-line prefer-destructuring
redesignBorders.green = redesignBorders[0]

const theme = {
  ...baseTheme,
  fonts: {
    ...baseTheme.fonts,
    title: `ivyjournal, sans-serif;`,
    body: `'nunito-sans', sans-serif;`,
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
