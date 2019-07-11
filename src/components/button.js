import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { margin, layout } from "styled-system";
import { colors as themeColors } from "../styles/theme";
import { buttonStyles } from "../styles/custom-utils";

const defaultProps = {
  as: "button",
  disabled: false,
  display: "inline-block",
  testId: "",
  title: ""
};

const propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  display: PropTypes.string,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  testId: PropTypes.string,
  title: PropTypes.string
};

const StyledButton = styled.button`
  &:hover {
    cursor: pointer;
  }
  
  ${buttonStyles}
  ${margin}
  ${layout}

  &:disabled {
    cursor: not-allowed;
    border: 1px solid ${themeColors.greyLight} !important;
    background: ${themeColors.greyLight} !important;
    color: ${themeColors.greyDarker};
  }
`;

const Button = ({
  id,
  onClick,
  children,
  ariaLabel,
  testId,
  title,
  disabled,
  ...rest
}) => {
  const handleButtonClick = event => {
    event.preventDefault();
    onClick();
  };

  return (
    <StyledButton
      aria-label={ariaLabel}
      data-testid={testId}
      disabled={disabled}
      id={id}
      onClick={handleButtonClick}
      title={title || ariaLabel}
      type="button"
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;

export default Button;
