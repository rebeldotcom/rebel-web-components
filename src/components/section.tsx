import React from 'react'
import Box from './box'

type SectionProps = {
  children: React.ReactNode
  containerProps?: {}
}

const Section = ({ children, containerProps, ...rest }: SectionProps) => {
  return (
    <Box as="section" justifyContent="center" width={1} {...rest}>
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

export default Section
