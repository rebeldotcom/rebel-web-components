import React, { useState } from 'react'
import styled from 'styled-components'
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  FlexboxProps,
  border,
  BorderProps,
  flexbox,
  typography,
  space,
  SpaceProps,
  variant,
} from 'styled-system'
import Box from './box'

type ProgressBarProps = {
  progress: number
  maximum: number
  variant: string
}

export type BoxProps = React.RefAttributes<HTMLElement> &
  React.HTMLAttributes<HTMLElement> &
  LayoutProps &
  ColorProps &
  SpaceProps &
  FlexboxProps &
  BorderProps

const textVariants = variant({
  scale: 'textVariants',
  prop: 'variant',
})

const Progress: React.FC<BoxProps> = styled.div`
  ${border}
  ${color}
  ${layout}
  ${flexbox}
  ${typography}
  ${space}
  ${textVariants}
`

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ progress, maximum, variant, ...rest }, ref) => {
    return (
      <Box ref={ref} borderRadius="3rem" {...rest}>
        <Progress
          alignItems="center"
          bg={progress === 0 ? 'none' : 'green'}
          borderRadius="3rem"
          color="white"
          py={1}
          textAlign="center"
          variant={variant}
          width={progress === 0 ? '100%' : `${(progress / maximum) * 100}%`}
        >
          {`${((progress / maximum) * 100).toFixed(2).replace(/\.0+$/, '')}%`}
        </Progress>
      </Box>
    )
  }
)

ProgressBar.displayName = 'ProgressBar'
export default ProgressBar
