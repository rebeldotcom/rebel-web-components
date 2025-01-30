import React from 'react'
import styled from 'styled-components'
import { border, layout, space } from 'styled-system'
import Stack from './stack'
import Text from './text'
import Skeleton from './skeleton'
import { BoxProps } from './box'

type Option = {
  value: string | number
  display: string | number
  disabled?: boolean
}

type SelectProps = BoxProps & {
  isLoading?: boolean
  label?: string
  selected?: string
  options: Option[]
  hint?: string
  value?: string | number
  onChange: (x: string | number) => void
  e?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const SelectComponent = styled.select<SelectProps>`
  display: flex;
  color: #000;
  background: transparent;

  ${border}
  ${space}
  ${layout}
`

function Select({
  isLoading,
  id,
  options,
  label,
  onChange,
  hint,
  selected,
  value,
  ...rest
}: SelectProps) {
  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
            <Text
              fontWeight="regular"
              mb={1}
              textTransform="none"
              variant="micro"
            >
              {hint}
            </Text>
          )}
        </Text>
      )}

      {isLoading ? (
        <Skeleton />
      ) : (
        <SelectComponent
          border={2}
          e={handleOnChange}
          id={id}
          onChange={e =>
            handleOnChange(e as React.ChangeEvent<HTMLSelectElement>)
          }
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          p="2px 2rem 2px 5px"
          value={value}
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
