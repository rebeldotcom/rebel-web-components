import React, { InputHTMLAttributes, LegacyRef, useState } from 'react'
import { FlexboxProps, LayoutProps, MarginProps } from 'styled-system'
import { DefaultTheme } from 'styled-components'
import Box from '../box'
import Text from '../text'
import Spinner from '../spinner'
import * as S from './input.styles'
import Icon from '../icon'

type InputProps = InputHTMLAttributes<HTMLInputElement> &
  MarginProps &
  FlexboxProps &
  LayoutProps & {
    ariaLabel?: string
    errorMessage?: string
    hasError?: boolean
    hint?: string | null
    icon?: React.ReactNode
    isLoading?: boolean
    label?: string
    suffix?: string
    textarea?: boolean
    rows?: number
  }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      ariaLabel = '',
      autoComplete = 'on',
      checked = false,
      disabled = false,
      errorMessage = '',
      hasError = false,
      hint = null,
      icon = '',
      id,
      isLoading = false,
      label = '',
      name = '',
      onBlur = () => {},
      onChange = () => {},
      placeholder = '',
      required = false,
      rows = 5,
      suffix = '',
      textarea = false,
      type = 'text',
      value = undefined,
      accept = '*',
      ...rest
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState<boolean>(
      type !== 'password'
    )

    const renderSuffix = () => {
      if (!suffix) return null

      return <S.InputSuffix>{suffix}</S.InputSuffix>
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
          onClick={() => {
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
            accept={accept}
            aria-invalid={hasError}
            aria-label={ariaLabel}
            aria-required={required}
            autoComplete={autoComplete}
            checked={checked}
            data-lpignore={autoComplete !== 'on'}
            disabled={disabled}
            id={id}
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
          ref={ref as LegacyRef<HTMLTextAreaElement>}
          disabled={disabled}
          id={id}
          name={name}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={e => onChange(e as any)}
          placeholder={placeholder}
          required={required}
          rows={rows}
          value={value}
        />
      )
    }

    const getInputType = () => {
      if (textarea) return getTextArea()

      return getInput()
    }

    return (
      <S.InputContainer {...rest}>
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
                fontWeight="regular"
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

export default Input
