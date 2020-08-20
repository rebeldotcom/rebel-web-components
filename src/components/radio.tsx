import React from 'react'
import { theme } from '../styles/theme'
import Box from './box'
import styled from 'styled-components'

const { colors } = theme

type RadioProps = {
  isChecked: boolean
  value: string
  onChange: () => {}
  id: string
  text: string
}

const StyledRadio = styled(Box)`
  vertical-align: top;
  display: flex;
  position: relative;
  margin-bottom: 10px;

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
    margin-top: 2px;
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
    top: 3px;
  }

  > span::before,
  > span::after {
    position: absolute;
  }

  > span {
    margin-left: 1rem;
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

const Radio = ({ isChecked, value, onChange, text, id }: RadioProps) => {
  return (
    <StyledRadio as="label" htmlFor={id}>
      <input
        checked={isChecked}
        data-testid={`${id}-radioBtn`}
        id={id}
        onChange={onChange}
        type="radio"
        value={value}
      />
      <span>{text}</span>
    </StyledRadio>
  )
}

export default Radio
