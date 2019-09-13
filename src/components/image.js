import Image from 'gatsby-image'
import styled from 'styled-components'
import { position, layout, margin } from 'styled-system'

const Img = styled(Image)`
  ${position}
  ${margin}
  ${layout}
`

Img.defaultProps = {
  height: 'auto',
  maxWidth: '100%',
}

export default Img
