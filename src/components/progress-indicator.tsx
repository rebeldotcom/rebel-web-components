/* eslint-disable no-nested-ternary */
import React from 'react'
import styled from 'styled-components'
import { theme } from '../styles'

interface ProgressIndicatorProps {
  color?: string
  height?: string
  max?: number
  value: number
  width?: string
  isInternic?: boolean
  variant?: string
}

const { colors } = theme

const ProgressContainer = styled.div`
  height: ${props => props.height};
  background-color: #eee;
  border-radius: 2px;
  width: ${props => props.width};
`

const ProgressValue = styled.div`
  background-color: ${props => props.color};
  border-radius: 2px;
  height: 100%;
  width: ${props => props.width};
`

function progressColor(percentage, isInternic, variant) {
  let color = ''
  if (percentage > 0.67) {
    if (variant === 'inverted') {
      color = isInternic ? colors.success : '#16A34A'
    } else {
      color = isInternic ? colors.error : 'red'
    }
  } else if (percentage > 0.33) {
    color = isInternic ? colors.alert : '#fbbf24'
  } else if (variant === 'inverted') {
    color = isInternic ? colors.error : 'red'
  } else {
    color = isInternic ? colors.success : '#16A34A'
  }
  return color
}

function ProgressIndicator({
  value,
  max = 100,
  width = '10em',
  color = null,
  height = '5px',
  isInternic = false,
  variant = null,
}: ProgressIndicatorProps) {
  const percentage = value / max
  return (
    <ProgressContainer
      color={color || progressColor(percentage, isInternic, variant)}
      height={height}
      width={width}
    >
      <ProgressValue
        color={progressColor(percentage, isInternic, variant)}
        width={`${percentage * 100}%`}
      />
    </ProgressContainer>
  )
}

export default ProgressIndicator
