import React, { useState } from 'react'
import PropTypes from 'prop-types'
import isNumber from 'lodash/isNumber'
import * as S from './input.styles'

const propTypes = {
  autoComplete: PropTypes.string,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  hasError: PropTypes.bool,
  icon: PropTypes.node,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  maxLength: PropTypes.number,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  required: PropTypes.bool,
  rows: PropTypes.number,
  suffix: PropTypes.string,
  systemProps: PropTypes.shape({}),
  textarea: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

const defaultProps = {
  autoComplete: 'on',
  disabled: false,
  errorMessage: '',
  hasError: false,
  icon: '',
  label: '',
  maxLength: null,
  name: '',
  onBlur: () => {},
  onChange: () => {},
  onKeyPress: () => {},
  required: false,
  rows: 5,
  suffix: '',
  systemProps: {},
  textarea: false,
  type: 'text',
  value: '',
}

const Input = ({
  autoComplete,
  disabled,
  errorMessage,
  hasError,
  icon,
  id,
  label,
  maxLength,
  name,
  onBlur,
  onChange,
  onKeyPress,
  required,
  suffix,
  type,
  value,
  systemProps,
  rows,
  textarea,
}) => {
  const [showPassword, setShowPassword] = useState(type !== 'password')

  const renderSuffix = () => {
    if (!suffix) return null

    return <S.InputSuffix position="absolute">{suffix}</S.InputSuffix>
  }

  const renderIcon = () => {
    if (!icon) return null

    return <S.InputIcon>{icon}</S.InputIcon>
  }

  const renderShowPass = () => {
    if (type !== 'password') return null

    const text = showPassword ? 'Hide' : 'Show'

    return (
      <S.ShowPass
        id="showpassword"
        onClick={() => setShowPassword(!showPassword)}
        title="Show/Hide password"
      >
        {text}
      </S.ShowPass>
    )
  }

  const getInput = () => {
    let inputType = type

    if (type === 'password') {
      inputType = showPassword ? 'text' : 'password'
    }

    return (
      <React.Fragment>
        <input
          aria-invalid={hasError}
          aria-required={required}
          autoComplete={autoComplete}
          data-lpignore={autoComplete !== 'on'}
          disabled={disabled}
          id={id}
          maxLength={maxLength}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          onKeyPress={onKeyPress}
          required={required}
          type={inputType}
          value={value}
        />
        {renderShowPass()}
        {renderIcon()}
        {renderSuffix()}
      </React.Fragment>
    )
  }

  const getTextArea = () => {
    return (
      <textarea
        disabled={disabled}
        id={id}
        onChange={onChange}
        required={required}
        rows={`${rows}`}
        type={type}
        value={value}
      />
    )
  }

  const getInputType = () => {
    if (textarea) return getTextArea()

    return getInput()
  }

  const shouldHide = () => {
    if (isNumber(value)) {
      return true
    }

    return Boolean(value.length)
  }

  return (
    <S.InputContainer suffix={suffix} {...systemProps}>
      <S.InputErrorMessage
        aria-live="assertive"
        id={`${id}-error`}
        role="alert"
        showErrorMessage={hasError}
      >
        {errorMessage}
      </S.InputErrorMessage>

      {getInputType()}

      <S.InputLabel hide={shouldHide()} htmlFor={id}>
        {label}
      </S.InputLabel>
    </S.InputContainer>
  )
}

Input.propTypes = propTypes
Input.defaultProps = defaultProps

export default Input
