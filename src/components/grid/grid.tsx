import React from 'react'
import Box from '../box'

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
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
