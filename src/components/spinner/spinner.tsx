import React from 'react'
import styled, { keyframes } from 'styled-components'
import { redesignTheme } from '../../styles'

type SpinnerProps = {
  size?: string
  stroke?: string
  color?: string
}

const spinnerAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const StyledSpinner = styled.div<SpinnerProps>`
  &,
  &:after {
    border-radius: 50%;
    width: ${({ size }) => size};
    height: ${({ size }) => size};
  }

  position: relative;
  text-indent: -9999em;
  border-top: ${({ stroke }) => stroke} solid
    ${({ color, theme }) => color || theme.colors.greyDarker};
  border-right: ${({ stroke }) => stroke} solid
    ${({ color, theme }) => color || theme.colors.greyDarker};
  border-bottom: ${({ stroke }) => stroke} solid
    ${({ color, theme }) => color || theme.colors.greyDarker};
  border-left: ${({ stroke }) => stroke} solid
    ${({ color, theme }) => color || theme.colors.greyDarker};
  transform: translateZ(0);
  animation: ${spinnerAnimation} 1.1s infinite linear;
`

function Spinner({
  size = '5rem',
  stroke = '0.5rem',
  color = redesignTheme.colors.greyDarker,
}: SpinnerProps) {
  return (
    <StyledSpinner
      aria-live="assertive"
      color={color}
      role="alert"
      size={size}
      stroke={stroke}
    >
      Loading...
    </StyledSpinner>
  )
}

export default Spinner
