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
  borderRadius?: number
  onProgressChange?: (...args: string[]) => void
}

const { colors } = theme
const { colors: swiftColors } = swiftTheme

const ProgressContainer = styled.div`
  height: ${props => props.height};
  background-color: #eee;
  border-radius: ${props => props.borderRadius || '2px'};
  width: ${props => props.width};
`

const ProgressValue = styled.div`
  background-color: ${props => props.color};
  border-radius: ${props => props.borderRadius || '2px'};
  height: 100%;
  width: ${props => props.width};
`

function progressColor(percentage, isInternic, variant) {
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
  onProgressChange,
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
        color={
          color ||
          onProgressChange ||
          progressColor(percentage, isInternic, variant)
        }
        width={`${percentage * 100}%`}
      />
    </ProgressContainer>
  )
}

export default ProgressIndicator
