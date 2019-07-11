import styled from "styled-components";
import {
  flexbox,
  color,
  border,
  display,
  space,
  system,
  typography,
  layout,
  textStyle
} from "styled-system";

const textTransform = system({
  textTransform: true
});

const truncateText = ({ truncate }) => {
  if (!truncate) return "";

  return `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
};

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
`;

export default Text;
