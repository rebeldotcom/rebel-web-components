import React from 'react'
import styled from 'styled-components'
import {
  space,
  layout,
  position,
  alignSelf,
  AlignSelfProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from 'styled-system'
import { redesignTheme } from '../styles'
import { ButtonSize, buttonStyles, ButtonVariant } from '../styles/custom-utils'

const StyledButton = styled.button<ButtonProps>`
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

interface ButtonProps
  extends SpaceProps,
    LayoutProps,
    PositionProps,
    AlignSelfProps,
    React.HTMLAttributes<HTMLButtonElement> {
  ariaLabel?: string
  disabled?: boolean
  variant?: ButtonVariant
  size?: ButtonSize
  color?: keyof (typeof redesignTheme)['colors']
}

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
    const handleButtonClick: React.MouseEventHandler<
      HTMLButtonElement
    > = event => {
      event.preventDefault()
      if (onClick) {
        onClick(event)
      }
    }

    return (
      <StyledButton
        ref={ref}
        aria-label={ariaLabel}
        data-testid={id}
        disabled={disabled}
        display={display}
        id={id}
        onClick={handleButtonClick}
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

export default Button
