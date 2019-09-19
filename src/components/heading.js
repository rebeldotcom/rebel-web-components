import styled from 'styled-components'
import { variant } from 'styled-system'
import Text from './text'

const headingStyles = variant({
  scale: 'headingStyles',
  prop: 'headingStyle',
})

const Heading = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.title};
  ${headingStyles}
`

Heading.defaultProps = {
  as: 'h2',
}

export default Heading
