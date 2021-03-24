import { theme as baseTheme } from './theme.ts'

const theme = {
  ...baseTheme,
  fonts: {
    ...baseTheme.fonts,
    title: `ivyjournal, sans-serif;`,
    body: `'Nunito Sans', sans-serif;`,
  },
  colors: {
    ...baseTheme.colors,
    blueLight: '#EEF0FB',
    blue: '#292E42',
    blueDark: '#292E42',
    greenLight: '#DBEDD6',
    green: '#467963',
    greenDark: '#467963',
    redLight: '#FFEEEE',
    red: '#e62e31',
    redDark: '#6B393F',
    orangeLight: '#FFEBE6',
    orange: '#C4470E',
    orangeDark: '#C4470E',
  },
}

export { theme }
