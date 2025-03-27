import styled from 'styled-components'
import { variant } from 'styled-system'
import Text, { TextProps, typographyVariants } from './text'

type HeadingProps = TextProps & {
  headingStyles?: number
}

// DEPRECATED - Use prop `variant` (check text.js)
const headingStyles = variant({
  scale: 'headingStyles',
  prop: 'headingStyle',
})

const Heading: React.FC<HeadingProps> = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.title};
  ${headingStyles}
  ${typographyVariants}
`

Heading.defaultProps = {
  as: 'h2',
}

export default Heading
