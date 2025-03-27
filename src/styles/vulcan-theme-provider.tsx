import React from 'react'
import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components'
import { THEME } from './themes'
import { INTERNIC_COLORS, INTERNIC_FONTS } from './themes/internic'

interface Props {
  children: React.ReactNode
  isInternic?: boolean
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: ${({ theme }) => theme.fonts.body};
  }
`

const getTheme = (isInternic: boolean) => {
  return {
    ...THEME,
    colors: {
      ...THEME.colors,
      ...(isInternic ? INTERNIC_COLORS : {}),
    },
    fonts: {
      ...THEME.fonts,
      ...(isInternic ? INTERNIC_FONTS : {}),
    },
  }
}

/** This is the theme provider to wrap around the new pages we create under project Vulcan [Complete website redesign]. */
export function VulcanThemeProvider({ children, isInternic = false }: Props) {
  const theme = getTheme(isInternic)

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  )
}
