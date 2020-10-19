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
    red: '#6B393F',
    redDark: '#6B393F',
    orangeLight: '#FFDDD3',
    orange: '#ED6D33',
    orangeDark: '#ED6D33',
  },
}

export { theme }
