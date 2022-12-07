import React from 'react'
import Box from '../box'

type TableItemProps = {
  children: React.ReactNode
  gridFormat: {
    extremeRightCellWidth: string
    gridGap: string[]
    gridMargin: number
    gridTemplateColumns: string[]
  }
}

function TableItem({ gridFormat, children, ...props }: TableItemProps) {
  return (
    <Box
      alignSelf="center"
      bg="white"
      borderBottom="light"
      borderLeft="light"
      borderRight="light"
      borderTop="light"
      display={['flex', 'grid', 'grid']}
      gridGap={gridFormat.gridGap}
      gridTemplateColumns={gridFormat.gridTemplateColumns}
      justifyContent="space-between"
      width="100%"
      {...props}
    >
      {children}
    </Box>
  )
}

export default TableItem
