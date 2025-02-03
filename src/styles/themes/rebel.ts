const remify = (n: number) => `${n / 10}rem`
const pixify = (n: number) => `${n}px`

const colors = {
  white: '#ffffff',
  whiteDark: '#f7f7f7',

  greyLightest: '#e7e7e7',
  greyLighter: '#EFEFEF',
  greyLight: '#d7d7d7',
  grey: '#B2B2B2',
  greyDark: '#999999',
  greyDarker: '#666666',

  blackLighter: '#333444',
  blackLight: '#222328',
  black: '#000000',

  'primary-50': '#F7F6F9',
  'primary-100': '#E6E4EE',
  'primary-200': '#CDC9DD',
  'primary-300': '#B4AFCD',
  'primary-400': '#9B94BC',
  'primary-500': '#453E63',
  'primary-600': '#3F395B',
  'primary-700': '#37314E',
  'primary-800': '#2E2942',
  'primary-900': '#201C2D',

  'secondary-50': '#FFE6EE',
  'secondary-100': '#FFABCA',
  'secondary-200': '#FF82B4',
  'secondary-300': '#F7579C',
  'secondary-400': '#EB2D85',
  'secondary-500': '#DF0772',
  'secondary-600': '#B80062',
  'secondary-700': '#910052',
  'secondary-800': '#6B0040',
  'secondary-900': '#45002C',

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

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512].map(remify)
const sizes = {
  sm: pixify(580),
  md: pixify(880),
  lg: pixify(1100),
  xl: pixify(1280),
  xxl: pixify(1400),
}

const fonts = {
  title: `'DM Sans', Inter, ivyjournal, sans-serif;`,
  body: `Inter, Montserrat, 'work-sans', sans-serif;`,
}

const lineHeights = {
  none: 1,
  title: 1.2,
  body: 1.7,
  tall: 2,
  long: 3,
}

const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 96].map(remify)

const fontWeights = {
  thin: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semi: 600,
  bold: 700,
}

const textStyles = {
  navHeading: {
    textTransform: 'uppercase',
    fontWeight: fontWeights.semi,
    letterSpacing: '2px',
  },
}

const breakpoints = [600, 900, 1200].map(pixify)

const borders = {
  none: 'none',
  light: `1px solid ${colors.greyDark}`,
  dark: `1px solid ${colors.blackLighter}`,
  input: `1px solid ${colors.greyLight}`,
  error: `1px solid ${colors['destructive-500']}`,
}

const radii = {
  none: '0px',
  small: '1px',
  large: '2px',
  larger: '6px',
  rounded: '999px',
  circle: '50%',
}

export const REBEL_THEME = {
  space,
  sizes,
  fonts,
  radii,
  colors,
  borders,
  fontSizes,
  textStyles,
  lineHeights,
  fontWeights,
  breakpoints,
}
