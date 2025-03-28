import 'styled-components'
import { theme } from '../styles/redesignTheme'

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
