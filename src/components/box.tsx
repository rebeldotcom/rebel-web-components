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
} from 'styled-system'
import styled, { DefaultTheme } from 'styled-components'
import React from 'react'

export type BoxProps = React.RefAttributes<HTMLDivElement> &
  React.HTMLAttributes<HTMLDivElement> &
  LayoutProps<DefaultTheme> &
  FlexboxProps<DefaultTheme> &
  ColorProps<DefaultTheme> &
  BorderProps<DefaultTheme> &
  DisplayProps<DefaultTheme> &
  SpaceProps<DefaultTheme> &
  PositionProps<DefaultTheme> &
  ShadowProps<DefaultTheme> &
  BackgroundProps<DefaultTheme> &
  GridProps<DefaultTheme> & {
    as?: React.ElementType
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
