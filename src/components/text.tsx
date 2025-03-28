import React, { ElementType, HTMLAttributes } from 'react'
import styled, {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components'
import {
  flexbox,
  color,
  border,
  display,
  space,
  system,
  typography,
  textStyle,
  layout,
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

type TextVariant = {
  variant?:
    | keyof DefaultTheme['textVariants']
    | keyof DefaultTheme['textVariants'][]
}

export type TextProps = HTMLAttributes<HTMLDivElement> &
  LayoutProps &
  FlexboxProps &
  ColorProps &
  BorderProps &
  DisplayProps &
  SpaceProps &
  TypographyProps &
  TextStyleProps &
  TextVariant & {
    textTransform?: string
    htmlFor?: string
    as?: ElementType
    css?: FlattenInterpolation<ThemeProps<DefaultTheme>>
  }

const Text: React.FC<TextProps> = styled.div<TextProps>`
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
