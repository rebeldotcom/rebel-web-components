import React from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'
import Box from './box'

const { colors } = theme

type RadioProps = {
  isChecked: boolean
  value: string
  onChange: () => {}
  id: string
  text: string
  name?: string
}

const StyledRadio = styled(Box)`
  vertical-align: top;
  display: inline-flex;
  align-items: center;
  position: relative;

  > input[type='radio'] {
    opacity: 0;
  }

  > span::before {
    content: '';
    display: inline-block;
    border: 2px solid ${colors.black};
    border-radius: 10rem;
    height: 1.2rem;
    width: 1.2rem;
    left: 0;
    top: 25%;
  }

  > span::after {
    content: '';
    display: inline-block;
    border-radius: 10rem;
    height: 0.4rem;
    width: 0.4rem;
    margin: 3px 5px;
    background-color: ${colors.black};
    left: -1px;
    top: 30%;
  }

  > span::before,
  > span::after {
    position: absolute;
  }

  > span {
    font-size: 1.4rem;
  }

  > input[type='radio'] + span::after {
    content: none;
  }

  /*Unhide the checkmark on the checked state*/
  > input[type='radio']:checked + span::after {
    content: '';
  }

  > input[type='radio']:focus + span::before {
    outline: rgb(59, 153, 252) auto 5px;
  }
`

const Radio = ({
  isChecked,
  value,
  onChange,
  text,
  id,
  name,
  ...rest
}: RadioProps) => {
  return (
    <StyledRadio as="label" htmlFor={id} {...rest}>
      <input
        checked={isChecked}
        data-testid={`${id}-radioBtn`}
        id={id}
        name={name}
        onChange={onChange}
        type="radio"
        value={value}
      />
      <span>{text}</span>
    </StyledRadio>
  )
}

export default Radio
