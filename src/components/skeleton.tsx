import React from 'react'
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
} from 'styled-system'
import styled from 'styled-components'

import { theme } from '../styles/theme'
const { colors, animations } = theme

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
  As

const SkeletonBlock: React.FC<BoxProps> = styled.div`
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
  ${shadow}

  background: linear-gradient(
    to right,
    ${colors.greyLightest} 20%,
    ${colors.white} 40%,
    ${colors.white} 60%,
    ${colors.greyLightest} 80%
  );
  background-size: 200% auto;
  content: '';
  animation: ${animations.shine} 0.8s linear infinite;
`

const Skeleton = props => <SkeletonBlock {...props} />

export default Skeleton
