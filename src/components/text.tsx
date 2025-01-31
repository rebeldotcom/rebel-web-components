import { ElementType, HTMLAttributes } from 'react'
import styled, {
  DefaultTheme,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  InterpolationFunction,
  SimpleInterpolation,
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

export type TextProps = HTMLAttributes<HTMLDivElement> &
  LayoutProps<DefaultTheme> &
  FlexboxProps<DefaultTheme> &
  ColorProps<DefaultTheme> &
  BorderProps<DefaultTheme> &
  DisplayProps<DefaultTheme> &
  SpaceProps<DefaultTheme> &
  TypographyProps<DefaultTheme> &
  TextStyleProps<DefaultTheme> & {
    textTransform?: string
    variant?:
      | keyof DefaultTheme['textVariants']
      | keyof DefaultTheme['textVariants'][]
    htmlFor?: string
    as?: ElementType
    css?:
      | SimpleInterpolation
      | FlattenSimpleInterpolation
      | InterpolationFunction<ThemeProps<DefaultTheme>>
      | FlattenInterpolation<ThemeProps<DefaultTheme>>
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
