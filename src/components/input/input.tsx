import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Box from '../box'
import Text from '../text'
import Spinner from '../spinner'
import * as S from './input.styles'
import Icon from '../icon'

const propTypes = {
  ariaLabel: PropTypes.string,
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
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  rows: PropTypes.number,
  suffix: PropTypes.string,
  systemProps: PropTypes.shape({}),
  textarea: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

const defaultProps = {
  ariaLabel: '',
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
  value: null,
}

const Input = React.forwardRef<HTMLInputElement>(
  (
    {
      ariaLabel,
      autoComplete,
      checked,
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
      placeholder,
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
          display="inline-block"
          left="calc(100% - 55px)"
          position="absolute"
          top="0.6rem"
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
          title="Show/Hide password"
          type="button"
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
            aria-label={ariaLabel}
            aria-required={required}
            autoComplete={autoComplete}
            checked={checked}
            data-lpignore={autoComplete !== 'on'}
            disabled={disabled}
            id={id}
            max={max}
            maxLength={maxLength}
            min={min}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            placeholder={placeholder}
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
          name={name}
          onChange={onChange}
          placeholder={placeholder}
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
          htmlFor={id}
          textTransform="capitalize"
          variant="milliBold"
        >
          <Text as="label" htmlFor={id}>
            {label}
            {hint && (
              <Text
                fontWeight="400"
                mb={1}
                textTransform="none"
                variant="micro"
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
              <Icon mr={2} name="error" /> {errorMessage}
            </S.InputErrorMessage>
          )}
          <Box position="relative">
            {getInputType()}
            {isLoading && (
              <Box bg="white" position="absolute" right=".2rem" top=".2rem">
                <Spinner size="3rem" stroke=".3rem" />
              </Box>
            )}
          </Box>
        </Text>
      </S.InputContainer>
    )
  }
)

Input.displayName = 'Input'

Input.propTypes = propTypes
Input.defaultProps = defaultProps

export default Input
