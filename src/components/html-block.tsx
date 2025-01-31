import React from 'react'
import {
  space,
  color,
  layout,
  flexbox,
  position,
  border,
  shadow,
  typography,
} from 'styled-system'
import styled from 'styled-components'
import { BoxProps } from './box'

const Block: React.FC<BoxProps> = styled.div<BoxProps>`
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
  ${shadow}
  ${typography}

  p {
    margin: ${({ theme: { space } }) => space.regular} 0;
  }

  ul {
    margin-left: ${({ theme: { space } }) => space.big};
    list-style-type: disc;
  }
`

function HtmlBlock({ children, ...rest }: BoxProps) {
  return (
    <Block
      {...rest}
      dangerouslySetInnerHTML={{ __html: children?.toString() || '' }}
    />
  )
}

export default HtmlBlock
