import React from 'react'
import DatePicker from 'react-datepicker'
import { createGlobalStyle } from 'styled-components'
import Box from './box'
import Text from './text'
import 'react-datepicker/dist/react-datepicker.min.css'

interface DatePickerProps {
  selected: any
  onChange: (date: any) => void
  label?: string
}

const DatePickerStyles = createGlobalStyle`
  .react-datepicker__input-container input {
    padding: 0.8rem;
    padding-right: 3.2rem;
    box-sizing: border-box;
    font-size: 1.6rem;
    border: 1px solid #d7d7d7;
    border-radius: 0;
    height: 34px;
  }
`

/**
 * DatePicker has an assortment of props that can be passed in, view the docs for more props
 * https://reactdatepicker.com/ - for more props
 */
function DateSelector({
  label,
  selected,
  onChange,
  ...props
}: DatePickerProps): React.ReactNode {
  return (
    <Box flexDirection="column" mr={2}>
      {label && (
        <Text
          display="flex"
          flexDirection="column"
          fontWeight="semi"
          textTransform="capitalize"
          variant="milliBold"
        >
          <Text as="label">{label}</Text>
        </Text>
      )}
      <DatePicker onChange={onChange} selected={selected} {...props} />
      <DatePickerStyles />
    </Box>
  )
}

export default DateSelector
