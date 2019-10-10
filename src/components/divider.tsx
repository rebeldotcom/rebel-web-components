import styled from 'styled-components'
import { theme } from '../styles'
import Box from './box'

const Divider = styled(Box)`
  flex: 1;
  display: block;
  font-size: ${theme.fontSizes[0]};
  overflow: hidden;
  text-align: center;
  text-transform: uppercase;
  color: ${theme.colors.greyDark};

  &:before,
  &:after {
    content: '';
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 50%;
    background-color: ${theme.colors.greyDark};
  }
  &:before {
    right: ${theme.space.quarter};
    margin-left: -50%;
  }
  &:after {
    left: ${theme.space.quarter};
    margin-right: -50%;
  }
`

export default Divider
