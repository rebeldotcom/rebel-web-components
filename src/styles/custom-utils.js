import { colors as themeColors } from "./theme";

const colors = {
  red: {
    bg: themeColors.red,
    hover: themeColors.redDark,
    text: themeColors.white
  },
  green: {
    bg: themeColors.green,
    hover: themeColors.greenDark,
    text: themeColors.white
  },
  blue: {
    bg: themeColors.blue,
    hover: themeColors.blueDark,
    text: themeColors.white
  },
  white: {
    bg: themeColors.white,
    hover: themeColors.whiteDark,
    text: themeColors.black
  },
  black: {
    bg: themeColors.black,
    hover: themeColors.blackLighter,
    text: themeColors.white
  }
};

const defaultButtonStyles = `
  appearance: none;
  text-align: center;
  text-decoration: none;
  padding: 0.8rem 1.6rem;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 400;
  transition: all 0.2s ease-in-out;
  min-width: 3rem;
  letter-spacing: 1px;
  border-width: 1px !important;
  display: inline-block;
  border-width: 1px;
  border-style: solid;
`;

export const buttonStyles = ({
  color = "green",
  theme,
  variant = "solid",
  btnSize = "large"
}) => {
  console.assert(
    typeof color === "string",
    `Color must be a string, received: ${color}`
  );

  const { text, hover, bg } = colors[color];
  const { radii, space } = theme;

  const padding =
    btnSize === "small"
      ? `padding: ${space.quarter} ${space.half};`
      : `padding: ${space.half} ${space.regular};`;

  switch (variant) {
    case "solid": {
      return `
        ${defaultButtonStyles}
        ${padding}
        color: ${text};
        background: ${bg};
        border-radius: ${radii.large};
        border-color: ${bg};

        &:hover {
          background: ${hover};
        }
      `;
    }
    case "inverse": {
      if (color === "white") {
        return `
          ${defaultButtonStyles}
          ${padding}
          color: ${bg};
          background: transparent;
          border-radius: ${radii.large};
          border-color: ${bg};

          &:hover.
          &:focus {
            color: ${hover};
            border-color: ${hover};
          }

          &,
          &:link,
          &:visited {
            color: ${bg};
          }
        `;
      }

      return `
        ${defaultButtonStyles}
        ${padding}
        color: ${bg};
        background: transparent;
        border-radius: ${radii.large};
        border-color: ${bg};

        &:hover,
        &:focus {
          color: ${hover};
          border-color: ${hover};
        }

        &,
        &:link,
        &:visited {
          color: ${bg};
        }

      `;
    }

    case "minimal": {
      return `
        ${defaultButtonStyles}
        ${padding}
        color: ${bg};
        background: transparent;
        border: none;
        padding: 0;

        &:hover {
          color: ${hover};
        }
      `;
    }

    case "navbar": {
      return `
        background: none;
        color: ${themeColors.whiteDark};
        font-weight: 600;
        border: none;
        padding: 0;


        &:hover,
        &:active {
          text-decoration: underline;
        }
      `;
    }

    case "underlined": {
      return `
        ${defaultButtonStyles}
        color: ${bg};
        background: transparent;
        border: none;
        padding-left: 0;
        padding-right: 0;
        border-bottom: 1px solid ${bg};

        &:hover {
          color: ${hover};
          border-bottom: 1px solid ${hover};
        }
      `;
    }

    default:
      return `
        color: ${bg};
      `;
  }
};
