import { swiftTheme } from './swift-theme'

const isEmpty = val => val == null || !(Object.keys(val) || val).length

const defaultButtonStyles = `
  appearance: none;
  text-align: center;
  text-decoration: none;
  padding: 1.2rem 1.6rem 0.8rem 1.6rem;
  text-transform: capitalize;
  font-size: 1.3rem;
  font-weight: 400;
  transition: all 0.2s ease-in-out;
  min-width: 3rem;
  border-width: 1px !important;
  display: inline-block;
  border-width: 1px;
  border-style: solid;
`

export const buttonStyles = ({
  color,
  theme,
  variant = 'solid',
  size = 'base',
}) => {
  const colors = {
    red: {
      bg: theme.colors.red,
      hover: theme.colors.redDark,
      text: theme.colors.white,
    },
    redDark: {
      bg: theme.colors.redDark,
      hover: theme.colors.redDark,
      text: theme.colors.white,
    },
    green: {
      bg: theme.colors.green,
      hover: theme.colors.greenDark,
      text: theme.colors.white,
    },
    greenDark: {
      bg: theme.colors.greenDark,
      hover: theme.colors.greenDark,
      text: theme.colors.white,
    },
    mintGreen: {
      bg: theme.colors.mintGreen,
      hover: theme.colors.mintGreenDark,
      text: theme.colors.black,
    },
    blue: {
      bg: theme.colors.blue,
      hover: theme.colors.blueDark,
      text: theme.colors.white,
    },
    blueDark: {
      bg: theme.colors.blueDark,
      hover: theme.colors.blueDark,
      text: theme.colors.white,
    },
    white: {
      bg: theme.colors.white,
      hover: theme.colors.greyLightest,
      text: theme.colors.black,
    },
    black: {
      bg: theme.colors.black,
      hover: theme.colors.blackLighter,
      text: theme.colors.white,
    },
    orange: {
      bg: theme.colors.orange,
      hover: theme.colors.orange,
      text: theme.colors.white,
    },
    orangeDark: {
      bg: theme.colors.orangeDark,
      hover: theme.colors.orangeDark,
      text: theme.colors.white,
    },
    pink: {
      bg: theme.colors.pink,
      hover: theme.colors.pinkDark,
      text: theme.colors.white,
    },
    pinkLighter: {
      bg: theme.colors.pinkLighter,
      hover: theme.colors.pink,
      text: theme.colors.black,
    },
    purple: {
      bg: theme.colors.purple,
      hover: theme.colors.purpleDark,
      text: theme.colors.white,
    },
    purpleDark: {
      bg: theme.colors.purpleDark,
      hover: theme.colors.purpleDark,
      text: theme.colors.white,
    },
    deepKoamaru: {
      bg: theme.colors.deepKoamaru,
      hover: theme.colors.deepKoamaru,
      text: theme.colors.white,
    },
    grapefruit: {
      bg: theme.colors.grapefruit,
      hover: theme.colors.grapefruit,
      text: theme.colors.white,
    },
    strongCyan: {
      bg: theme.colors.strongCyan,
      hover: theme.colors.strongCyan,
      text: theme.colors.white,
    },
    sunflower: {
      bg: theme.colors.sunflower,
      hover: theme.colors.sunflower,
      text: theme.colors.white,
    },
    sunflowerBlack: {
      bg: theme.colors.sunflower,
      hover: theme.colors.sunflower,
      text: theme.colors.black,
    },
    haciendaBlue: {
      bg: theme.colors.haciendaDarkBlue,
      hover: theme.colors.haciendaBlue,
      text: theme.colors.white,
    },
    magenta: {
      bg: theme.colors.magenta,
      hover: theme.colors.magenta,
      text: theme.colors.white,
    },
    aqua: {
      bg: theme.colors.aqua,
      hover: theme.colors.aqua,
      text: theme.colors.white,
    },
    orangePeel: {
      bg: theme.colors.orangePeel,
      hover: theme.colors.orangePeel,
      text: theme.colors.white,
    },
  }

  const paddingVariants = {
    small: `${theme.space.quarter} ${theme.space.half}`,
    base: `${theme.space.half} ${theme.space.regular}`,
    large: ``,
    wide: `${theme.space.half} ${theme.space.bigger}`,
  }

  const baseColor = isEmpty(color) ? 'greenDark' : color
  const { text, hover, bg } = colors[baseColor]
  const { radii } = theme

  const padding = `padding: ${paddingVariants[size]};`

  switch (variant) {
    case 'rounded': {
      return `
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
        transition: all 0.2s;
        background: ${swiftTheme.colors.primary[900]};
        border: 0.8px solid ${swiftTheme.colors.primary[900]};
        border-radius: ${radii.rounded};
        padding: 10px;
        color: white;
        white-space: nowrap;
        font-size: 12px;
        font-weight: 600;

        &:hover {
          background: ${swiftTheme.colors.primary[800]};
          border: 0.8px solid ${swiftTheme.colors.primary[800]};
        }
      `
    }
    case 'rounded-inverse': {
      return `
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
        transition: all 0.2s;
        background: white;
        border: 0.8px solid ${swiftTheme.colors.primary[500]};
        border-radius: ${radii.rounded};
        padding: 10px;
        color: ${swiftTheme.colors.neutral[900]};
        white-space: nowrap;
        font-size: 12px;
        font-weight: 600;

        &:hover {
          background: rgba(0, 0, 0, 0.05);
          border: 1px solid ${swiftTheme.colors.primary[800]};
        }
      `
    }
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
        color: ${bg};
        background: transparent;
        border-radius: ${radii.small};
        border-color: ${bg};

        &:hover,
        &:focus {
          color: ${theme.black};
          border-color: ${hover};
        }

        &,
        &:link,
        &:visited {
          color: ${theme.black};
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
        color: ${theme.colors.whiteDark};
        font-weight: 600;
        border: none;
        padding: 0;
        text-transform: uppercase;
        letter-spacing: 2px;

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
        text-decoration: underline;

        &:hover {
          color: ${hover};
        }
      `
    }

    case 'scroll-widget': {
      return `
        ${defaultButtonStyles}
        transition: all .2s ease-in-out 0s;
        opacity: 0.9;
        background: ${theme.colors.blackLighter};

        &:hover {
          background: ${theme.colors.green};
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
        color: ${theme.colors[color]};
      `
    }
    case 'basic': {
      return `
        background: none;
        color: ${bg};
      `
    }
    default:
      return `
        color: ${bg};
      `
  }
}
