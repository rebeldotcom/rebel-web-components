import React from 'react'
import PropTypes from 'prop-types'
import Box from './box'

const propTypes = {
  children: PropTypes.node.isRequired,
  containerProps: PropTypes.shape({}),
}

const defaultProps = {
  containerProps: {},
}

const Section = ({ children, containerProps, ...rest }) => {
  return (
    <Box as="section" justifyContent="center" width={1} {...rest}>
      <Box
        alignItems="center"
        flexDirection="column"
        maxWidth={[
          'containers.sm',
          'containers.md',
          'containers.lg',
          'containers.xl',
        ]}
        width={1}
        {...containerProps}
      >
        {children}
      </Box>
    </Box>
  )
}

Section.propTypes = propTypes
Section.defaultProps = defaultProps

export default Section
