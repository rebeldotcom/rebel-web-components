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
} from 'styled-system'
import styled from 'styled-components'

interface As {
  as?: React.ElementType
}

export type BoxProps = React.RefAttributes<HTMLElement> &
  React.HTMLAttributes<HTMLElement> &
  LayoutProps &
  ColorProps &
  SpaceProps &
  PositionProps &
  FlexboxProps &
  ShadowProps &
  BorderProps &
  BackgroundProps &
  As

const Box: React.FC<BoxProps> = styled.div`
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
  ${shadow}
  ${background}
`

Box.defaultProps = {
  display: 'flex',
}

export default Box
