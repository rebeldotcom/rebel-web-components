import React from 'react'
import Text from '../text'

type TableHeaderLabelProps = {
  label: string
}

function TableHeaderLabel({ label, ...props }: TableHeaderLabelProps) {
  return (
    <Text textTransform="uppercase" variant="kiloBold" {...props}>
      {label}
    </Text>
  )
}

export default TableHeaderLabel
