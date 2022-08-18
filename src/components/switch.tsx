import React from 'react'
import styled from 'styled-components'
import { space, layout, alignSelf } from 'styled-system'
import Box from './box'
import Text from './text'

const SwitchStyles = ({ size }) => {
  switch (size) {
    case 'xs': {
      return `
        height: 12.2px;
        width: 20.8px;

        :after {
          width: 10.3px;
          height: 10.3px;
        }
      `
    }

    case 'sm': {
      return `
        height: 18.3px;
        width: 31.2px;

        :after {
          top: 0.3px;
          width: 15.6px;
          height: 15.6px;
        }
      `
    }

    case 'md': {
      return `
      height: 24.4px;
      width: 41.6px;

      :after {
        top: 0.7px;
        left: 1px;
        width: 20.8px;
        height: 20.8px;
      }
    `
    }

    case 'lg': {
      return `
      height: 30.5px;
      width: 52px;

      :after {
        top: 1px;
        left: 1px;
        width: 26px;
        height: 26px;
      }
      `
    }

    default: {
      return `
        height: 20px;
        width: 35.6px;
  
        :after {
          top: 0.3px;
          left: 0.5px;
          width: 17.3px;
          height: 17.3px;
        }
      `
    }
  }
}

const StyledInputSwitch = styled.input`
  ${SwitchStyles}
  ${space}
  ${layout}
  ${alignSelf}
  border-radius: 16px;
  position: relative;
  border: 1px solid #dc2626;
  background: #dc2626;
  transition: all 0.2s ease;

  :after {
    content: '';
    position: absolute;
    border-radius: 50%;
    background: white;
    transition: all 0.2s cubic-bezier(0.5, 0.1, 0.75, 1.35);
  }

  :checked {
    border-color: #16a34a;
    background: #16a34a;
  }

  :checked:after {
    transform: translate(83%, 0);
  }
`

const Root = styled(StyledInputSwitch).attrs({ type: 'checkbox' })`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`
type SwitchSize = 'xs' | 'sm' | 'md' | 'lg'
interface SwitchProps {
  id: string
  checked: boolean
  onChange: (event?: any) => void
  size: SwitchSize
  label: React.ReactNode
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ id, checked = false, onChange, size = 'md', label, ...props }, ref) => {
    const handleOnChange = event => {
      const { target } = event
      const value = target.checked
      if (onChange) onChange({ id, value })
    }

    return (
      <Box {...props}>
        <Root
          ref={ref}
          checked={checked}
          onChange={handleOnChange}
          size={size}
          type="checkout"
        />
        {label}
      </Box>
    )
  }
)

Switch.displayName = 'Switch'
export default Switch
