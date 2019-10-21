import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  margin,
  MarginProps,
  flexbox,
  FlexboxProps,
  variant as systemVariant,
} from 'styled-system'
import Box from './box'
import Button from './button'
import Icon from './icon'

const defaultProps = {
  containerProps: {},
  dismissCallback: null,
  inverse: false,
  size: 'medium',
  variant: 'info',
}

const propTypes = {
  children: PropTypes.node.isRequired,
  containerProps: PropTypes.shape({}),
  dismissCallback: PropTypes.func,
  inverse: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf([
    'error',
    'success',
    'warning',
    'info',
    'whiteOnDark',
  ]),
}

const messageVariant = systemVariant({
  scale: 'messageStyles',
  prop: 'variant',
})

const sizeStyles = ({ msgSize, theme }) => {
  const { space } = theme

  switch (msgSize) {
    case 'small':
      return `
      font-size: 1rem;
      font-weight: 600;
      padding: ${space.half};
      
    `
    case 'medium':
      return `
        padding: ${space.half};
        font-size: 1.4rem;
        font-weight: 400;`
    case 'large':
      return 'font-size: 2.5rem;'
    default:
      return ''
  }
}

const baseStyles = ({ theme }) => {
  return `
    border-radius: ${theme.radii[2]};
    color: ${theme.colors.white};
    position: relative;
  `
}

interface As {
  as?: React.ElementType
}

export type BoxProps = React.RefAttributes<HTMLElement> &
  React.HTMLAttributes<HTMLElement> &
  MarginProps &
  FlexboxProps &
  As

const StyledMessage: React.FC<BoxProps> = styled.div`
  ${baseStyles}
  ${flexbox}
  ${margin}
  ${sizeStyles}
  ${messageVariant}

  
`

const Message = ({
  size,
  variant,
  containerProps,
  children,
  dismissCallback,
  ...rest
}) => {
  return (
    <StyledMessage
      msgSize={size}
      variant={variant}
      {...containerProps}
      {...rest}
    >
      <Box>{children}</Box>
      {dismissCallback && (
        <Button
          ariaLabel="Close message dialog"
          color="black"
          id="closeMessageBtn"
          onClick={dismissCallback}
          position="absolute"
          right="0"
          top="0"
          variant="minimal"
        >
          <Icon
            height={32}
            name="close"
            title="close message icon"
            titleId="closeMsgIcon"
            viewBox="0 0 32 32"
            width={32}
          >
            close
          </Icon>
        </Button>
      )}
    </StyledMessage>
  )
}

Message.defaultProps = defaultProps
Message.propTypes = propTypes

export default Message
