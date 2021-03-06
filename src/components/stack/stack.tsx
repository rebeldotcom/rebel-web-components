import React from 'react'
import Box from '../box'

const Stack = React.forwardRef<HTMLDivElement>(({ children, ...rest }, ref) => {
  return (
    <Box ref={ref} flexDirection="column" {...rest}>
      {children}
    </Box>
  )
})

Stack.displayName = 'Stack'

export default Stack
