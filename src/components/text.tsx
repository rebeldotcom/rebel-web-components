import { ElementType } from 'react'
import styled from 'styled-components'
import {
  flexbox,
  color,
  border,
  display,
  space,
  system,
  typography,
  layout,
  textStyle,
  variant,
  FlexboxProps,
  ColorProps,
  BorderProps,
  DisplayProps,
  SpaceProps,
  TypographyProps,
  LayoutProps,
  TextStyleProps,
} from 'styled-system'

const textTransform = system({
  textTransform: true,
})

const textVariants = variant({
  scale: 'textVariants',
  prop: 'variant',
})

type TextProps = LayoutProps &
  FlexboxProps &
  ColorProps &
  BorderProps &
  DisplayProps &
  SpaceProps &
  TypographyProps &
  TextStyleProps & {
    textTransform?: string
    variant?: string
    htmlFor?: string
    as?: ElementType
  }

const Text = styled.div<TextProps>`
  ${border}
  ${color}
  ${display}
  ${layout}
  ${space}
  ${typography}
  ${textStyle}
  ${textTransform}
  ${flexbox}
  ${textVariants}
`

export default Text
