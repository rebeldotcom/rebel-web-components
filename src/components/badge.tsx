import React from 'react'
import PropTypes from 'prop-types'
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

function Badge({ children, bg, color, ...rest }) {
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

export default Badge
