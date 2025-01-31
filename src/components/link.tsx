import React, { ComponentProps, Ref } from 'react'
import styled, {
  DefaultTheme,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  InterpolationFunction,
  SimpleInterpolation,
  ThemeProps,
} from 'styled-components'
import {
  margin,
  typography,
  layout,
  system,
  alignSelf,
  AlignSelfProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from 'styled-system'
import { ButtonSize, buttonStyles, ButtonVariant } from '../styles/custom-utils'

const textDecoration = system({
  textDecoration: true,
})

const StyledLink = styled.a<LinkProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    text-decoration: underline;
    color: inherit;
  }

  ${buttonStyles}
  ${alignSelf}
  ${margin}
  ${layout}
  ${typography}
  ${textDecoration}
`

type LinkProps = SpaceProps<DefaultTheme> &
  LayoutProps<DefaultTheme> &
  PositionProps<DefaultTheme> &
  AlignSelfProps<DefaultTheme> &
  ComponentProps<'a'> & {
    ariaLabel: string
    to?: string
    testId?: string
    variant?: ButtonVariant
    // eslint-disable-next-line react/boolean-prop-naming -- legacy thing.
    newTab?: boolean
    size?: ButtonSize
    color?: keyof DefaultTheme['colors']
    ref?: Ref<HTMLAnchorElement> | undefined
    css?:
      | SimpleInterpolation
      | FlattenSimpleInterpolation
      | InterpolationFunction<ThemeProps<DefaultTheme>>
      | FlattenInterpolation<ThemeProps<DefaultTheme>>
  }

function Link({
  ariaLabel,
  onClick,
  variant = 'default',
  newTab,
  testId,
  children,
  to,
  ...rest
}: LinkProps) {
  if (!rest.href && !to) {
    // eslint-disable-next-line no-console
    console.warn('You must supply a `to` or `href` prop to Link!')
  }

  if (!rest.href && to) {
    rest.href = to
  }

  return (
    <StyledLink
      aria-label={ariaLabel}
      ariaLabel={ariaLabel}
      data-testid={testId}
      onClick={onClick}
      target={newTab ? '_blank' : ''}
      title={ariaLabel}
      variant={variant}
      {...rest}
    >
      {children}
    </StyledLink>
  )
}

Link.displayName = 'Link'

export default Link
