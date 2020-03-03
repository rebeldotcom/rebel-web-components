import React from 'react'
import styled from 'styled-components'
import { space, layout, alignSelf, position } from 'styled-system'
import { buttonStyles } from '../styles/custom-utils'

type ButtonProps = {
  ariaLabel: string
  as?: string
  children: React.ReactNode
  disabled?: boolean
  display?: string
  id: string
  onClick: Function
  title?: string
}

const StyledButton = styled.button`
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
  
  ${buttonStyles}
  ${space}
  ${layout}
  ${position}
  ${alignSelf}

  &:disabled {
    cursor: not-allowed;
    border: ${({ theme }) => theme.borders.light} !important;
    background: ${({ theme }) => theme.colors.greyLight} !important;
    color: ${({ theme }) => theme.colors.greyDarker};
  }
`

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      id,
      onClick,
      children,
      ariaLabel,
      display = 'flex',
      title,
      disabled,
      ...rest
    },
    ref
  ) => {
    const handleButtonClick = event => {
      event.preventDefault()
      onClick()
    }

    return (
      <StyledButton
        display={display}
        ref={ref}
        aria-label={ariaLabel}
        data-testid={id}
        disabled={disabled}
        id={id}
        onClick={onClick && handleButtonClick}
        title={title || ariaLabel}
        type="button"
        {...rest}
      >
        {children}
      </StyledButton>
    )
  }
)

Button.displayName = 'Button'
Button.variants = buttonStyles

export default Button
