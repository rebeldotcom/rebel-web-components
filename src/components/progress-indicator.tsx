/* eslint-disable no-nested-ternary */
import React from 'react'
import styled from 'styled-components'
import { theme, swiftTheme } from '../styles'

interface ProgressIndicatorProps {
  color?: string
  height?: string
  max?: number
  value: number
  width?: string
  isInternic?: boolean
  variant?: string
  borderRadius?: string
}

const { colors } = theme
const { colors: swiftColors } = swiftTheme

interface ProgressContainerProps {
  height: string
  width: string
  borderRadius?: string
}

const ProgressContainer = styled.div<ProgressContainerProps>`
  height: ${props => props.height};
  background-color: #eee;
  border-radius: ${props => props.borderRadius || '2px'};
  width: ${props => props.width};
`

interface ProgressValueProps {
  width: string
  borderRadius?: string
  color: string
}

const ProgressValue = styled.div<ProgressValueProps>`
  background-color: ${props => props.color};
  border-radius: ${props => props.borderRadius || '2px'};
  height: 100%;
  width: ${props => props.width};
`

function progressColor(
  percentage: number,
  isInternic: boolean,
  variant: string | undefined
) {
  let color = ''
  if (percentage > 0.67) {
    if (variant === 'inverted') {
      color = isInternic ? colors.success : swiftColors.success[600]
    } else {
      color = isInternic ? colors.error : swiftColors.destructive[600]
    }
  } else if (percentage > 0.33) {
    color = isInternic ? colors.alert : swiftColors.warning[400]
  } else if (variant === 'inverted') {
    color = isInternic ? colors.error : swiftColors.destructive[600]
  } else {
    color = isInternic ? colors.success : swiftColors.success[600]
  }
  return color
}

function ProgressIndicator({
  value,
  max = 100,
  width = '10em',
  color,
  height = '5px',
  isInternic = false,
  variant,
  borderRadius,
}: ProgressIndicatorProps) {
  const percentage = value / max
  return (
    <ProgressContainer
      borderRadius={borderRadius}
      height={height}
      width={width}
    >
      <ProgressValue
        borderRadius={borderRadius}
        color={color || progressColor(percentage, isInternic, variant)}
        width={`${percentage * 100}%`}
      />
    </ProgressContainer>
  )
}

export default ProgressIndicator
