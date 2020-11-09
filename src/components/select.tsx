import React from 'react'
import Box from './box'
import Stack from './stack'
import Text from './text'
import Skeleton from './skeleton'
import styled from 'styled-components'

type Option = {
  value: string
  display: string
}

type SelectProps = {
  isLoading?: boolean
  id: string
  label?: string
  selected?: string
  options: Option[]
  hint?: string
  onChange: (string) => void
}

const SelectComponent = styled(Box)`
  color: #000;
  background: transparent;
`

const Select = ({
  isLoading,
  id,
  options,
  label,
  onChange,
  hint,
  selected,
  ...rest
}: SelectProps) => {
  const handleOnChange = e => {
    onChange(e.target.value)
  }

  return (
    <Stack {...rest}>
      {label && (
        <Text
          as="label"
          htmlFor={id}
          fontWeight="semi"
          variant="milliBold"
          textTransform="capitalize"
        >
          {label}
          {hint && (
            <Text mb={1} variant="micro" fontWeight="400" textTransform="none">
              {hint}
            </Text>
          )}
        </Text>
      )}

      {isLoading ? (
        <Skeleton />
      ) : (
        <SelectComponent
          as="select"
          border={2}
          p="2px 2rem 2px 5px"
          id={id}
          width="100%"
          onChange={handleOnChange}
        >
          {options &&
            options.map(opt => {
              return (
                <option
                  key={opt.value}
                  value={opt.value}
                  selected={selected === opt.value}
                >
                  {opt.display}
                </option>
              )
            })}
        </SelectComponent>
      )}
    </Stack>
  )
}

export default Select
