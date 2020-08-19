import styled from 'styled-components'
import {
  flexbox,
  color,
  border,
  display,
  space,
  system,
  typography,
  layout,
  textStyle,
  variant,
  fontFamily,
} from 'styled-system'
import { theme } from '../styles/theme'

const textTransform = system({
  textTransform: true,
})

const textVariants = variant({
  scale: 'textVariants',
  prop: 'variant',
})

const truncateText = ({ truncate }) => {
  if (!truncate) return ''

  return `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `
}

const Text = styled.div`
  ${border}
  ${color}
  ${display}
  ${layout}
  ${space}
  ${typography}
  ${textStyle}
  ${truncateText}
  ${textTransform}
  ${flexbox}
  ${textVariants}
`

Text.defaultProps = {
  lineHeight: theme.lineHeights.body,
  fontFamily: 'body',
}

export default Text
