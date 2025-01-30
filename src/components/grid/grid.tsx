import React from 'react'
import Box, { BoxProps } from '../box'

const Grid = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ children, ...rest }, ref) => {
    return (
      <Box ref={ref} display="grid" {...rest}>
        {children}
      </Box>
    )
  }
)

Grid.displayName = 'Grid'

export default Grid
