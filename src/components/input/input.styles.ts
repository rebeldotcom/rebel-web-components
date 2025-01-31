import styled from 'styled-components'
import { layout, margin, flexbox } from 'styled-system'
import { theme } from '../../styles/theme'

const { colors, space, borders } = theme

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  ${layout}
  ${margin}
  ${flexbox}

  input,
  .react-tel-input input[type='tel'] {
    height: 34px;
  }

  input,
  textarea,
  .react-tel-input input[type='tel'] {
    width: 100%;
    padding: ${space.half};
    padding-right: ${space.big};
    box-sizing: border-box;
    font-size: 1.6rem;
    border: ${borders.input};

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
  }

  .react-tel-input input[type='tel'] {
    padding-left: 48px;
  }
`

export const InputSuffix = styled.div`
  position: absolute;
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
interface InputErrorMessageProps {
  showErrorMessage?: boolean
}

export const InputErrorMessage = styled.div<InputErrorMessageProps>`
  font-size: 1.2rem;
  color: ${colors.red};
  opacity: 0;
  text-transform: none;
  transition: all 0.2s ease-in-out;
  font-weight: 400;
  flex-wrap: wrap;
  height: auto;
  margin-bottom: 0.4rem;
  display: flex;
  align-items: center;
  white-space: pre-wrap;

  ${({ showErrorMessage }) => {
    return (
      showErrorMessage &&
      `

      max-height: 1000px;
      opacity: 1;
    `
    )
  }}

  &:empty {
    height: 0px;
  }
`
export const ShowPass = styled.button`
  position: absolute;
  display: inline-block;
  cursor: pointer;
  font-size: 1.2rem;
  right: -5px;
  bottom: 0.4rem;
  margin-right: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  background: transparent;
  padding: 0.5rem;
  border: ${theme.borders.light};
  z-index: 5;
`
