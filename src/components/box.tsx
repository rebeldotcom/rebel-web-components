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
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components'
import React, { ElementType, HTMLAttributes, RefAttributes } from 'react'

export type BoxProps = RefAttributes<HTMLDivElement> &
  HTMLAttributes<HTMLDivElement> &
  LayoutProps &
  FlexboxProps &
  ColorProps &
  BorderProps &
  DisplayProps &
  SpaceProps &
  PositionProps &
  ShadowProps &
  BackgroundProps &
  TypographyProps &
  GridProps & {
    as?: ElementType
    css?: FlattenInterpolation<ThemeProps<DefaultTheme>>
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
