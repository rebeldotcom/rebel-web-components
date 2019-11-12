import React from 'react'
import Box from '../box'

const Stack = ({ children, ...rest }) => {
  return (
    <Box flexDirection="column" {...rest}>
      {children}
    </Box>
  )
}

export default Stack
