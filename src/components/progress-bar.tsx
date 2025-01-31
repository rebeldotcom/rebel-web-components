import React from 'react'
import styled, { DefaultTheme } from 'styled-components'
import {
  color,
  layout,
  border,
  flexbox,
  typography,
  space,
  variant,
} from 'styled-system'
import Box, { BoxProps } from './box'

type ProgressProps = BoxProps & {
  variant: DefaultTheme['textVariants']
}

type ProgressBarProps = ProgressProps & {
  decimal?: number
  progress: number
  maximum: number
}

const textVariants = variant({
  scale: 'textVariants',
  prop: 'variant',
})

const Progress: React.FC<ProgressProps> = styled.div<ProgressProps>`
  ${border}
  ${color}
  ${layout}
  ${flexbox}
  ${typography}
  ${space}
  ${textVariants}
`

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ progress, maximum, variant, decimal = 0, ...rest }, ref) => {
    return (
      <Box ref={ref} {...rest}>
        <Box bg="greyLight" borderRadius="rounded" width="100%">
          <Progress
            alignItems="center"
            bg={progress === 0 ? 'none' : 'success-500'}
            borderRadius="rounded"
            color="white"
            py={1}
            textAlign="center"
            variant={variant}
            width={progress === 0 ? '100%' : `${(progress / maximum) * 100}%`}
          >
            {`${((progress / maximum) * 100)
              .toFixed(decimal)
              .replace(/\.0+$/, '')}%`}
          </Progress>
        </Box>
      </Box>
    )
  }
)

ProgressBar.displayName = 'ProgressBar'

export default ProgressBar
