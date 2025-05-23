import React from 'react'
import styled from 'styled-components'
import Box from './box'
import Text from './text'
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
  hasRadio?: boolean
}

const SelectorOption = styled(Box)`
  margin: ${space.quarter};
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

function Selector({
  title,
  options,
  selected,
  onChange,
  hasRadio,
  ...rest
}: SelectorOptions) {
  const onChangeHandler = (id: string) => {
    onChange(id)
  }

  const renderOptions = () => {
    return options.map(
      ({ id, header, description, footer, content, testId = '' }) => {
        const isChecked = id === selected

        return (
          <Box key={id} as="li" flex="1">
            <SelectorOption as="label" data-testid={testId} htmlFor={id}>
              <input
                aria-label={id}
                checked={isChecked}
                id={id}
                onChange={() => onChangeHandler(id)}
                title={id}
                type="radio"
              />

              <OptionContent
                bg="whiteDark"
                flexDirection="column"
                justifyContent="space-between"
              >
                {content || (
                  <>
                    <h2>{header}</h2>
                    <p>{description}</p>
                    <Text
                      color="greenDark"
                      fontSize={4}
                      fontWeight="extraLight"
                      textAlign="right"
                    >
                      {footer}
                    </Text>
                  </>
                )}
                {hasRadio && (
                  <Box justifyContent="center" mt={3}>
                    <Box
                      alignItems="center"
                      bg="white"
                      border="1px solid black"
                      borderRadius="circle"
                      height="12px"
                      justifyContent="center"
                      width="12px"
                    >
                      <Box
                        bg={isChecked ? 'black' : 'white'}
                        borderRadius="circle"
                        height="4px"
                        width="4px"
                      />
                    </Box>
                  </Box>
                )}
              </OptionContent>
            </SelectorOption>
          </Box>
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
