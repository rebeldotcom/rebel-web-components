import React, { HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import { redesignTheme } from '../styles'
import Text from './text'

const propTypes = {
  bg: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
}

const defaultProps = {
  bg: 'black',
  color: 'white',
}

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  bg?: keyof (typeof redesignTheme)['colors']
  color?: keyof (typeof redesignTheme)['colors']
}

export default function Badge({
  children,
  bg = 'black',
  color = 'white',
  ...rest
}: BadgeProps) {
  return (
    <Text
      alignItems="center"
      bg={bg}
      color={color}
      display="flex"
      fontSize={0}
      justifyContent="center"
      p={1}
      textStyle="caps"
      {...rest}
    >
      {children}
    </Text>
  )
}

Badge.propTypes = propTypes
Badge.defaultProps = defaultProps
