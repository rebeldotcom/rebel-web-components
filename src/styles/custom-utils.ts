import { theme as baseTheme } from './theme'

const { colors: themeColors, space: themeSpace } = baseTheme

const colors = {
  red: {
    bg: themeColors.red,
    hover: themeColors.redDark,
    text: themeColors.white,
  },
  green: {
    bg: themeColors.green,
    hover: themeColors.greenDark,
    text: themeColors.white,
  },
  blue: {
    bg: themeColors.blue,
    hover: themeColors.blueDark,
    text: themeColors.white,
  },
  white: {
    bg: themeColors.white,
    hover: themeColors.greyLightest,
    text: themeColors.black,
  },
  black: {
    bg: themeColors.black,
    hover: themeColors.blackLighter,
    text: themeColors.white,
  },
  orange: {
    bg: themeColors.orange,
    hover: themeColors.orange,
    text: themeColors.black,
  },
}

const paddingVariants = {
  small: `${themeSpace.quarter} ${themeSpace.half}`,
  base: `${themeSpace.half} ${themeSpace.regular}`,
  large: ``,
  wide: `${themeSpace.half} ${themeSpace.bigger}`,
}

const defaultButtonStyles = `
  appearance: none;
  text-align: center;
  text-decoration: none;
  padding: 0.8rem 1.6rem;
  text-transform: capitalize;
  font-size: 1.3rem;
  font-weight: 400;
  transition: all 0.2s ease-in-out;
  min-width: 3rem;
  letter-spacing: 1px;
  border-width: 1px !important;
  display: inline-block;
  border-width: 1px;
  border-style: solid;
`

export const buttonStyles = ({
  color = 'green',
  theme,
  variant = 'solid',
  btnSize = 'base',
}) => {
  console.assert(
    typeof color === 'string',
    `Color must be a string, received: ${color}`
  )

  const { text, hover, bg } = colors[color]
  const { radii } = theme

  const padding = `padding: ${paddingVariants[btnSize]};`

  switch (variant) {
    case 'solid': {
      return `
        transition: all .2s;
        ${defaultButtonStyles}
        ${padding}
        color: ${text};
        background: ${bg};
        border-radius: ${radii.small};
        border-color: ${bg};

        &:hover {
          background: ${hover};
          color: ${text};
        }
      `
    }
    case 'inverse': {
      if (color === 'white') {
        return `
          ${defaultButtonStyles}
          ${padding}
          color: ${bg};
          background: transparent;
          border-radius: ${radii.small};
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
        `
      }

      return `
        ${defaultButtonStyles}
        ${padding}
        color: ${themeColors.black};
        background: ${themeColors.white};
        border-radius: ${radii.small};
        border-color: ${bg};

        &:hover,
        &:focus {
          color: ${themeColors.black};
          border-color: ${hover};
        }

        &,
        &:link,
        &:visited {
          color: ${themeColors.black};
        }

      `
    }

    case 'minimal': {
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
      `
    }

    case 'navbar': {
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
      `
    }

    case 'underlined': {
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
      `
    }

    case 'scroll-widget': {
      return `
        ${defaultButtonStyles}
        transition: all .2s ease-in-out 0s;
        opacity: 0.9;
        background: ${themeColors.blackLighter};

        &:hover {
          background: ${themeColors.green};
        }

      `
    }
    case 'link': {
      return `
        ${defaultButtonStyles}
        background: none;
        padding: 0;
        text-decoration: underline;
        border: none;
        color: ${color}
      `
    }

    default:
      return `
        color: ${bg};
      `
  }
}
