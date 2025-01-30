import React from 'react'
import styled, { DefaultTheme } from 'styled-components'
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
  TypographyProps,
} from 'styled-system'
import Box from './box'

type ProgressBarProps = {
  decimal?: number
  progress: number
  maximum: number
  variant: DefaultTheme['textVariants']
}

export type BoxProps = React.RefAttributes<HTMLElement> &
  React.HTMLAttributes<HTMLElement> &
  LayoutProps &
  ColorProps &
  SpaceProps &
  FlexboxProps &
  TypographyProps &
  BorderProps & {
    variant: DefaultTheme['textVariants']
  }

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
  ({ progress, maximum, variant, decimal = 0, ...rest }, ref) => {
    return (
      <Box ref={ref} {...rest}>
        <Box bg="greyLight" borderRadius="rounded" width="100%">
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
