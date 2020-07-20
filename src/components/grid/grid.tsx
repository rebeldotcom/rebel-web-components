import React from 'react'
import Box from '../box'

const Grid = React.forwardRef<HTMLDivElement>(({ children, ...rest }, ref) => {
  return (
    <Box ref={ref} display="grid" {...rest}>
      {children}
    </Box>
  )
})

export default Grid
