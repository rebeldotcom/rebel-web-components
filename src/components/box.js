import { space, color, layout, flexbox, position, border } from "styled-system";
import styled from "styled-components";

const Box = styled.div`
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
`;

Box.defaultProps = {
  display: "flex"
};

export default Box;
