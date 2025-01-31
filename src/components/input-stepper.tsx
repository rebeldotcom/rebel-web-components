import React from 'react'
import styled from 'styled-components'
import Box from './box'
import Button from './button'
import Input from './input'

type InputStepperProps = {
  id: string
  count: number
  onChange: Function
  maxValue?: number
  minValue?: number
  step?: number
  label?: string
  ariaLabel?: string
}

const StyledInput = styled(Input)`
  & input {
    text-align: center;
    padding-right: 0;
  }
`

function InputStepper({
  ariaLabel,
  count,
  label,
  onChange,
  step = 1,
  minValue = 0,
  maxValue = 100,
  id,
  ...rest
}: InputStepperProps) {
  if (!label && !ariaLabel) {
    throw new Error('Please provide an input label to InputStepper')
  }

  const isMax = maxValue <= count
  const isMin = minValue >= count

  const handleIncremenet = () => {
    if (isMax) return

    onChange(Number(count) + step)
  }

  const handleDecrement = () => {
    if (isMin) return

    onChange(Number(count) - step)
  }

  return (
    <Box {...rest}>
      <Button
        color="black"
        disabled={isMin}
        id={`${id}-decrement`}
        onClick={handleDecrement}
        variant="inverse"
      >
        -
      </Button>
      <StyledInput
        ariaLabel={ariaLabel}
        id={id}
        label={label}
        max={maxValue}
        min={minValue}
        onChange={evt => {
          const { value } = evt.target as HTMLInputElement

          if (+value < minValue) return
          if (+value > maxValue) return

          onChange(value)
        }}
        type="number"
        value={count}
      />
      <Button
        color="black"
        disabled={isMax}
        id={`${id}-increment`}
        onClick={handleIncremenet}
        variant="inverse"
      >
        +
      </Button>
    </Box>
  )
}

export default InputStepper
