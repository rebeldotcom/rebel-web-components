import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { theme } from './theme'

export const ThemeProvider = ({ children }) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
)
