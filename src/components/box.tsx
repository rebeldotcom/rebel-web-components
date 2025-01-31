import {
  space,
  SpaceProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  flexbox,
  FlexboxProps,
  position,
  PositionProps,
  border,
  BorderProps,
  shadow,
  ShadowProps,
  background,
  BackgroundProps,
  grid,
  GridProps,
  system,
  DisplayProps,
  display,
  TypographyProps,
  typography,
} from 'styled-system'
import styled, {
  DefaultTheme,
  FlattenSimpleInterpolation,
} from 'styled-components'
import React, { ElementType, HTMLAttributes, RefAttributes } from 'react'

export type BoxProps = RefAttributes<HTMLDivElement> &
  HTMLAttributes<HTMLDivElement> &
  LayoutProps<DefaultTheme> &
  FlexboxProps<DefaultTheme> &
  ColorProps<DefaultTheme> &
  BorderProps<DefaultTheme> &
  DisplayProps<DefaultTheme> &
  SpaceProps<DefaultTheme> &
  PositionProps<DefaultTheme> &
  ShadowProps<DefaultTheme> &
  BackgroundProps<DefaultTheme> &
  TypographyProps<DefaultTheme> &
  GridProps<DefaultTheme> & {
    as?: ElementType
    css?: FlattenSimpleInterpolation
  }

const transform = system({
  transform: true,
})

const Box: React.FC<BoxProps> = styled.div<BoxProps>`
  ${border}
  ${color}
  ${display}
  ${flexbox}
  ${layout}
  ${position}
  ${typography}
  ${space}
  ${shadow}
  ${background}
  ${transform}
  ${grid}
`

Box.defaultProps = {
  display: 'flex',
}

export default Box
