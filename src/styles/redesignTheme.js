import { theme as baseTheme } from './theme.ts'

const theme = {
  ...baseTheme,
  fonts: {
    ...baseTheme.fonts,
    title: `ivyjournal, sans-serif;`,
    body: `'nunito-sans', sans-serif;`,
  },
  colors: {
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
    orangeLight: '#FFEBE6',
    orange: '#FF6600',
    orangeDark: '#C4470E',
	purple: '#B32B85',
	purpleLight: '#E6E4F4',
	purpleDark: '#46283F',
  },
}

export { theme }
