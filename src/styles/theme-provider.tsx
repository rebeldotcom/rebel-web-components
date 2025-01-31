import React from 'react'
import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components'
import { theme as baseTheme } from './theme'

interface ThemeProviderProps {
  children: React.ReactNode
  theme: DefaultTheme
}

export function ThemeProvider({ children, theme }: ThemeProviderProps) {
  return (
    <StyledThemeProvider theme={{ ...baseTheme, ...theme }}>
      {children}
    </StyledThemeProvider>
  )
}
