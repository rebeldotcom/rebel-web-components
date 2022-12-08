import React from 'react'
import Box from '../box'

type TableHeaderProps = {
  children: React.ReactNode
  gridFormat: {
    extremeRightCellWidth: string
    gridGap: string[]
    gridMargin: number
    gridTemplateColumns: string[]
  }
}

function TableHeader({ gridFormat, children, ...props }: TableHeaderProps) {
  return (
    <Box
      alignSelf="center"
      bg="white"
      borderLeft="light"
      borderRight="light"
      borderTop="light"
      display={['grid', 'grid', 'grid']}
      gridGap={gridFormat.gridGap}
      gridTemplateColumns={gridFormat.gridTemplateColumns}
      pl={3}
      py={2}
      width="100%"
      {...props}
    >
      {children}
    </Box>
  )
}

export default TableHeader
