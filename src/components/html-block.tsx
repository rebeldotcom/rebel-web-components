import React from 'react'
import {
  space,
  SpaceProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  flexbox,
  FlexboxProps,
  position,
  PositionProps,
  border,
  BorderProps,
  shadow,
  ShadowProps,
} from 'styled-system'
import styled from 'styled-components'

interface As {
  as?: React.ElementType
}

export type BoxProps = React.RefAttributes<HTMLElement> &
  React.HTMLAttributes<HTMLElement> &
  LayoutProps &
  ColorProps &
  SpaceProps &
  PositionProps &
  FlexboxProps &
  ShadowProps &
  BorderProps &
  As

const Block: React.FC<BoxProps> = styled.div`
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
  ${shadow}

  p {
    margin: ${({ theme: { space } }) => space.regular} 0;
  }

  ul {
    margin-left: ${({ theme: { space } }) => space.regular};
    list-style-type: disc;
  }
`

const HtmlBlock = ({ children, ...rest }) => (
  <Block {...rest} dangerouslySetInnerHTML={{ __html: children }} />
)

export default HtmlBlock
