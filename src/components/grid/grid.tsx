import React from 'react'
import Box from '../box'

const Grid = ({ children, ...rest }) => {
  return (
    <Box display="grid" {...rest}>
      {children}
    </Box>
  )
}

export default Grid
