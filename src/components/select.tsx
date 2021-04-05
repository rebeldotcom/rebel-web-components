import React from 'react'
import styled from 'styled-components'
import Box from './box'
import Stack from './stack'
import Text from './text'
import Skeleton from './skeleton'

type Option = {
  value: string
  display: string
  disabled?: boolean
}

type SelectProps = {
  isLoading?: boolean
  id: string
  label?: string
  selected?: string
  options: Option[]
  hint?: string
  onChange: (string) => void
  isEnabled?: boolean
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
  isEnabled,
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
          fontWeight="semi"
          htmlFor={id}
          textTransform="capitalize"
          variant="milliBold"
        >
          {label}
          {hint && (
            <Text fontWeight="400" mb={1} textTransform="none" variant="micro">
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
          id={id}
          isEnabled={isEnabled}
          onChange={handleOnChange}
          p="2px 2rem 2px 5px"
          width="100%"
        >
          {options &&
            options.map(opt => {
              return (
                <option
                  key={opt.value}
                  disabled={opt.disabled}
                  selected={selected === opt.value}
                  value={opt.value}
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
