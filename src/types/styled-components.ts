import 'styled-components'
import { THEME } from 'src/styles/themes'

type Theme = typeof THEME

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
