import React from 'react'
import styled from 'styled-components'
import { margin, typography, layout, system, alignSelf } from 'styled-system'
import { buttonStyles } from '../styles/custom-utils'

const textDecoration = system({
  textDecoration: true,
})

const StyledLink = styled.a`
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

const defaultProps = {
  as: 'a',
  className: '',
  display: 'inline-block',
  href: null,
  newTab: false,
  onClick: null,
  testId: '',
  to: null,
  variant: 'default',
}

type LinkProps = {
  ariaLabel: string
  as?: string
  children: React.ReactNode
  className?: string
  display?: string
  href: string
  id: string
  to?: string
  onClick?: Function
  testId?: string
  variant?: string
  newTab?: boolean
}

const Link = React.forwardRef<HTMLLinkElement, LinkProps>(
  ({ onClick, children, ariaLabel, newTab, testId, ...rest }, ref) => {
    if (!rest.href && !rest.to) {
      console.warn('You must supply a `to` or `href` prop to Link!')
    }

    const tabProps = newTab
      ? { rel: 'noopener noreferrer', target: '_blank' }
      : {}

    return (
      <StyledLink
        ref={ref}
        aria-label={ariaLabel}
        data-testid={testId}
        onClick={onClick}
        title={ariaLabel}
        {...rest}
        {...tabProps}
      >
        {children}
      </StyledLink>
    )
  }
)

Link.defaultProps = defaultProps
Link.displayName = 'Link'

export default Link
