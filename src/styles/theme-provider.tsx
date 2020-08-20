import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { theme as baseTheme } from './theme'

export const ThemeProvider = ({ children, theme }) => {
  return (
    <StyledThemeProvider theme={{ ...baseTheme, ...theme }}>
      {children}
    </StyledThemeProvider>
  )
}
