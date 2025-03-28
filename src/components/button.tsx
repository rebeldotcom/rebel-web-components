import React, { ButtonHTMLAttributes, HTMLAttributes } from 'react'
import styled, {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components'
import {
  space,
  layout,
  position,
  alignSelf,
  AlignSelfProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  FlexboxProps,
  flexbox,
} from 'styled-system'
import { ButtonSize, buttonStyles, ButtonVariant } from '../styles/custom-utils'

const StyledButton = styled.button<ButtonProps>`
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  ${buttonStyles}
  ${space}
  ${flexbox}
  ${layout}
  ${position}
  ${alignSelf}

  &:disabled {
    cursor: not-allowed;
    border: 1px solid #d7d7d7 !important;
    background: ${({ theme }) => theme.colors.greyLight} !important;
    color: ${({ theme }) => theme.colors.greyDarker};
  }
`

type ButtonProps = HTMLAttributes<HTMLButtonElement> &
  ButtonHTMLAttributes<HTMLButtonElement> &
  FlexboxProps &
  SpaceProps &
  LayoutProps &
  PositionProps &
  AlignSelfProps & {
    ariaLabel?: string
    disabled?: boolean
    variant?: ButtonVariant
    size?: ButtonSize
    color?: keyof DefaultTheme['colors']
    css?: FlattenInterpolation<ThemeProps<DefaultTheme>>
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

export default Button
