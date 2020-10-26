import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Box from '../box'
import Text from '../text'
import Spinner from '../spinner'
import * as S from './input.styles'
import Icon from '../icon'

const propTypes = {
  autoComplete: PropTypes.string,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  hasError: PropTypes.bool,
  hint: PropTypes.string,
  icon: PropTypes.node,
  id: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  label: PropTypes.string,
  max: PropTypes.number,
  maxLength: PropTypes.number,
  min: PropTypes.number,
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
  hint: null,
  icon: '',
  isLoading: false,
  label: '',
  max: null,
  maxLength: null,
  min: null,
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

const Input = React.forwardRef<HTMLInputElement>(
  (
    {
      autoComplete,
      disabled,
      errorMessage,
      hasError,
      hint,
      icon,
      id,
      isLoading,
      label,
      max,
      maxLength,
      min,
      name,
      onBlur,
      onChange,
      onKeyPress,
      required,
      rows,
      suffix,
      textarea,
      type,
      value,
      ...rest
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(type !== 'password')

    const renderSuffix = () => {
      if (!suffix) return null

      return <S.InputSuffix position="absolute">{suffix}</S.InputSuffix>
    }

    const renderIcon = () => {
      if (!icon) return null

      return (
        <Box
          position="absolute"
          display="inline-block"
          top="0.6rem"
          left="calc(100% - 55px)"
        >
          {icon}
        </Box>
      )
    }

    const renderShowPass = () => {
      if (type !== 'password') return null

      const text = showPassword ? 'Hide' : 'Show'

      return (
        <S.ShowPass
          id="showpassword"
          onClick={e => {
            setShowPassword(!showPassword)
          }}
          type="button"
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
        <>
          <input
            ref={ref}
            aria-invalid={hasError}
            aria-required={required}
            autoComplete={autoComplete}
            data-lpignore={autoComplete !== 'on'}
            disabled={disabled}
            id={id}
            maxLength={maxLength}
            name={name}
            min={min}
            max={max}
            onBlur={onBlur}
            onChange={onChange}
            required={required}
            type={inputType}
            value={value}
          />
          {renderShowPass()}
          {renderIcon()}
          {renderSuffix()}
        </>
      )
    }

    const getTextArea = () => {
      return (
        <textarea
          ref={ref}
          disabled={disabled}
          id={id}
          onChange={onChange}
          required={required}
          rows={rows}
          type={type}
          value={value}
        />
      )
    }

    const getInputType = () => {
      if (textarea) return getTextArea()

      return getInput()
    }

    return (
      <S.InputContainer suffix={suffix} {...rest}>
        <Text
          display="flex"
          flexDirection="column"
          fontWeight="semi"
          variant="milliBold"
          textTransform="capitalize"
          htmlFor={id}
        >
          <Text as="label" htmlFor={id}>
            {label}
            {hint && (
              <Text
                mb={1}
                variant="micro"
                fontWeight="400"
                textTransform="none"
              >
                {hint}
              </Text>
            )}
          </Text>

          {hasError && (
            <S.InputErrorMessage
              aria-live="assertive"
              id={`${id}-error`}
              role="alert"
              showErrorMessage={hasError}
            >
              <Icon name="error" mr={2} /> {errorMessage}
            </S.InputErrorMessage>
          )}
          <Box position="relative">
            {getInputType()}
            {isLoading && (
              <Box position="absolute" right=".2rem" top=".2rem" bg="white">
                <Spinner size="3rem" stroke=".3rem" />
              </Box>
            )}
          </Box>
        </Text>
      </S.InputContainer>
    )
  }
)

Input.propTypes = propTypes
Input.defaultProps = defaultProps

export default Input
