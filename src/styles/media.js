import { css } from "styled-components";

export const screen = {
  small: "600px",
  smallUp: "601px",
  medium: "992px",
  mediumUp: "993px",
  large: "1200px",
  largeUp: "1201px"
};

// 1366x768
// 1920x1080
// 360x640
// 1440x900
// 1536x864
// 1600x900

export default {
  smallLaptop: (...args) => css`
    @media only screen and (max-width: 700px) and (max-height: 400px) and (orientation: portrait) {
      ${css(...args)};
    }
  `,
  smallAndDown: (...args) => css`
    @media only screen and (max-width: ${screen.small}) {
      ${css(...args)};
    }
  `,
  mediumOnly: (...args) => css`
    @media only screen and (min-width: ${screen.smallUp}) and (max-width: ${screen.medium}) {
      ${css(...args)};
    }
  `,
  mediumAndDown: (...args) => css`
    @media only screen and (max-width: ${screen.medium}) {
      ${css(...args)};
    }
  `,
  mediumAndUp: (...args) => css`
    @media only screen and (min-width: ${screen.smallUp}) {
      ${css(...args)};
    }
  `,
  largeAndDown: (...args) => css`
    @media only screen and (max-width: ${screen.large}) {
      ${css(...args)};
    }
  `,
  largeAndUp: (...args) => css`
    @media only screen and (min-width: ${screen.mediumUp}) {
      ${css(...args)};
    }
  `,
  veryLarge: (...args) => css`
    @media only screen and (min-width: ${screen.largeUp}) {
      ${css(...args)};
    }
  `,
  rotated: (...args) => css`
    @media only screen and (orientation: landscape) {
      ${css(...args)};
    }
  `,
  touch: (...args) => css`
    @media (hover: none) {
      ${css(...args)};
    }
  `
};
