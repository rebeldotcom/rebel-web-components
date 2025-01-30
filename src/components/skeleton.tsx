import React from 'react'
import {
  space,
  color,
  layout,
  flexbox,
  position,
  border,
  shadow,
} from 'styled-system'
import styled from 'styled-components'

import { theme } from '../styles/theme'
import { BoxProps } from './box'

const { colors, animations } = theme

const SkeletonBlock: React.FC<BoxProps> = styled.div<BoxProps>`
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
  border-radius: 0.2rem;
`

function Skeleton(props: BoxProps) {
  return <SkeletonBlock {...props} />
}

export default Skeleton
