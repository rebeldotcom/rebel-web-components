import React, { ComponentProps, Ref } from 'react'
import styled, { DefaultTheme } from 'styled-components'
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

interface LinkProps
  extends SpaceProps,
    LayoutProps,
    PositionProps,
    AlignSelfProps,
    ComponentProps<'a'> {
  ariaLabel: string
  to?: string
  testId?: string
  variant?: ButtonVariant
  newTab?: boolean
  size?: ButtonSize
  color?: keyof DefaultTheme['colors']
  ref: Ref<HTMLAnchorElement> | undefined
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
