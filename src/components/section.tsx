import React from 'react'
import Box from './box'

type SectionProps = {
  children: React.ReactNode
  containerProps?: {}
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ children, containerProps, ...rest }, ref) => {
    return (
      <Box ref={ref} as="section" justifyContent="center" width={1} {...rest}>
        <Box
          alignItems="center"
          flexDirection="column"
          width={1}
          {...containerProps}
        >
          {children}
        </Box>
      </Box>
    )
  }
)

Section.displayName = 'Section'

export default Section
