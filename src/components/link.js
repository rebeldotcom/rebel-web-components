import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { margin, typography, layout, system, alignSelf } from "styled-system";
import { buttonStyles } from "../styles/custom-utils";

const textDecoration = system({
  textDecoration: true
});

const StyledLink = styled.a`

  &:hover {
    text-decoration: underline;
  }

  ${alignSelf}
  ${margin}
  ${layout}
  ${typography}
  ${buttonStyles}
  ${textDecoration}
`;

const defaultProps = {
  as: "a",
  className: "",
  display: "inline-block",
  newTab: false,
  onClick: null,
  testId: "",
  variant: "default"
};

const propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  display: PropTypes.string,
  href: PropTypes.string.isRequired,
  newTab: PropTypes.bool,
  onClick: PropTypes.func,
  testId: PropTypes.string,
  variant: PropTypes.string
};

const Link = ({ onClick, children, ariaLabel, newTab, testId, ...rest }) => {
  const tabProps = newTab
    ? { rel: "noopener noreferrer", target: "_blank" }
    : {};

  return (
    <StyledLink
      aria-label={ariaLabel}
      data-testid={testId}
      onClick={onClick}
      title={ariaLabel}
      {...rest}
      {...tabProps}
    >
      {children}
    </StyledLink>
  );
};

Link.defaultProps = defaultProps;
Link.propTypes = propTypes;

export default Link;
