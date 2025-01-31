import {
  space,
  color,
  layout,
  flexbox,
  position,
  border,
  shadow,
} from 'styled-system'
import styled, { css } from 'styled-components'
import { theme } from '../../styles/theme'
import { BoxProps } from '../box'

const { fonts: title } = theme

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
      font-family: ${title};
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
      font-size: 20px;
      line-height: 22px;
    }

    h4 {
      font-size: 16px;
      line-height: 18px;
    }

    ul,
    ol {
      margin: 0 2em;
    }

    p {
      margin: 0 0 17px;
    }

    ul {
      list-style: disc;
    }

    blockquote {
      margin: 1em 40px;
    }

    /* Font changes */

    b,
    strong {
      font-weight: bold;
    }

    i {
    }

    em {
    }

    mark {
    }

    small {
    }

    del {
    }

    ins {
    }

    sub {
    }

    sup {
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

const StyleReset: React.FC<BoxProps> = styled.div<BoxProps>`
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
