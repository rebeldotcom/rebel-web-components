import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { theme as baseTheme } from './theme'

export function ThemeProvider({ children, theme }) {
  return (
    <StyledThemeProvider theme={{ ...baseTheme, ...theme }}>
      {children}
    </StyledThemeProvider>
  )
}
