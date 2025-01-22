import 'styled-components'
import { redesignTheme } from 'src'

type ThemeType = typeof redesignTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
