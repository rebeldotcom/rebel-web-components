import styled from 'styled-components'
import { layout, margin, flexbox } from 'styled-system'
import { theme } from '../../styles/theme'

const { colors, space, borders } = theme

export const InputLabel = styled.label`
  flex-direction: column;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: ${space.quarter};
  font-size: 1.2rem;
  transition: all 0.2s;
  letter-spacing: 0.1rem;
  transform: translate(1rem, 2.7rem);
  width: 75%;
  pointer-events: none;

  ${({ isPhone, hide }) => {
    return (
      isPhone &&
      !hide &&
      `
        margin-left: 38px;
        background: ${colors.white};
      `
    )
  }}

  ${({ hide }) => {
    return (
      hide &&
      `
      transform: translate(0, -0.1rem);
      font-weight: 600;
      font-size: 1rem;
      letter-spacing: 0;
      `
    )
  }}
`

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  min-height: 8.5rem;

  ${layout}
  ${margin}
  ${flexbox}

  input,
  .react-tel-input input[type='tel'] {
    width: 100%;
    padding: ${space.half};
    padding-right: ${space[4]};
    box-sizing: border-box;
    font-size: 1.4rem;
    border: ${borders.input};
    height: 34px;
    border-radius: 0;

    transition: all 0.2s;

    &[aria-invalid='true'] {
      border: ${borders.error};
      position: relative;

      &::after,
      &:hover::after {
        content: '';
        color: ${colors.red};
        position: absolute;
        right: 8px;
        top: 8px;
      }
    }

    &:focus {
      border-color: transparent;
      outline: ${colors.focus};
      box-shadow: 0 0 0 2px ${colors.focus};
    }

    &:focus ~ label {
      transform: translate(0, -0.1rem);
      font-weight: 600;
      font-size: 1rem;
      letter-spacing: 0;
    }

    input[aria-invalid='true'] + ${InputLabel} {
      color: ${colors.red};
    }
  }

  .react-tel-input input[type='tel'] {
    padding-left: 48px;
  }
`

export const InputSuffix = styled.div`
  margin-left: ${space.half};
  display: inline-block;
  font-size: 1.4rem;
  vertical-align: text-bottom;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: absolute;
  right: 0.8rem;
  top: 3.6rem;
`

export const InputErrorMessage = styled.div`
  margin-top: ${space.quarter};
  font-size: 1.2rem;
  color: ${colors.red};
  opacity: 0;
  height: 2rem;
  transition: all 0.2s ease-in-out;
  font-weight: 400;

  ${({ showErrorMessage }) => {
    return (
      showErrorMessage &&
      `
      max-height: 1000px
      opacity: 1;
    `
    )
  }}
`
export const InputIcon = styled.div`
  position: absolute;
  display: inline-block;
  left: calc(100% - 25px);
  top: 32px;
`

export const ShowPass = styled.button`
  position: absolute;
  display: inline-block;
  cursor: pointer;
  font-size: 1.2rem;
  top: 3.4rem;
  right: 0;
  margin-right: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  background: transparent;
  padding: 0.2rem 0.5rem;
  border: ${theme.borders[2]};
  z-index: 5;
`
