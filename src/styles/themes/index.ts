import { css } from 'styled-components'

const remify = (n: number) => `${n / 10}rem`
const pixify = (n: number) => `${n}px`

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512].map(remify)
const breakpoints = [600, 900, 1200].map(pixify)
const colors = {
  white: '#ffffff',
  black: '#000000',

  'primary-50': '#F7F6F9',
  'primary-200': '#CDC9DD',
  'primary-100': '#E6E4EE',
  'primary-300': '#B4AFCD',
  'primary-400': '#9B94BC',
  'primary-500': '#453E63',
  'primary-600': '#3F395B',
  'primary-700': '#37314E',
  'primary-800': '#2E2942',
  'primary-900': '#201C2D',

  'secondary-50': '#FFFAF2',
  'secondary-100': '#FFF6E6',
  'secondary-200': '#FFF1D9',
  'secondary-300': '#FFECCC',
  'secondary-400': '#FFE8C0',
  'secondary-500': '#FFE3B3',
  'secondary-600': '#FFDEA6',
  'secondary-700': '#FFD999',
  'secondary-800': '#FFD58D',
  'secondary-900': '#FFD080',

  'neutral-50': '#F9FAFB',
  'neutral-100': '#F3F4F6',
  'neutral-200': '#E5E7EB',
  'neutral-300': '#D1D5DB',
  'neutral-400': '#9CA3AF',
  'neutral-500': '#6B7280',
  'neutral-600': '#4B5563',
  'neutral-700': '#374151',
  'neutral-800': '#1F2937',
  'neutral-900': '#111827',

  'success-50': '#F0FDF4',
  'success-100': '#DCFCE7',
  'success-200': '#BBF7D0',
  'success-300': '#86EFAC',
  'success-400': '#4ADE80',
  'success-500': '#22C55E',
  'success-600': '#16A34A',
  'success-700': '#15803D',
  'success-800': '#166534',
  'success-900': '#14532D',

  'destructive-50': '#FEF2F2',
  'destructive-100': '#FEE2E2',
  'destructive-200': '#FECACA',
  'destructive-300': '#FCA5A5',
  'destructive-400': '#F87171',
  'destructive-500': '#EF4444',
  'destructive-600': '#DC2626',
  'destructive-700': '#B91C1C',
  'destructive-800': '#991B1B',
  'destructive-900': '#7F1D1D',

  'warning-50': '#FFFBEB',
  'warning-100': '#FEF3C7',
  'warning-200': '#FDE68A',
  'warning-300': '#FCD34D',
  'warning-400': '#FBBF24',
  'warning-500': '#F59E0B',
  'warning-600': '#D97706',
  'warning-700': '#B45309',
  'warning-800': '#92400E',
  'warning-900': '#78350F',

  'supporting-aqua': '#0BFFE6',
  'supporting-grapefruit': '#FE546F',
  'supporting-sunflower': '#FFD080',
  'supporting-strongCyan': '#36BFC6',
  'supporting-orangePeel': '#FF9D00',
  'supporting-haciendaBlue': '#00819E',
}

const fonts = {
  title: `'DM Sans', Inter, ivyjournal, sans-serif;`,
  body: `Inter, Montserrat, 'work-sans', sans-serif;`,
}

const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semi: 600,
  bold: 700,
  extraBold: 800,
}

const media = {
  smallAndDown: (...args: [TemplateStringsArray, ...string[]]) => css`
    @media only screen and (max-width: ${breakpoints[0]}) {
      ${css(...args)};
    }
  `,
}

const textStyles = {
  hero: {
    fontSize: ['56px', '76px', '76px'],
    lineHeight: ['60px', '78px', '78px'],
    fontFamily: fonts.title,
    letterSpacing: '-1.3px',
  },
  'heading-h1': {
    fontSize: ['36px', '56px', '56px'],
    lineHeight: ['60px', '72px', '72px'],
    fontFamily: fonts.title,
    letterSpacing: ['-0.72px', '-1.12px', '-1.12px'],
  },
  'heading-h2': {
    fontSize: ['32px', '40px', '40px'],
    lineHeight: ['44px', '52px', '52px'],
    fontFamily: fonts.body,
    letterSpacing: ['-0.64px', '-0.8px', '-0.8px'],
  },
  'heading-h3': {
    fontSize: ['28px', '32px', '32px'],
    lineHeight: ['36px', '40px', '40px'],
    fontFamily: fonts.body,
    letterSpacing: ['-0.56px', '-0.64px', '-0.64px'],
  },
  'heading-h4': {
    fontSize: ['24px', '28px', '28px'],
    lineHeight: ['32px', '36px', '36px'],
    fontFamily: fonts.body,
    letterSpacing: ['-0.48px', '-0.56px', '-0.56px'],
  },
  'heading-h5': {
    fontSize: ['20px', '24px', '24px'],
    lineHeight: ['28px', '32px', '32px'],
    fontFamily: fonts.body,
    letterSpacing: ['-0.4px', '-0.48px', '-0.48px'],
  },
  'heading-h6': {
    fontSize: ['18px', '20px', '20px'],
    lineHeight: ['24px', '28px', '28px'],
    fontFamily: fonts.body,
    letterSpacing: ['-0.36px', '-0.4px', '-0.4px'],
  },

  'paragraph-large': {
    fontSize: ['18px', '20px', '20px'],
    lineHeight: ['24px', '28px', '28px'],
    fontFamily: fonts.body,
  },
  'paragraph-medium': {
    fontSize: ['14px', '16px', '16px'],
    lineHeight: ['20px', '24px', '24px'],
    fontFamily: fonts.body,
  },
  'paragraph-small': {
    fontSize: ['18px', '20px', '20px'],
    lineHeight: ['24px', '28px', '28px'],
    fontFamily: fonts.body,
  },
  'paragraph-xsmall': {
    fontSize: ['10px', '12px', '12px'],
    lineHeight: ['16px', '18px', '18px'],
    fontFamily: fonts.body,
  },
}

const radii = {
  none: '0px',
  default: '8px',
  rounded: '999px',
  circle: '50%',
}

export const THEME = {
  media,
  space,
  radii,
  fonts,
  colors,
  textStyles,
  fontWeights,
  breakpoints,
}
