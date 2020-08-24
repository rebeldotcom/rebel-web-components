import React from 'react'
import styled from 'styled-components'
import Box from './box'
import Text from './text'
import Radio from './radio'
import { theme } from '../styles/theme'

const { radii, space, colors } = theme

type Options = {
  content?: React.ReactNode
  description?: React.ReactNode
  footer?: string
  header?: React.ReactNode
  id: string
  testId?: string
}

type SelectorOptions = {
  onChange: (id: string) => void
  options: Options[]
  selected: number | string
  title?: string
  withRadio?: boolean
}

const SelectorOption = styled(Box)`
  margin: ${space[1]};
  display: flex;
  flex: 1;

  > input[type='radio'] {
    opacity: 0;
    position: absolute;
  }

  > input[type='radio']:focus + div {
    outline: rgb(59, 153, 252) auto 5px;
  }

  > input[type='radio']:checked + div {
    border-color: ${colors.green};
  }
`

const OptionContent = styled(Box)`
  border: 1px solid ${colors.greyLight};
  border-radius: ${radii.large};
  padding: 10px 20px;
  flex: 1;

  h2 {
    font-weight: 300;
    text-transform: uppercase;
  }

  p {
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.6rem;
  }
`

const Selector = ({
  title,
  options,
  selected,
  onChange,
  withRadio,
  ...rest
}: SelectorOptions) => {
  const onChangeHandler = id => {
    onChange(id)
  }

  const renderOptions = () => {
    return options.map(
      ({ id, header, description, footer, content, testId = '' }) => {
        const isChecked = id === selected

        return (
          <SelectorOption as="label" key={id} data-testid={testId} htmlFor={id}>
            <input
              aria-label={id}
              checked={isChecked}
              id={id}
              onChange={event => onChangeHandler(id)}
              title={id}
              type="radio"
            />

            <OptionContent
              flexDirection="column"
              justifyContent="space-between"
              bg="whiteDark"
            >
              {content || (
                <React.Fragment>
                  <h2>{header}</h2>
                  <p>{description}</p>
                  <Text
                    textAlign="right"
                    fontSize="2rem"
                    fontWeight="200"
                    color="green"
                  >
                    {footer}
                  </Text>
                </React.Fragment>
              )}
              {withRadio && (
                <Box
                  justifyContent="center"
                  mt="1rem"
                  css={`
                    span {
                      margin-left: 0;
                    }
                  `}
                >
                  <Radio
                    id={id}
                    isChecked={isChecked}
                    onChange={event => onChangeHandler(id)}
                  />
                </Box>
              )}
            </OptionContent>
          </SelectorOption>
        )
      }
    )
  }

  return (
    <Box as="fieldset" display="block" width="100%" {...rest}>
      <legend>{title}</legend>
      <Box as="ul" flexWrap="wrap">
        {renderOptions()}
      </Box>
    </Box>
  )
}

export default Selector
