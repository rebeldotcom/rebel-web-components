import React from 'react'
import styled from 'styled-components'
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
import { redesignTheme } from '../styles'
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
    React.HTMLAttributes<HTMLAnchorElement> {
  ariaLabel: string
  href: string
  id: string
  to?: string
  testId?: string
  variant?: ButtonVariant
  newTab?: boolean
  size?: ButtonSize
  color?: keyof (typeof redesignTheme)['colors']
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    { ariaLabel, variant = 'default', newTab, testId, children, to, ...rest },
    ref
  ) => {
    if (!rest.href && !to) {
      // eslint-disable-next-line no-console
      console.warn('You must supply a `to` or `href` prop to Link!')
    }

    if (!rest.href && to) {
      rest.href = to
    }

    return (
      <StyledLink
        ref={ref}
        aria-label={ariaLabel}
        ariaLabel={ariaLabel}
        data-testid={testId}
        target={newTab ? '_blank' : ''}
        title={ariaLabel}
        variant={variant}
        {...rest}
      >
        {children}
      </StyledLink>
    )
  }
)

Link.displayName = 'Link'

export default Link
