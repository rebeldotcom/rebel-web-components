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
import styled, { css } from 'styled-components'

interface As {
  as?: React.ElementType
}

const defaultStyles = css`
  & {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 700;
      margin-top: 5px;
      margin-bottom: 10px;
    }

    h1 {
      font-family: Montserrat, sans-serif;
      font-size: 40px;
      line-height: 42px;
      font-weight: 300;
      color: #333;
    }

    h2 {
      font-size: 22px;
      line-height: 24px;
    }

    h3 {
      margin: 0;
      font-size: 20px;
      line-height: 22px;
    }

    h4 {
      font-size: 16px;
      line-height: 18px;
    }

    ul,
    ol {
      margin: 1em 0;
    }

    p,
    ul,
    ol {
      margin: 0 0 17px;
    }

    ul {
      list-style: disc;
    }

    blockquote {
      margin: 1em 40px;
    }

    b,
    strong {
      font-weight: bold;
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
      width: 100%;
    }

    td,
    th {
      padding: 7px;
      vertical-align: top;
    }

    td {
      font-size: 14px;
    }
  }
`

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

const StyleReset: React.FC<BoxProps> = styled.div`
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
  ${shadow}
  ${defaultStyles}
`

StyleReset.defaultProps = {
  display: 'flex',
}

export default StyleReset
