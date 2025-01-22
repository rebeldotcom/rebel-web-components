import React from 'react'
import {
  LayoutProps,
  ColorProps,
  SpaceProps,
  PositionProps,
  FlexboxProps,
  ShadowProps,
  BorderProps,
  BackgroundProps,
  GridProps,
} from 'styled-system'
import Box from '../box'

export type StackProps = React.HTMLAttributes<HTMLDivElement> &
  LayoutProps &
  ColorProps &
  SpaceProps &
  PositionProps &
  FlexboxProps &
  ShadowProps &
  BorderProps &
  BackgroundProps &
  GridProps & {}

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ children, ...rest }, ref) => {
    return (
      <Box ref={ref} flexDirection="column" {...rest}>
        {children}
      </Box>
    )
  }
)

Stack.displayName = 'Stack'

export default Stack
