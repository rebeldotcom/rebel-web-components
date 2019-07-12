import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
/* eslint-disable prefer-destructuring */
// Need to set value since styled-system no longer provides this in v5+
const remify = n => `${n / 10}rem`;
const pixify = n => `${n}px`;

export const space = [0, 4, 8, 16, 32, 64, 128, 256, 512].map(remify);

const [none, quarter, half, regular, big, bigger, biggest] = space;

space.none = none;
space.quarter = quarter;
space.half = half;
space.regular = regular;
space.big = big;
space.bigger = bigger;
space.biggest = biggest;

// COLORS

export const colors = {
  white: "#fff",
  whiteDark: "#f7f7f7",
  greyLight: "#d7d7d7",
  grey: "#B2B2B2",
  greyDark: "#999999",
  greyDarker: "#666",
  blackLighter: "#333",
  blackLight: "#222328",
  black: "#000",

  greenLightest: "#f3f5e6",
  greenLighter: "#D3DCA3",
  greenLight: "#A5C20F",
  green: "#859F00",
  greenDark: "#6B8000",

  redLighter: "#F9BEAE",
  redLight: "#E37054",
  red: "#F04A22",
  redDark: "#CC3E1C",
  redNew: "#d82a29",

  blueDark: "#0011b1",
  blue: "#0018ff",
  blueLight: "#4255ff",
  blueLighter: "#7a88ff",
  blueLightest: "#d4d7f7",

  orange: "#ff9600",

  clear: "transparent",

  focus: "#406198",

  overlay: "rgba(0,0,0,.6)",
  overlayDark: "rgba(0,0,0,.8)",

  success: "#859f00",
  successLight: "#e4eeaa",

  warning: "#d49e03",
  warningLight: "#f7eac9",

  error: "#f04822",
  errorLight: "#ffd1c7",

  facebook: "#3b5998"
};

// FONTS

export const fonts = {
  default: `"Montserrat", sans-serif`
};

export const border = {
  radius: "2px",
  color: colors.greyLight,
  dark: "#2d2e33"
};

// const letterSpacings = {
//   normal: 'normal',
//   sm: '.2rem',
//   md: '.3rem',
//   lg: '.4rem',
// }

const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 96].map(remify);

// const fontWeights = {
//   light: 300
//   normal: 400,
//   bold: 500,
//   boldest: 700,
// }

const breakpoints = [600, 900, 1200].map(pixify);

export const borders = [
  "none",
  `1px solid ${colors.greyDark}`,
  `1px solid ${colors.greyLight}`,
  `1px solid ${colors.white}`,
  `1px solid ${colors.red}`
];

borders.none = borders[0];
borders.dark = borders[1];
borders.input = borders[2];
borders.error = borders[4];

// Example for shadows
const shadows = [`0 1rem 3rem rgba(${colors.black},.5)`];

const radii = {
  none: 0,
  small: "1px",
  large: "2px"
};

const textStyles = {
  caps: {
    textTransform: "uppercase"
  },
  navHeading: {
    textTransform: "uppercase",
    fontWeight: 600,
    letterSpacing: "2px"
  }
};

const messageStyles = {
  error: {
    background: colors.errorLight,
    color: colors.error
  },
  success: {
    backgroundColor: colors.successLight,
    color: colors.success
  },
  warning: {
    backgroundColor: colors.warningLight,
    color: colors.warning
  },
  info: {
    backgroundColor: colors.orangeLight,
    border: `1px solid ${colors.black}`,
    color: colors.black
  },
  whiteOnDark: {
    backgroundColor: "transparent",
    border: `1px solid ${colors.white}`,
    color: colors.white
  }
};

const headingStyles = [
  {
    fontSize: "4.5rem",
    lineHeight: "1.2",
    fontWeight: "300"
  },
  {
    fontSize: "3.2rem",
    lineHeight: "1.2",
    fontWeight: "300"
  },
  {
    fontSize: "2.4rem",
    lineHeight: "1.2",
    fontWeight: "300"
  },
  {
    fontSize: "1.8rem",
    lineHeight: "1.2",
    fontWeight: "400"
  },
  {
    fontSize: "1.6rem",
    lineHeight: "1.2",
    fontWeight: "600"
  },
  {
    fontSize: "1.4rem",
    lineHeight: "1.2",
    fontWeight: "600",
    letterSpacing: "2"
  }
];

export const zIndex = {
  modal: 9999,
  coverPage: 100,
  aboveNavbar: 95,
  navbar: 90,
  belowNavbar: 85,
  bgImage: -1
};

export const focus = {
  color: "#406198",
  style: "box-shadow: 0 0 0 2px #406198;"
};

export const theme = {
  borders,
  breakpoints,
  colors,
  fonts,
  fontSizes,
  headingStyles,
  messageStyles,
  shadows,
  space,
  textStyles,
  zIndices: zIndex,
  radii
};

export const ThemeProvider = ({ children }) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);
