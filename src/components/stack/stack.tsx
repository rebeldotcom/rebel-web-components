import React from 'react'
import Box from '../box'

const Stack = ({ children, ...rest }) => {
  return <Box flexDirection="column">{children}</Box>
}

export default Stack
