import React from 'react'
import PropTypes from 'prop-types'
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
  newTab: false,
  onClick: null,
  href: null,
  to: null,
  testId: '',
  variant: 'default',
}

const propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  display: PropTypes.string,
  href: PropTypes.string,
  to: PropTypes.string,
  newTab: PropTypes.bool,
  onClick: PropTypes.func,
  testId: PropTypes.string,
  variant: PropTypes.string,
}

const Link = ({ onClick, children, ariaLabel, newTab, testId, ...rest }) => {
  if (!rest.href && !rest.to) {
    console.warn('You must supply a `to` or `href` prop to Link!')
  }

  const tabProps = newTab
    ? { rel: 'noopener noreferrer', target: '_blank' }
    : {}

  return (
    <StyledLink
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

Link.defaultProps = defaultProps
Link.propTypes = propTypes

export default Link