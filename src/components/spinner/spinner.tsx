import React from 'react'
import styled, { keyframes } from 'styled-components'

type SpinnerProps = {
  size?: string
  stroke?: string
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
    ${({ theme }) => theme.colors.greyDarker}33;
  border-right: ${({ stroke }) => stroke} solid
    ${({ theme }) => theme.colors.greyDarker}33;
  border-bottom: ${({ stroke }) => stroke} solid
    ${({ theme }) => theme.colors.greyDarker}33;
  border-left: ${({ stroke }) => stroke} solid
    ${({ theme }) => theme.colors.greyDarker};
  transform: translateZ(0);
  animation: ${spinnerAnimation} 1.1s infinite linear;
`
function Spinner({ size = '5rem', stroke = '0.5rem' }: SpinnerProps) {
  return (
    <StyledSpinner
      aria-live="assertive"
      role="alert"
      size={size}
      stroke={stroke}
    >
      Loading...
    </StyledSpinner>
  )
}

export default Spinner
